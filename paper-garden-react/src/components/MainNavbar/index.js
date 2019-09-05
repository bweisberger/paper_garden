import React, { useEffect, useState } from 'react'
import { Navbar } from 'react-bootstrap'
import Login from '../Login'
import Profile from '../Profile'

export default function MainNavbar({showProject, children}){
    const [user, setUser] = useState(null)
    // const [logged, setLogged] = useState(false)
    function handleLogin(user, password){
        setUser({name: user, password: password})
        // setLogged(true)
        // console.log(user, "<--user in Navbar/handleLogin") 
        // console.log(password, "<--password in Navbar/handleLogin") 
    }
    useEffect(()=>{
        console.log(user, "user in navbar on useEffect")    
    })
    return (
        <Navbar bg='light' variant='light'>
            <Navbar.Brand href="#home">paper garden</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Navbar.Text>
                    {user ? <Profile user={user} showProject={showProject}/> : <Login handleLogin={handleLogin}/>}
                </Navbar.Text>
            </Navbar.Collapse>  
        </Navbar>
    
    )
}