import React, { useState } from 'react';

const LoginPage = () => {
     const [name, setName] = useState("");

     const handleChange = (e) => {
       setName(e.target.value);
     };

     const handleClick = () => {
       alert(`Bonjour ${name}`);
     };

     return (
       <div>
         <h1>Bienvenue chez nous !</h1>
         <h2>Connectez-vous</h2>
         <form>
           <input
             onChange={handleChange}
             type="text"
             value={name}
             required
             name="name"
             minlength="1"
             placeholder="Entrez votre prénom ..."
           />
           <button onClick={handleClick} type="button">
             Accédez à votre espace
           </button>
         </form>
       </div>
     );
};

export default LoginPage;