import React, { useState, useEffect } from 'react'
import ShowProject from '../ShowProject'
import GardenGrid from '../GardenGrid'
import GardenHeader from '../GardenHeader'
import DrawGardenModal from '../DrawGardenModal'
import Draggable from '../Draggable'
import { Container, Row, Col } from 'react-bootstrap'


const plantModel = {
    name: 'name',
    spread: 'width'
}

export default function GardenContainer({children}){
    //projectName = string
    const [projectName, setProject] = useState('Untitled')
    //dimensions = {width: x, height: y}
    const [dimensions, setDimensions] = useState(null)
    //plants = [{name: string, spread: int}]
    const [plantData, addPlantData] = useState(null)
    const [plantDivs, addPlantDiv] = useState(null)
    
    

    useEffect(()=>{
        const addNewPlant = (plantData) => {
            if(plantData){
                console.log(plantData, "<--plantData in GardenContainer")
                const {spread, name} = plantData[0]
                const newPlantDiv = 
                        <Draggable>
                            <div style={{
                                height:`${spread}vh`, 
                                width:`${spread}vh`, 
                                background:'lightgreen', 
                                border:'2px green solid', 
                                borderRadius:'50%'}}
                            >
                                {name}
                            </div>
                        </Draggable> 
                if(plantDivs){
                    addPlantDiv([...plantDivs, newPlantDiv])
                }   else{
                    addPlantDiv([newPlantDiv])
                }
                console.log(plantDivs, "<--plants");
            } else {
                return
            }    
        }
        addNewPlant(plantData) 
    }, [plantData])
    
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