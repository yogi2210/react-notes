
import './App.css';
import {useState} from "react";
// import {Planet} from './planet.js'

// function App() {
 
//   const planets = [
//     {name : "Mars", isGasPlanet : false },
//     {name : "Earth", isGasPlanet : false },
//     {name : "Jupiter", isGasPlanet : true},
//     {name : "Venus", isGasPlanet : false },
//     {name : "Neptune", isGasPlanet : true},
//     {name : "Uranus", isGasPlanet : true}
    
//   ]
  
 
//   return (
//     <div className="App">
//      {planets.map((planet, key)=>{
//         return !planet.isGasPlanet && <Planet name = {planet.name}  />
//      })}
//     </div>
//   );
// }
function App() {
  const [value, setValue] = useState(0);

  const increaseValue = () =>{
   setValue(value + 1)
  } 
  const decreaseValue = () =>{
   setValue(value - 1)
  } 
  const setToZero = () =>{
   setValue(0)
  } 

  return (
  <div className='App' >
      <button onClick={increaseValue} >Increase</button>
      <button onClick={decreaseValue} >Decrease</button>
      <button onClick={setToZero} >set to zero</button>
      {value}
  </div>
 )

}


export default App;
