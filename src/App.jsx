
import './App.css'
import Counter from './3-count'
import Batsmen from './4-batsman'
import Ballor from './4-bollar'


function App() {
  {/* lecture 39-2 start */}
function handleClick(){
  alert("I am clicked")
}
const handleClick3=()=>{
  alert("Clicked 3")
}
const handleClick5=(num)=>{
  const nweNumber = 10+ num;
  alert(nweNumber);
}
{/* lecture 39-2 end */}
  return (
    <>
      <h1>Vite + React</h1>
      <Counter></Counter>
      <Batsmen></Batsmen>
      <Ballor></Ballor>

      
     {/* lecture 39-2 start */}
     <button onclick='handleClick()'>Click Me</button>
     <button onClick={handleClick}>Click Me</button>
     <button onClick={function handleClick2(){ alert("I am Clicked But @") }}>Click Me 2</button>

     <button onClick={handleClick3}>Click Me 3</button>
     <button className='' onClick={()=>{alert("Clicked Me 4, How are you")}}>Clicked Me 4</button>

     <button onClick={()=>handleClick5(10)}>Clicked Add 10</button>
     <button onMouseDown={()=>handleClick5(5)}>On MouseDowen</button>
       {/* lecture 39-2 end */}
    </>
  )
}

export default App
