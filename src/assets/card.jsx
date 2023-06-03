/*import './card.css'
import { useState } from "react";
const Card=(Props)=>
{
    //const greeting='welcome to anjac';
    const [name,setName]=useState('Ramamoorthy')
    
    const updateName=(value)=>{setName(value)}
    <br></br>
    return(
        <>
     Ranjani {name} {Props.name} 
     <br></br>
     <br></br>
     <button onClick={()=> setName('Ramamoorthy')}>default name
     </button>
     <br></br>
     <button onClick={()=> updateName('Kannan')}>update name
     </button>
     
     </>
    )
}
export default Card;*/
import axios from "axios"
import { useState } from "react"

const Card=(props)=>{
    const[name,setName]=useState([])
    const GetData=async()=>{
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log('data',data.data)
    setName(data.data)
}
return(
    <>
    <button onClick={()=>GetData()}>get data</button>
    {
        name.map((value)=>{return<p>{value.title}</p>})
    }
    <input type="text"onChange={(e)=>console.log(e.target.value)} />
    </>
)
}
export default Card