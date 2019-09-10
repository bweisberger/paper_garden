import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

const useInputValue = (initialState) =>{
    const [val, setVal] = useState(initialState)
    return {
        val, onChange: (e) => setVal(e.target.value)
    }
}

function Login({handleLogin}){
    const user = useInputValue('')
    const password = useInputValue('')
    const [show, setShow] = useState(false);
    const handleClose = () => {
        console.log(user.val, '<--user.val in Login')
        handleLogin(user.val, password.val)
        setShow(false);
    }
    const handleCancel = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);

    //function below was used for that values were updating
    // useEffect(()=>{
    //     console.log(user.val, password.val, "user and password in useEffect, Login")
    // })

    return (
        <div>
            <div className='login-link' onClick={handleShow}>Login</div>

            <Modal
                size='sm'
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Enter Your Username and Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleClose}>
                        <br/><label>Username</label>
                        <input type='text' placeholder='Username' {...user}/><br/>
                        <br/><label>Password</label><br/>
                        <input type='password' placeholder='Password' {...password}/><br/>
                        <br/><Button style={{margin:'10px 20px'}} variant='secondary' onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button style={{margin:'10px 20px'}} type="submit" variant='primary' onClick={handleClose}>
                            Log In
                        </Button> 
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Login