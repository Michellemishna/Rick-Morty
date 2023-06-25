import React from "react";
import {Link} from 'react-router-dom';
import SearchBar from "./SearchBar";
import styles from "./SearchBar.module.css";


const Nav = ({onSearch}) => {
    return (
        <div>         
             {/* About */}
             <nav className={styles.Navegador}>
             <Link to='/about'><button className={styles.buttona}>About</button></Link>
             <Link to='/home'><button className={styles.buttona}>Home</button></Link>
             <Link to='/favorites'><button className={styles.buttona}>Favorites</button></Link>
             <br />
            <SearchBar onSearch={onSearch}/>
      
        </nav>
        </div>

    )
}

export default Nav;