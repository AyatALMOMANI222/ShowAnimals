import React,{useState} from "react";
import AddAnimal from '../src/animal/animals';
import './app.css'

const getAnimal=()=>{
    const animal=["bird","cat" , "cow" , "dog" , "gator","horse"]
    return animal[Math.floor(Math.random()*animal.length)]
}
console.log(getAnimal())

function App (){
    const [animals,setAnimals]= useState([])
const handleanimal =()=>{
    setAnimals([...animals,getAnimal()])
}
const renderanimal =animals.map((e,i)=>{
    return <AddAnimal type={e}/>
})
    return(
        <div className="app">
<button onClick={handleanimal}>Add animal</button>
<div className="container">{renderanimal}</div>
        </div>
    )
}
export default App;