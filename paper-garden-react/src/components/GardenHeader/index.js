import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import AddPlantModal from '../AddPlantModal'
import SaveProjectModal from '../SaveProjectModal'


export default function GardenHeader(
    {
    plantData,
    addPlantData, 
    projectName, 
    setProject,
    saveProject,
    })
{
    return(
        <>
            <Col>
                <SaveProjectModal projectName={projectName} setProject={setProject} saveProject={saveProject}/>
            </Col>
            <Col xs={6}/>
            <Col>
                <AddPlantModal plantData={plantData} addPlantData={addPlantData}/>
            </Col>
        </>
            
        

    )
}