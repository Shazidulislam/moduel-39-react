import { useState } from "react"


export default function Batsmen(){
  const [runs , setRuns] = useState(0);
  const [sixs , setSixs]=useState(0);
  const [fours ,setFours]=useState(0);
  const [ball , setBall]= useState(0);
  const [single , setSingle] = useState(0)


  const handleSingle=()=>{
    const newRuns = runs + 1;
    setRuns(newRuns);
    const countBall = ball + 1;
    setBall(countBall);
    const countSingle = single + 1;
    setSingle(countSingle);
  }
  const handleFour=()=>{
    const newRuns = runs + 4;
    const countFour= fours + 1 ;
 
    setFours(countFour);
    setRuns(newRuns);
    const  countBall = ball + 1;
    setBall(countBall);
  }
  const handleSix=()=>{
    const newRuns = runs + 6;
    const countSix = sixs + 1;
    setSixs(countSix);
    setRuns(newRuns);
    const countBall = ball + 1;
    setBall(countBall);
  }
  const handleNoRun= () =>{
    const countBall = ball + 1 ;
    setBall(countBall)
  }
  return(
    
    <div>
     
      <h3>Player : Bangla Batsmen</h3>
      <h1>Score :{runs} </h1>
      <p><small>Six : {sixs}</small></p>
      <p><small>Four : {fours}</small></p>
      <p><small>Single :{single} </small></p>
      <p>Count Ball : {ball}</p>
     {
      runs > 50 && <h3>Your Score : 50</h3>
     }
      <button onClick={handleSingle}>Single</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
      <button onClick={handleNoRun}>No run</button>
    </div>
  )
}