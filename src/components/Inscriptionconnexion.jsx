


 import React, { useState } from 'react';

 export function Connexion() {
   const [email, setemail] = useState('');
   const [motDePasse, setMotDePasse] = useState('');

   const handleIdentifiantChange = (e) => {
     setIdentifiant(e.target.value);
   };

   const handleMotDePasseChange = (e) => {
     setMotDePasse(e.target.value);
   };

   const handleConnexion = () => {
     // Ici, vous pouvez ajouter la logique de connexion, par exemple, envoyer les données à un serveur.
     console.log('Identifiant:', identifiant);
     console.log('Mot de passe:', motDePasse);
   };

   return (
     <div>
//       <h2>Connexion</h2>
//       <form>
//         <div>
//           <label htmlFor="identifiant">Identifiant :</label>
//           <input
            type="text"
             id="identifiant"
             value={identifiant}
             onChange={handleIdentifiantChange}
           />
//         </div>
//         <div>
//           <label htmlFor="motDePasse">Mot de passe :</label>
//           <input
             type="password"
             id="motDePasse"
             value={motDePasse}
             onChange={handleMotDePasseChange}
          />
         </div>
         <button type="button" onClick={handleConnexion}>
          Se connecter
         </button>
       </form>
     </div>
   );
}
 export default Connexion;