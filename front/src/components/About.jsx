import React from "react";
import style from './modules.css/About.module.css';

class About extends React.Component{
    constructor(props){
    super(props);
    }

    render() {
        return(
            <div className={style.content}>
            <h1>Acerca de esta pagina y su creador</h1>
    <div>
        <p>¡Bienvenidos a la aplicación definitiva para los fans de Rick y Morty! Soy Michelle Díaz, la creadora de esta pagina que lleva varias semanas en desarrollo. Desde el principio, me he asegurado de que cada detalle sea perfecto para ofrecer la mejor experiencia posible a los fans de la serie.En ella podrás conocer detalles interesantes sobre sus personajes, como su tipo, genero, habilidades, sus pasatiempos y sus frases icónicas.
        </p>
        <p>En resumen, mi objetivo con esta aplicación es brindar la mejor experiencia posible para los fans de Rick y Morty. Adéntrate en el fascinante universo de la serie de televisión animada más popular de los últimos años."
        </p>
    </div>
            </div>
        );
    }
}
export default About;
