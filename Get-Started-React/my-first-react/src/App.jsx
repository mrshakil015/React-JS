// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo';

function App() {


  return (
    <>
      
      <h1>Vite + React</h1>
      <Todo 
        task="Learn React"
        isDone={true}>
      </Todo>
      <Todo 
        task="Core Concepts"
        isDone={true}>
      </Todo>
      <Todo 
        task="Try JSX"
        isDone={false}>
      </Todo>

{/*       
      <Todo task="Core Concepts"></Todo>
      <Todo task="Try JSX"></Todo>

      <Device name="Laptop" price="45k"></Device>
      <Device name="Laptop" price="45k"></Device>
      <Person></Person>
      <Student name='Rohim' grade='7th'></Student>
      <Developer></Developer> */}
      
    </>
  )
}

function Device(props){
  console.log(props);
  return <h2>This device: {props.name} Price: {props.price} </h2>
}


function Person(){
  const age=25;
  const person ={name: 'sakib', age:12};

  return <h3>I am {person.name} a person with age:{age}</h3>
}

function Student({name, grade}) {
  return (
  <div className = 'student'>
    <h3>This is a student</h3>
    <p>Name: {name}</p>
    <p>Age: {grade}</p>
  </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={developerStyle}>
      <h5>Developer</h5>
      <p>Coding</p>
    </div>
  )
}



export default App
