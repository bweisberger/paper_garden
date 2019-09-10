import React, { useState, useEffect } from 'react'
import ShowProject from '../ShowProject'
import GardenGrid from '../GardenGrid'
import GardenHeader from '../GardenHeader'
import DrawGardenModal from '../DrawGardenModal'
import Draggable from '../Draggable'
import PlantModal from '../PlantModal'
import { Container, Row, Col } from 'react-bootstrap'
import { uniqueId } from 'lodash'
// import FlashMessage from 'react-flash-message'


const plantModel = {
    name: 'name',
    spread: 'width'
}

function getBiggestSide(obj){
    console.log(obj, 'object in getBiggestSide')
    if (obj){
        const {width, height} = obj
        if (width > height){
            return width
        } else {
            return height
        }
    } else {
        return('did not get biggest side')
    }

}

export default function GardenContainer(){
    //projectName = string
    const [projectName, setProject] = useState('Untitled')
    //dimensions = {width: x, height: y}
    const [dimensions, setDimensions] = useState(null)
    //plants = [{name: string, spread: int}]
    const [plantData, addPlantData] = useState(null)
    //plantDivs are draggable elements, see below 'newPlantDiv'
    const [plantDivs, setPlantDivs] = useState(null)
    //generate ids for plandDivs
    const [id] = useState(() => uniqueId())

    function removePlant(plantId, oldPlantDivs=plantDivs){
        const plantsArray = [...oldPlantDivs]
        for(let i = 0; i < plantsArray.length; i++){
            if(plantsArray[i].key == plantId){
                plantsArray.splice(i, 1)
                setPlantDivs([...plantsArray])
                return
            }
        }
    }

    useEffect(()=>{
        const addNewPlant = (plantData, dimensions, id, plantDivs) => {
            if(plantData){
                console.log(plantData, "<--plantData in GardenContainer")
                console.log(dimensions, "<---dimensions in GardenContainer")
                const longEdge = getBiggestSide(dimensions)
                console.log(longEdge)
                let {spread, name} = plantData[0]
                if (longEdge >= spread){
                    spread = (spread/longEdge)*70
                } 
                else {
                    console.log('plant too big!')
                    return
                }
                const newPlantDiv = 
                        <Draggable key={id}>
                            <div 
                            style={{
                                height:`${spread}vh`, 
                                width:`${spread}vh`, 
                                background:'lightgreen', 
                                border:'2px green solid', 
                                borderRadius:'50%'}}
                            >
                                <PlantModal name={name} id={id} removePlant={removePlant}/>
                            </div>
                        </Draggable> 
                if(plantDivs){
                    setPlantDivs([...plantDivs, newPlantDiv])
                }   else{
                    setPlantDivs([newPlantDiv])
                }
                console.log(plantDivs, "<--plants");
            } else {
                return
            }    
        }
        // console.log(dimensions, "<--dimensions at the bottom of useEffect, gardenContainer")
        addNewPlant(plantData, dimensions, id) 
    }, [plantData, dimensions, id])
    
    return(
        <Container className="garden-box-container">
            {dimensions ?
                <Row className='garden-box' >
                    <GardenHeader addPlantData={addPlantData} setProject={setProject} projectName={projectName}/>
                    <GardenGrid project={projectName} dimensions={dimensions}/>
                    {plantDivs ? plantDivs : null}
                </Row>
                :
                null
            }
               
            <Row className='draw-garden-container'>
                <DrawGardenModal 
                    makeGarden={(gardenWidth, gardenHeight) => {
                        console.log(gardenWidth, "<--width in GardenContainer", gardenHeight, "<--height in GardenContainer")
                        setDimensions({width: gardenWidth, height: gardenHeight});   
                        }
                    }
                />
            </Row>
            
        </Container>        
    )
}