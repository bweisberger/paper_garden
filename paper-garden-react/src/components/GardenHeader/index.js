import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import AddPlantModal from '../AddPlantModal'


export default function GardenHeader(
    {
    plants, 
    setPlants, 
    projectName, 
    setProject
    })
{
    return(
        <Row>
            <Col>
                {projectName} 
            </Col>
            <Col xs={6}/>
            <Col>
                <AddPlantModal/>
            </Col>
        </Row>
        

    )
}