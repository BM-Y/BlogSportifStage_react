
import React, { useState } from 'react';

 export function Formulaire(){
const [formData, setformData]=useState({
    titre:'',
    contenue:'',
    date:'2023/11/07',
    user:'http::/localhost:8000/api/user/1',
    image:'',
    

})
const handleChange = (e)=>{
    const { name, value } = e.target;
    setformData({ ...formData,[name]: value })
}
const handleSubmit = (e) => { 

    e.preventDefault();

    fetch ('http://localhost:8000/api/articles',{
        method:'POST',
        headers:{
            'Content-Type':'application/ld+json',
        },
        
        body: JSON.stringify(formData),
        
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
        })
}


 return (
<div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="titre">Choisissez un titre</label><br />
        <input type="text" name="titre" value={formData.titre} onChange={handleChange}></input><br />

     
        <textarea
          name="contenue"
          value={formData.contenue}
          onChange={handleChange}
          placeholder="Saisissez le contenue de votre article"
          rows={25} 
          cols={50}
          
          /><br />

        <label htmlFor="image">Illustrez votre article en image:</label>
        <input
          type="text"
          value={formData.image}
          name="image"
          onChange={handleChange}
    ></input>
    <input type="hidden" name="user" value={formData.user_id} onChange={handleChange}></input><br />
    <button type="submit">Envoyer</button>
    </form>
</div>


 )


 }