import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/Description';
import RecipeIngredients from './components/Ingredients'
import RecipePhoto from './components/Photos';
import styles from './components/Description.module.css';

function App() {
  return (
    <div className="App">
      <div className={styles.recipePhotoBlock}>
        <RecipePhoto />
        <div>
          <RecipeDescription />
          <RecipeIngredients />
        </div>
      </div>
    </div>
  );
}

export default App;
