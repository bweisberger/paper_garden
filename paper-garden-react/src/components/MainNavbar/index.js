import React, { useEffect, useState } from 'react'
import { Navbar, Button } from 'react-bootstrap'
import db, { auth, provider } from '../../firebase.js'
import Login from '../Login'
import Profile from '../Profile'

export default function MainNavbar({showProject, children}){
    const [user, setUser] = useState(null)
    // const [logged, setLogged] = useState(false)
    
    function handleLogin(){
        auth.signInWithPopup(provider)
        .then((result)=>{
            const user = result.user
            setUser(user)
        })
        
        // setLogged(true)
        // console.log(user, "<--user in Navbar/handleLogin") 
        // console.log(password, "<--password in Navbar/handleLogin") 
    }
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUser(user)
            }
        })   
    })
    // add component below back into ternay on line 27 if you want to see profile link and name
    return (
        <Navbar bg='light' variant='light'>
            <Navbar.Brand href="#home">paper garden</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Navbar.Text>
                    {user ? <Profile user={user} setUser={setUser} showProject={showProject}/> : <Button onClick={handleLogin}>Login</Button>}
                </Navbar.Text>
            </Navbar.Collapse>  
        </Navbar>
    
    )
}