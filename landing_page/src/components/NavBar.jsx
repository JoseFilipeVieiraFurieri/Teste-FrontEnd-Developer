import React from "react";
import styles from './NavBar.module.css'
import image from "../assets/Group13.jpg"
import image2 from "../assets/Group.jpg"

function NavBar() {
    return (
        <div className={styles.NavBarContainer }>
          <section> 
        
              <img src={image} alt="bubbles Logo" className={styles.bubbles}/>
              <img src={image2} alt="shop logo" className={styles.shopLogo}/>
          </section>
        

            <div className={styles.navicon}>
               <text>Home</text>
               <text>Categorias</text>
               <text>Sobre</text>
               <text>Localização</text>
               <button type="button" className={styles.contactButton}>
                 <text> Contato </text>
               </button>
            </div>

        </div>
    )
}

export default NavBar;