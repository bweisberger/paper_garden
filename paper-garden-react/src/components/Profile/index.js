import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import ProjectList from '../ProjectList'

export default function Profile({user, showProject, children}){
    const [show, setShow] = useState(false);
    const [projects, setProjects] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function fetchProjects(name){
        const project = {id: '1', user: name, name: 'project1', dimensions: {length: 10, width: 20}}
        console.log(project, 'project in fetchProjects')
        return project
        // const projects = fetch('url'+name);
    }

    useEffect(()=>{
        // console.log(user.name, 'user.val in profile useEffect')
        setProjects([fetchProjects(user.name), ...projects])
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