import styles from './Description.module.css'

export default function RecipePhoto(){
    return (
        <div className={styles.recipePic}>
               <img src="https://www.recetas-venezolanas.com/base/stock/Recipe/205-image/205-image_web.jpg" alt="lomo saltado" className = {styles.imageUpdates} id={styles.recipePhoto}/>
        </div>
    )
}