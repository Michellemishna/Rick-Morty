import styles from "./modules.css/SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id,setId] = useState ('');

   const handleChange = (event) => {
      setId(event.target.value);
   };
   return (
      <div>
          <input className={styles.inputsearch} type='search'  onChange={handleChange} />
      <button className={styles.button} onClick={() => onSearch(id)}>Agregar</button> 
      </div>
   );
}