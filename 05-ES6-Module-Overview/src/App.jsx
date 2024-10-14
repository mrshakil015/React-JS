import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
// ----- Array Object Data--------
  // const watches = [
  //   {
  //     id: 1,
  //     model: "Apple Watch Series 9",
  //     brand: "Apple",
  //     price: 399
  //   },
  //   {
  //     id: 2,
  //     model: "Galaxy Watch 6",
  //     brand: "Samsung",
  //     price: 329
  //   },
  //   {
  //     id: 3,
  //     model: "Venu 3",
  //     brand: "Garmin",
  //     price: 349
  //   },
  //   {
  //     id: 4,
  //     model: "Fitbit Sense 2",
  //     brand: "Fitbit",
  //     price: 299
  //   },
  //   {
  //     id: 5,
  //     model: "GTR 4",
  //     brand: "Amazfit",
  //     price: 199
  //   }
  // ];
  
  // ------Json Data------
  const [watches, setWatches] = useState([]);

  useEffect(() =>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  },[])

  return (
    <>

      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
