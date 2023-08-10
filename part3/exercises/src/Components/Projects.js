import puzzles from "./data.json";
import { useState } from "react";

export default function MyProjects(){
    const [index, setIndex] = useState(0)
    const data = puzzles[index]

    function handleClick() {
        if (index < puzzles.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }
    return <div>
        <button onClick={handleClick}>Next</button>
        <h4>Name : {data.name}</h4>
        <p>Pieces :{data.number_pieces}</p>
        <img src={data.image} alt={data.name}/>
        <p>type: {data.type}</p>
    </div>
    

}