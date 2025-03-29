import { useState } from "react"

export default function  Bollar(){
  const [ball ,setBall]= useState(0)
  const [over , setOver]=useState(0)
  const handelOver=()=>{
    if(ball >= 6){
      const newOver = over + 1;
      setOver(newOver);
      setBall(0)
    }
  }
  return(
    <div>
      <p>Count Ball</p>
      <h1>Player Name : Skaib AL Hassan </h1>
      <h3>Current Ball : {ball}</h3>
      <h3 >Cuurent Over :{over} </h3>
    
      {
       ball=== 6 && <h3>Shakib Al Hasan finished A over</h3> 
      }
      <button onClick={()=>setBall(ball + 1)}>Count Ball</button>
      <button onClick={()=>handelOver()}>Count Over</button>
    </div>
  )
}
