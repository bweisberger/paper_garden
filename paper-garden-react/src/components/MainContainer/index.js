import React, { useEffect, useState }  from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import { string, object } from 'prop-types'
import DrawGardenModal from '../DrawGardenModal'
import Draggable from '../Draggable'
import Circle from '../Circle'
import MainNavbar from '../MainNavbar'
import GardenContainer from '../GardenContainer'


export default function MainContainer({plantPosition}){
    const [dimensions, setDimensions] = useState(null);
    const [project, setProject] = useState(null)
    
    const showProject = async (id)=> {
        const project = await fetch('url'+id)
        setProject(project)
    }
    
    useEffect(()=>{
        // This runs after state changes, so we can use it to check that state was set
        console.log(dimensions, "<--dimensions in useEffect")
    })
    return(
        // {this.state.drawGardenModal : <DrawGardenModal/>, null}
        <div >
            <MainNavbar showProject={showProject}/>
            <Container >
                <Row>
                    <Col>
                        <GardenContainer 
                            dimensions={dimensions} 
                            project={project}
                        /> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
    // openModal(name){
    //     this.setState({
    //         name: !this.state.name
    //     })
    // }
           
