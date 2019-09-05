import React, { useEffect, useState }  from 'react'
// import { string, object } from 'prop-types'
import DrawGardenModal from '../DrawGardenModal'
import Navbar from '../Navbar'
import GardenContainer from '../GardenContainer'


export default function MainContainer(){
    const [dimensions, setDimensions] = useState({length: 0, width: 0});
    
    useEffect(()=>{
        // This runs after state changes, so we can use it to check that state was set
        console.log(dimensions, "<--dimensions in useEffect")
    })
    return(
        // {this.state.drawGardenModal : <DrawGardenModal/>, null}
        <div>
            <Navbar/>
            <DrawGardenModal makeGarden={(length, width) => {
                console.log(length, "<--length in MainContainer", width, "<--width in MainContainer")
                setDimensions({length: length, width: width});   
                }
                // if(dimensions.val){
                //     console.log(dimensions.val, "dimensions.val")
                // }
            }/>
            {dimensions ? <GardenContainer/> : null}
        </div>
    )
}
    // openModal(name){
    //     this.setState({
    //         name: !this.state.name
    //     })
    // }
           
