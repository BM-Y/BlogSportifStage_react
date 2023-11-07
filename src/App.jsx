import {useEffect, useState } from 'react'
import './style.css'
// import { Formulaire } from './components/Formulaire'
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
    <nav>
  <ul class="navbar">
    <li><a href="#">Accueil</a></li>
      
        {display.map((elem, index)=>
          <article class ="maclassarticle" key={index} >
          <h4>{elem.titre}</h4>
          <date>{elem.date}</date>
          <p>{elem.contenue}</p>
          <img src={elem.image}/>
          </article>
      
)}
    <li><a href="#">Categories</a></li>
    <li><a href="#">À propos</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
     

  
    </>
  )
}

export default App
