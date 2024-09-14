import './App.css'

function App() {

  function handleClick(){
    alert('Button Clicked')
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => { alert('Third clicked')}}>Third</button>
    </>
  )
}

export default App
