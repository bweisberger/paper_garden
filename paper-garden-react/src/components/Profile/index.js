import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import ProjectList from '../ProjectList'

export default function Profile({user, children}){
    const [show, setShow] = useState(false);
    const [projects, setProjects] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function fetchProject(name){
        const projects = fetch('url'+name);
        return projects
    }
    useEffect(()=>{
        setProjects(fetchProjects(user.name))
    }, [])
    return(
        <div>
            <a onClick={handleShow}>{user.name}</a>
            <Modal
                size='md'
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{user.name}'s Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProjectList showProject={showProject} projects={projects}/>
                </Modal.Body>
            </Modal>
        </div>
    )

}