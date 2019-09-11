import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import db, { auth, provider } from '../../firebase.js'
import ProjectList from '../ProjectList'

export default function Profile({user, showProject, setUser}){
    const [show, setShow] = useState(false);
    const [projects, setProjects] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function fetchUserProjects(userName){
        const project = {id: '1', user: userName, name: 'project1', dimensions: {length: 10, width: 20}}
        console.log(project, 'project in fetchProjects')
        return project
        // const projects = fetch('url'+name);
    }

    function handleLogout() {
        auth.signOut()
        .then(()=>{
            setUser(null)
        })
    }

    useEffect(()=>{
        // console.log(user.name, 'user.val in profile useEffect')
        setProjects([fetchUserProjects(user.displayName), ...projects])
    }, [])
    return(
        <div>
            <div className='profile-link' onClick={handleShow}>
                <div className='profile-img-wrapper'>
                    <img className='profile-img' src={user.photoURL}/>
                </div>
            </div>
            
            <Modal
                size='md'
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{user.displayName}'s Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProjectList showProject={showProject} projects={projects}/>
                </Modal.Body>
                <Button onClick={handleLogout}>Logout</Button>
            </Modal>
        </div>
    )

}