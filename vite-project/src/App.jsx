import Demo from "./Demo";

const App = () => {
  return (
    <div>
      <h1>I am learning React.</h1>
      <input type="text" placeholder="Enter your name" name="" id="" />
      <button>Submit</button>
      
      <Demo/> {/* Import another functional component */}
    </div>
  );
};

export default App;