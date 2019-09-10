import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

export default function SaveProjectModal({projectName, setProject}){
    const [show, setShow] = useState(false);
    const [name, setName] = useState('')
    const handleClose = (e) => {
        if(e){
            e.preventDefault()
        }
        setProject(name);
        setShow(false);
    }
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleCancel = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='save-project-modal'>
            <div className='project-name' onClick={handleShow}>{projectName}</div>
            <Modal
                size = 'md'
                aria-labelledby='contained-modal-title-vcenter'
                centered
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Save Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Enter Project Name to Save Project
                    <form onSubmit={handleClose}>
                        <br/><label>Project Name</label><br/>
                        <input type='text' name='name' placeholder="Enter Project Name" onChange={handleChange}/><br/>
                        <Button
                            variant = 'secondary'
                            onClick = {handleCancel}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant='success'
                            type='submit'
                            onClick = {handleClose}
                        >
                            Save
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

