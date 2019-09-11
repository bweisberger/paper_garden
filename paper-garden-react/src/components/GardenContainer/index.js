import React, { useState, useEffect } from 'react'
import ShowProject from '../ShowProject'
import GardenGrid from '../GardenGrid'
import GardenHeader from '../GardenHeader'
import DrawGardenModal from '../DrawGardenModal'
import Draggable from '../Draggable'
import PlantModal from '../PlantModal'
import { Container, Row, Col } from 'react-bootstrap'
import { uniqueId } from 'lodash'
import db from '../../firebase'
// import FlashMessage from 'react-flash-message'


const plantModel = {
    name: 'name',
    spread: 'width'
}

function getBiggestSide(obj){
    console.log(obj, 'object in getBiggestSide')
    if (obj){
        let {width, height} = obj
        width = parseInt(width)
        height = parseInt(height)
        // console.log(typeof(width), typeof(height), 'types of width and height in getBiggestSide')
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

    //plantData = [{name: string, spread: int, position: {x: num, y: num}]
    const [plantData, addPlantData] = useState(null)

    //plantDivs are draggable elements, see below 'newPlantDiv'
    const [plantDivs, setPlantDivs] = useState(null)
    //generate ids for plandDivs
    // const [id] = useState(() => uniqueId())
    const makeGarden = (gardenWidth, gardenHeight) => {
        console.log(gardenWidth, "<--width in GardenContainer", gardenHeight, "<--height in GardenContainer")
        setDimensions({width: gardenWidth, height: gardenHeight});
    }

    const setPlantPosition = (position) => {
        return
            // fetch call to firebase to change position
    }

    const saveProject = () => {
        const project = {
            name: projectName,
            dimensions: dimensions,
            plantData: plantData,
            // plants: plantDivs
        }
        db.collection('projects').add(project)
        .then(function(docRef) {
            console.log('Document written with ID: ', docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error)
        })
    }


    useEffect(()=>{
        const addNewPlantDiv = (plantData, dimensions, plantDivs, setPlantPosition) => {

            if(plantData){
                console.log(plantData, "<--plantData in GardenContainer")
                console.log(dimensions, "<---dimensions in GardenContainer")
                const longEdge = getBiggestSide(dimensions)
                console.log(typeof(longEdge), "longEdge")
                let {spread, name, id} = plantData[0]
                console.log(typeof(spread), "spread in addNewPlantDiv")
                console.log(parseInt(longEdge) >= parseInt(spread), "boolean check")
                if (longEdge >= spread){
                    spread = (spread/longEdge)*70
                } 
                else {
                    console.log('plant too big!')
                    return
                }
                //make new plant Draggable
                const newPlantDiv = 
                        <Draggable key={id} setPlantPosition={setPlantPosition}>
                            <div 
                            style={{
                                height:`${spread}vh`, 
                                width:`${spread}vh`, 
                                background:'lightgreen', 
                                border:'2px green solid', 
                                borderRadius:'50%'}}
                            >
                                <PlantModal name={name} id={id}/>
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
        addNewPlantDiv(plantData, dimensions, plantDivs, setPlantPosition) 
        console.log(plantData, "plantData in useEffect")
    }, [plantData, dimensions])

    // function removePlant(plantId, oldPlantData=plantData, oldPlantDivs=plantDivs){
    //     if(oldPlantData){
    //         const plantDataArray = [...oldPlantData]
    //         for(let i = 0; i < plantDataArray.length; i++){
    //             if(plantDataArray[i].id == plantId){
    //                 plantDataArray.splice(i, 1)
    //                 addPlantData([...plantDataArray])
    //             }
    //         }
    //     }

    //     if(oldPlantDivs){
    //         const plantDivArray = [...oldPlantDivs]
    //         for(let i = 0; i < plantDivArray.length; i++){
    //             if(plantDivArray[i].key == plantId){
    //                 plantDivArray.splice(i, 1)
    //                 setPlantDivs([...plantDivArray])
    //             }
    //         }
    //     }
    //     return
    // }
    
    return(
        <Container className="garden-box-container">
            {dimensions ?
                <Row className='garden-box' >
                    <GardenHeader addPlantData={addPlantData} saveProject={saveProject} setProject={setProject} projectName={projectName}/>
                    <GardenGrid project={projectName} dimensions={dimensions}/>
                    {plantDivs ? plantDivs : null}
                </Row>
                :
                null
            }
               
            <Row className='draw-garden-container'>
                <DrawGardenModal makeGarden={makeGarden}/>
            </Row>
            
        </Container>        
    )
}