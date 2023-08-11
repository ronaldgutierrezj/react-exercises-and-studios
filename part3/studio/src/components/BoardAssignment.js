import { useState } from 'react';

export default function BoardAssignment () {
   const[boardName, setName] = useState("No boards yet")

   const boards = [{type: "entree"}, {type: "dinner"}, {type: "snack"}];
   const boardsOption = boards.map((board)=>(
      <option value={board.type}>type</option>
   ))

   const handleChange = (event) => {
      setName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>{boardsOption}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}