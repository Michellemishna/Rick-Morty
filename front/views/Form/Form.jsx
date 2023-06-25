import React from "react";
import { useState } from "react";
import styles from './Form.module.css';

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validate = (userData) => {
  const errors = {};
  if(!userData.username) {errors.username='Se requiere un correo'}
  if(userData.username.length > 35) {errors.username = 'El email no puede ser mayor a 35 caracteres'}
  if(!regexEmail.test(userData.username)) {errors.username='Debe ser un correo electrónico'};
    
  if(!userData.password.match(/\d/)) {errors.password='la contraseña tiene que tener al menos un número'};
  if(userData.password.length < 6 || userData.password.length > 10) {errors.password = 'la longitud debe ser entre 6 y 10 caracteres'}
  
  return errors;
};

const Form = ({login}) => {
  const [userData, setUserData] = useState({ 
    username:'', 
    password:'', 
  });

const [errors, setErrors] = useState ({
    username:'', 
    password:'' 
});  
   

const handleInputChange = (event) => {
  setUserData({...userData,[event.target.name]:event.target.value});
  setErrors(validate({...userData,[event.target.name]:event.target.value}))
}
 
const handleSubmit = (event) =>{
  event.preventDefault();
  login(userData);
};

 return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
       <input type="text" name="username" value={userData.username} 
       onChange={handleInputChange} 
       className={errors.username && styles.warning}/>
       {errors.username && <p className={styles.danger}>{errors.username}</p>}

            
      <label htmlFor="password">Password</label>
       <input type="password" name="password" value={userData.password} 
       onChange={handleInputChange} 
       className={errors.password && styles.warning}/>
       {errors.password && <p className={styles.danger}>{errors.password}</p>}


       <button type='submit'>Login</button>
    </form>
    );
};

export default Form;