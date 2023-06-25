import './App.css'
// import Card from './components/Card.jsx'
import Cards from './component/Cards.jsx'
import styles from './App.css'
// import SearchBar from './components/SearchBar.jsx'
// import characters from './data.js'
import Nav from './component/Nav.jsx'
import About from '../views/About/About.jsx'
import { useState, useEffect } from 'react'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Detail from '../views/Detail/Detail.jsx'
import Form from '../views/Form/Form.jsx'
import Favorites from './component/Favorites'



function App () {
  const [characters, setCharacters] = useState ([]);
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const username = "michellelunaby@gmail.com";
  const password = "1Alices#";

  function login(userData) {
    if(userData.password === password && userData.username === username) {
    setAccess(true); 
    navigate('/home');
  } else {
    alert("Credenciales incorrectas");
  }
  };

useEffect(() =>{
  !access && navigate('/');
}, [access]);

  const onSearch = (id) => {
    const URL = `http://localhost:3001`
    // const KEY= '89ef17c4d08e.e9a264ef146c44a4edab';

    if(characters.find((char) => char.id === id)){
      return alert('Video Repetido');
    } 

    fetch(`${URL}/onsearch/${id}`)
    .then((response)=>response.json())
    .then((data) => {
      if(data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('¡No hay personajes con este ID!');
      }
   });
};

const onClose = (id) => { 
  setCharacters(characters.filter((character) => character.id !== id));
}
    
  return (
  
    <div className={styles.App} >
      {pathname !== '/' && <Nav onSearch={onSearch} />}
       <Routes>
        {/* <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        /> */}
        <Route path='/' element={<Form login={login}/>}/>   
        <Route path='/home' element={<Cards onClose={onClose}
          characters={characters} />} />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/detail/:detailId' element={<Detail />}/> 
       </Routes>
      
    </div>
    
  )
}

export default App;
