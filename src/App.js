
import './App.css';

function App() {
  return (
    <div className="App">
      < Job position = "senior SDE" salary = {90000} company="Amazon" />
      < Job position = "junior SDE" salary ={12000} company="Google" />
      < Job position = "Project manager" salary = {10000} company="Netflix" />
    </div>
  );
}

const Job = (props) =>{
  return (
    <>
      <h1> {props.company} </h1>
      <h1> {props.position} </h1>
      <h1> {props.salary} </h1>
    </>
  )
}




export default App;
