import './App.css'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('Sign UP data: ',data);
  }

  const handleUpdateProfile = data => {
    console.log('Update data: ',data);
  }

  return (
    <>
    <h1>Form Master</h1>
      <h2>Simple Form</h2>
      <SimpleForm></SimpleForm>
      <h2>Stateful Form</h2>
      <StatefulForm></StatefulForm>
      <h2>Ref Form</h2>
      <RefForm></RefForm>
      <h2>Custom Hook Form</h2>
      <HookForm></HookForm>
      <h2>Reusable Form</h2>
      <ReusableForm
        formTitle={'Sign Up'}
        handleFormSubmit={handleSignUpSubmit}
      ></ReusableForm>
      <ReusableForm
        submitBtnText={'Update'}
        handleFormSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Profile Update From</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, dolor!</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
