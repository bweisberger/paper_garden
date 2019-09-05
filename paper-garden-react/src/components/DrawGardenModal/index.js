import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'

const useInputValue = (initialState) => {
    const [val, setVal] = useState(initialState)

    return{
        val, onChange: (e) => setVal(e.target.value)
    }
}

function DrawGardenModal({makeGarden}){
    const length = useInputValue(0);
    const width = useInputValue(0);
    const [show, setShow] = useState(false);
    const handleClose = () => {
        console.log(length.val, "<--length.val in DrawGardenModal", width.val, "<--width.val in DrawGardenModal")
        makeGarden(length.val, width.val)
        setShow(false);
    }
    const handleCancel = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);

    return ( 
        <div>
            <Button variant='primary' onClick={handleShow}>
                Start a Garden
            </Button>

            <Modal 
                size='lg' 
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
                    <form>
                        <br/><label>Length in feet</label><br/>
                        <input type="text" placeholder="Enter number" {...length}/><br/>
                        <br/><label>Width in feet</label><br/>
                        <input type="text" placeholder="Enter number" {...width}/><br/>
                    </form> 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant='primary' onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DrawGardenModal
