import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
      
    </>
  )
}
function Person(){
  const age=25;
  const person ={name: 'sakib', age:12};

  return <h3>I am {person.name} a person with age:{age}</h3>
}

function Student() {
  return (
  <div>
    <h3>This is a student</h3>
    <p>Name:</p>
    <p>Age:</p>
  </div>
  )
}

export default App
