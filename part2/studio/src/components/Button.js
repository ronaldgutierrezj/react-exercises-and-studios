import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";
import './styling.css'

function Button(props) {
   return props.SaveButton === "true"? <SaveButton />: <ClickedButton />;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 