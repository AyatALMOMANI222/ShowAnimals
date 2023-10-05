
import React, { useState } from "react";
import './style.css'
import cat from '../svg (1)/cat.svg'
import bird from '../svg (1)/bird.svg'
import heart from '../svg (1)/heart.svg'

import cow from '../svg (1)/cow.svg'
import dog from '../svg (1)/dog.svg'
import gator from '../svg (1)/gator.svg'
import horse from '../svg (1)/horse.svg'

 const AddAnimal=({type})=>{
const ima={bird,cat,dog,cow,gator,horse}
const [click,setClick]= useState(0)

const handleclick =()=>{
    setClick(click+1)
}
return(
    <div className="animal_show" onClick={handleclick}>
        <img className="ani" alt="animal" src={ima[type]}/>
        <img alt="heart" src={heart} style={{width:10+10*click+'px'}}/>
    </div>
)
 }
 export default AddAnimal;