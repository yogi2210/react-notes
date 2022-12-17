import './App.css';
import  Axios  from 'axios';
import {useState} from 'react';



function App() {
    const [name, setName] = useState("")
    const[ageData, setAgeData] = useState(null)
     
 const fetchData = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
        setAgeData(res.data)
    })
 }
    
  return (
    <div className="App" >
        <input 
        type="text" 
        placeholder='Your Name' 
        onChange={(e)=>{
            setName(e.target.value)
        }} 
        />
        <button onClick={fetchData} >Pridict Age</button>
        <h1>Pridicted Age: {ageData?.age}</h1>
        <h1> Name: {ageData?.name}</h1>
        <h1> Count: {ageData?.count}</h1>
    </div>
 )

}


export default App;