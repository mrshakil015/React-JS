import './App.css'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  return (
    <>
      <h1>Simple Form</h1>
      <SimpleForm></SimpleForm>
      <h1>Stateful Form</h1>
      <StatefulForm></StatefulForm>
      <h1>Ref Form</h1>
      <RefForm></RefForm>
      <h1>Custom Hook Form</h1>
      <HookForm></HookForm>
    </>
  )
}

export default App
