import React from 'react'
import styles from "./CategorySection.module.css"
import image from "../assets/null.png"
import CategoryList from './CategoryList'

export default function CategorySection() {
  return (
    <main className={styles.categoryContainer}>
        <figure className={styles.layoutFigure}>
           <div className={styles.background}></div>
           <text className={styles.categoryText}>Categorias</text>
           <img src={image} alt="Translucid circle" className={styles.null}/>
           <CategoryList />
        </figure>
    </main>
  )
}
