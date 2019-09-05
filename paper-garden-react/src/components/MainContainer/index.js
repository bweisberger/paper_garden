import React, { useEffect, useState }  from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import { string, object } from 'prop-types'
import DrawGardenModal from '../DrawGardenModal'
import MainNavbar from '../MainNavbar'
import GardenContainer from '../GardenContainer'


export default function MainContainer(){
    const [dimensions, setDimensions] = useState(null);
    const [project, setProject] = useState(null)

    function showProject(id){

        const project = fetch('url'+id)
        setProject(project)
        
    }
    
    useEffect(()=>{
        // This runs after state changes, so we can use it to check that state was set
        console.log(dimensions, "<--dimensions in useEffect")
    })
    return(
        // {this.state.drawGardenModal : <DrawGardenModal/>, null}
        <div>
            <MainNavbar showProject={showProject}/>
            <Container>
                <Row>
                    <Col>
                        {dimensions ? 
                            <GardenContainer dimensions={dimensions} project={project}/> 
                            : 
                            null
                        }

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DrawGardenModal 
                            makeGarden={(length, width) => {
                                console.log(length, "<--length in MainContainer", width, "<--width in MainContainer")
                                setDimensions({length: length, width: width});   
                            }
                        }/>
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
           
