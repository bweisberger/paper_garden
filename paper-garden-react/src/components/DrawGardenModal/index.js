import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'

const useInputValue = (initialState) => {
    const [val, setVal] = useState(initialState)

    return{
        val, onChange: (e) => setVal(e.target.value)
    }
}

function DrawGardenModal({makeGarden}){
    const width = useInputValue(0);
    const height = useInputValue(0);
    const [show, setShow] = useState(false);
    const handleClose = (e) => {
        e.preventDefault()
        if(width.val && height.val){
            console.log(width.val, "<--width.val in DrawGardenModal", height.val, "<--height.val in DrawGardenModal")
            makeGarden(width.val, height.val)
            setShow(false);
        } else {
            console.log(width.val, "<---width.val in DrawGardenModal", ' (did not makeGarden)')
        }
    }
    const handleCancel = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);

    return ( 
        <div className='draw-garden-modal'>
            <Button variant='success' onClick={handleShow}>
                Start a Garden
            </Button>

            <Modal 
                size='sm' 
                aria-labelledby='contained-modal-title-vcenter'
                centered 
                show={show} 
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Enter Garden Dimensions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Set Your Garden's Dimensions
                    <form onSubmit={handleClose}>
                        <br/><label>Width in feet</label><br/>
                        <input type="text" placeholder="Enter number" {...width}/><br/>
                        <br/><label>Height in feet</label><br/>
                        <input type="text" placeholder="Enter number" {...height}/><br/>
                        <br/>
                        <Button 
                            style={{}} 
                            variant='secondary' 
                            onClick={handleCancel}
                        >
                        Cancel
                        </Button>
                        <Button 
                            type="submit" 
                            variant='primary' 
                            onClick={handleClose}
                        >
                            Save Changes
                        </Button>
                    </form> 
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default DrawGardenModal
