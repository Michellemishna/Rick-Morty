import { Link } from "react-router-dom";
import styles from "../components/modules.css/Card.module.css";
import { addFav, delFav } from "../Redux/Actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

function Card({id,name,species,gender,image,onClose,addFav,delFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false); 
         delFav(id);
   } else {
      setIsFav(true); 
      addFav({id,name,species,gender,image,onClose,});
   }};

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.cont}>
   <div className={styles.divCard}>
      { isFav ? (
      <button className={styles.btnlike} onClick={handleFavorite}>❤️</button>) : 
      (<button className={styles.btnlike} onClick={handleFavorite}>🤍</button>)}
   
      <button className={styles.botonc} onClick={() => onClose(id)}>X</button>
      <Link to= {`/detail/${id}`}><h2 className={styles.titleName}>{name}</h2></Link>
      <img className={styles.image} src={image} alt={name} /> 
      <h2 className={styles.titles}>{species}</h2>
      <h2 className={styles.titles}>{gender}</h2>
   </div>
   </div>
);
};

const mapStateToProps =(state) => {
   return{ myFavorites: state.myFavorites, 
   };
};

const mapDispatchToProps =(distpatch) => {
   return{
      addFav: (character) => { distpatch(addFav(character))
      },
      delFav: (id)=> {distpatch(delFav(id)); 
   },
};
}; 


export default connect(mapStateToProps, mapDispatchToProps)(Card);