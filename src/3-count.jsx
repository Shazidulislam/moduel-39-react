
// import { useState } from 'react'
// import './App.css'
// export default function Count(){
//   const [count , setCount]= useState(0)

import { useState } from "react"

//   const handleCount= () =>{
//     const newCount = count +1 ;
//     setCount(newCount)
//   }
//   const countStyle={
//     border:"2px solid yellow",
//     margin:'4px',
//     borderRadius:"10px"
//   }

//   return(
//     <div style={countStyle} >
//       <h3>Count :{count}</h3>
//       <button onClick={handleCount}>Add</button>
//       <h1>Hell</h1>
//     </div>
//   )
// }

export default function CountingNumber(){
  // const [state ,setState] = useState(initialValue)
  const [num ,setNum]=useState(0);
  const handleAdd= () =>{
    const newNum=num+2
    setNum(newNum)
  }
  const handleCut=() =>{
    if(num<=0){
      alert("Not get a single product");
    }else{
      const newNum = num -1;
      setNum(newNum);
    }
  }
  const countStyle ={
    border:"4px solid yellow",
    borderRadius:"10px",
    marginBottom:'40px',
  }
  return (
    <div style={countStyle}>
      <h3>Count Number :{num} </h3>;
      <button onClick={handleAdd}>Add More </button>;
      <button onClick={handleCut}>Cut one</button>
    </div>
  )
}