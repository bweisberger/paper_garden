    import React, {useState} from 'react'
    import { Modal, Button } from 'react-bootstrap'
    import { uniqueId } from 'lodash'

    // const useInputValue = (initialState) => {
    //     const [val, setVal] = useState(initialState)

    //     return{
    //         val, onChange: (e) => setVal(e.target.value)
    //     }
    // }
    
    export default function AddPlantModal({plantData, addPlantData}){
        // console.log(plants, '<--plants in AddPlantModal')
        const [id] = useState(()=>uniqueId())
        const [name, setName] = useState('');
        const [spread, setSpread] = useState(0);
        const [show, setShow] = useState(false);
        const handleClose = (e) => {
            if(e){
                e.preventDefault()
            }
            if(name && spread){
                if(plantData){
                    addPlantData([{name: name, spread: spread, id: id, position: {x: 0, y: 0}}, ...plantData])
                    setShow(false);  
                } else {
                    addPlantData([{name: name, spread: spread, id: id, position: {x: 0, y: 0}}])
                    setShow(false);
                }  
                 
            } else {
                console.log('(did not addPlantData)')
                setShow(false);
            } 
        }
        const handleChange = (e) => {
            if(e.target.name === 'name'){
                console.log(e.target.value, "<---value in handleChange, name")
                setName(e.target.value)
            } else {
                console.log(e.target.value)
                setSpread(e.target.value)
            }
        }
        const handleCancel = () => setShow(false);
        const handleShow = (e) => {
            console.log(e.target, "<--clicked the link")
            setShow(true);
        }
        return (
            <div className='add-plant-modal'>
                <Button variant='success' onClick={handleShow}>Add a plant</Button>
                <Modal
                    size= 'sm'
                    aria-labelledby='contained-modal-title-vcenter'
                    centered
                    show={show}
                    onHide={handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Enter Plant Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Enter Plant Name and Spread
                        <form onSubmit={handleClose}>
                            <br/><label>Name</label><br/>
                            <input type='text' name='name' placeholder="Enter Plant Name" onChange={handleChange}/><br/>
                            <br/><label>Spread in feet</label><br/>
                            <input type='text' name='spread' placeholder='Enter a number' onChange={handleChange}/><br/>
                            <br/>
                            <Button
                                variant = 'secondary'
                                onClick = {handleCancel}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant = 'success'
                                type='submit'
                                onClick = {handleClose}
                            >
                                Add Plant
                            </Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }