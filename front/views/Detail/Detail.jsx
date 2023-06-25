import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import styles from "./Detail.module.css"

const Detail = () => {
    const {detailId} = useParams();

    const [character,setCharacter] = useState({});

  useEffect(() => {
    // const KEY='89ef17c4d08e.e9a264ef146c44a4edab';
        
    axios(`http://localhost:3001/detail/${detailId}`).then((response) => setCharacter(response.data));
     }, [detailId]);
    return (
      <div>
        {character.name ? (
        <>
        <h1>{character.name}</h1>
        <h2>{character.status}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.origin?.name}</h2>
        <img src={character.image} alt= "img_personaje"/>
        </>
        ) : (
          <h3>Loading...</h3>
        )}
        </div>
    );
};

export default Detail;