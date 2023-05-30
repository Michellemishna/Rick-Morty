import Card from './Card';
import styles from "./modules.css/Cards.module.css"

function Cards({characters, onClose}) {
  return (
 <div className={styles.divCards}> 
   {
   characters.map(({id,name,species,gender,image}) => {
      return (
      <Card
        key={id}
        id= {id}
        name={name}
        species={species}
        gender={gender}
        image={image}
        onClose={() => onClose(id)} 
         />
      );
   })}
    </div>
);
}

export default Cards;