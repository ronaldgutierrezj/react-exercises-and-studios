import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";
import './styling.css'

function Button(props) {
  const saveButton =  props.saveButton
   return  saveButton === true? <SaveButton />: <ClickedButton />;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 