import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function PlantModal({name, id, removePlant}){
    const [show, setShow] = useState(false);
    // const [name, setName] = useState('')

    const handleClose = (e) => {
        if(e){
            e.preventDefault()
        }
        removePlant(id) 
        setShow(false)
    }
    const handleCancel = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className='plant-modal'>
            <div onDoubleClick={handleShow} className='plant-name-link'>
                {name}
            </div>
            <Modal
                size= 'sm'
                aria-labelledby='contained-modal-title-vcenter'
                centered
                show={show}
                onHide={handleCancel}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Remove Plant?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant='secondary' onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant='danger' onClick={handleClose}>
                        Remove Plant
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}