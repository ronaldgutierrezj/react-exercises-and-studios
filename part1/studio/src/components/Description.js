import styles from './Description.module.css';
import React from 'react'

function RecipeAuthor(){
    let authorLink = "https://acuriorestaurantes.net/";
    let authorPhoto = "https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/open_graph_image/public/Gaston-Acurio.jpg?itok=0ef325fD";
    let authorName = "Gaston Acurio"
    return (
         <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Gaston Acurio" className={styles.imageUpdates} />
            <div >
               <h3>{authorName}</h3>
               <a href={authorLink}>Blog name</a> 
            </div>
         </div>
    )
}

class RecipeDescription extends React.Component {
    render() {
       return(
        <div> 
            <div>
            <h1>Lomo Saltado</h1>
            <p>"Tender slices of deeply seared beef, blister-y onions, juicy tomatoes, and crispy French-fried potatoes unite in this classic Chinese-Peruvian stir-fry."</p>
            </div>
            <RecipeAuthor />
        </div>
       );
    }
 }

export default RecipeDescription;