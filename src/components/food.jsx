import React,{useState} from 'react';


function Food(props) {
    return(
        <div className='food_div'>
            <h2>{props.name}</h2>
            <div className='food_background' style={{ backgroundImage: `url(${props.imgsrc})` }}>
            </div>
            <p >{props.price}</p>
        </div>
    )
    
}

export default Food;