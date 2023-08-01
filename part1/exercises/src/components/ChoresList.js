import classes from './ChoresList.module.css'

export default function ChoresList () {
   return (
      <div>
         <h3 className = {classes.choresHeading}>Today's Choress</h3>
         <ul>
            <li className = {classes.choresText}>Take dogs to the vet</li>
            <li className = {classes.choresText}>Do GA5 demo</li>
            <li className = {classes.choresText}>Get more bread</li>
         </ul>
      </div>
   
   )
}