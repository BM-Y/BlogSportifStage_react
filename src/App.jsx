import {useEffect, useState } from 'react'

import './App.css'

function App() {
  const [display, setDisplay] = useState([])


  useEffect(() =>{
    fetch('http://localhost:8000/api/articles')
    .then(res=>res.json())
    .then(data=>setDisplay(data["hydra:member"]))

},[])




  return (
    <>
     {display.map((elem, index)=>

     <article key={index} >

        <p>{elem.titre}</p>

        <img src={""+elem.image}/>

        </article>


     )}
    
    </>
  )
}

export default App
