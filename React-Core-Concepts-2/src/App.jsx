import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Test from './Test';
import Users from './Users';


function App() {

  function handleClick(){
    alert('Button Clicked')
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num)=>{
    alert(num+5);
  }


  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Test></Test>

      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => { alert('Third clicked')}}>Third</button>
      <button onClick={() => addToFive(3)}>Four</button>

      <button onClick={function clickMe(){alert('You clicked me!');}}>Click me</button>
      <button onClick={() =>{
    alert('You clicked me again!');
}}>Click Again</button>
    </>
  )
}

export default App
