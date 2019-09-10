import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import AddPlantModal from '../AddPlantModal'


export default function GardenHeader(
    {
    plantData,
    addPlantData, 
    projectName, 
    setProject
    })
{
    return(
        <>
            <Col>
                {projectName} 
            </Col>
            <Col xs={6}/>
            <Col>
                <AddPlantModal plantData={plantData} addPlantData={addPlantData}/>
            </Col>
        </>
            
        

    )
}