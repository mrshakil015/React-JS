import './App.css'
import LineChart from './components/LineChart/LineChart'
import PriceOptions from './components/PriceOptions/PriceOptions'
import RawNav from './components/RawNav/RawNav'

function App() {

  return (
    <>
      <RawNav> </RawNav>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
