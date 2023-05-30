  import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { filterCards, orderCards } from "../Redux/Actions";
import style from "./modules.css/Favorites.module.css";


const Favorites = () => {

  const favorite = useSelector((state) => state.myFavorites)

  const distpatch= useDispatch();
    
     const handlerOrder = (event)=> {
         distpatch(orderCards(event.target.value))
      }
  
     const handlerFilter = (event)=> {
           distpatch(filterCards(event.target.value))
      }

  return(
    <>
      <div className={style.filter}>
        <select onChange={handlerOrder} >
        <option value="order" disabled='disabled'>Order by</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
        </select>
         <select onChange={handlerFilter}>
             <option value="filter" disabled='disabled'>Filter by by</option>
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             <option value="Genderless">Genderless</option>
             <option value="unknown">unknown</option>
         </select>
      </div>
     <div className={style.divCards}>
    {favorite.map(({id,name,species,gender,image,}) => {
        return( 
          <Card
           key={id}
           id= {id}
           name={name}
           species={species}
           gender={gender}
           image={image}
           
                 />
                );
            })}
            </div>
        </>
    );
};

export default Favorites;