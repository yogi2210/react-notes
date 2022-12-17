import './App.css';
import {useState, useEffect} from 'react';
import  Axios  from 'axios';



function App() {
    // using fetch to fetch API
    // fetch("https://catfact.ninja/fact")
    // .then((res)=> res.json())
    // .then((data)=>{
    //     console.log(data)
    // })

    const [catFact, setCatFact] = useState('')


    const fetchCatData = () =>{
        Axios.get("https://catfact.ninja/fact").then((res)=>{
            setCatFact(res.data.fact)
        })
    }

    useEffect(() => {
        fetchCatData()
        
    }, [])
    

    // using Axios to fetch data
    
    
  return (
    <div className="App" >
    <button onClick={fetchCatData} >
        Generate Cat Fact
    </button>
    <p>{catFact}</p>
    </div>
 )

}


export default App;