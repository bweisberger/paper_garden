import React, { useEffect, useState } from 'react'
import Login from '../Login'
import Profile from '../Profile'

export default function Navbar({children}){
    const [user, setUser] = useState(null)
    // const [logged, setLogged] = useState(false)
    function handleLogin(user, password){
        setUser({name: user, password: password})
        // setLogged(true)
        // console.log(user, "<--user in Navbar/handleLogin") 
        // console.log(password, "<--password in Navbar/handleLogin") 
    }
    useEffect(()=>{
            
    })
    return (
        <div>
            {user ? <Profile user={user}/> : <Login handleLogin={handleLogin}/>}
        </div>
    
    )
}