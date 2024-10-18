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
      <h1>Simple Form</h1>
      <SimpleForm></SimpleForm>
      <h1>Stateful Form</h1>
      <StatefulForm></StatefulForm>
      <h1>Ref Form</h1>
      <RefForm></RefForm>
      <h1>Custom Hook Form</h1>
      <HookForm></HookForm>
      <h1>Reusable Form</h1>
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
