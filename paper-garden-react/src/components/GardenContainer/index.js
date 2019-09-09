import React, { useState } from 'react'
import ShowProject from '../ShowProject'
import GardenGrid from '../GardenGrid'
import GardenHeader from '../GardenHeader'
import DrawGardenModal from '../DrawGardenModal'
import { Container, Row, Col } from 'react-bootstrap'


plantModel = {
    name: 'name',
    spread: 'width'
}
const Plants = () => {
    const plantMap = plants.map((plant)=>{
        return(
            <Draggable style={{zIndex: '3', position: 'relative'}}>
                <div style={{zIndex: '4', position: 'absolute', height:plant.spread, width:plant.spread}}>
                    {plant.name}
                </div>
            </Draggable>
        )
    })
}

export default function GardenContainer(){
    //projectName = string
    const [projectName, setProject] = useState('Untitled')
    //dimensions = {width: x, height: y}
    const [dimensions, setDimensions] = useState(null)
    //plants = [{name: string, spread: int}]
    const [plants, setPlants] = useState(null)

    return(
        dimensions ? 
        <Container>
            <GardenHeader setPlants={setPlants} plants={plants} setProject={setProject} projectName={projectName}/>
            <Row>
                <GardenGrid project={project} dimensions={dimensions} style={{zIndex: '-1', position: 'relative'}}/>
                {plants ? <Plants/> : null}
            </Row>
        </Container>
        :
        <Container>
            <Row>
                <DrawGardenModal 
                    makeGarden={(width, height) => {
                        console.log(width, "<--width in GardenContainer", height, "<--height in GardenContainer")
                        setDimensions({width: width, height: height});   
                    }
                }
                />
            </Row>
            
        </Container>        
    )
}