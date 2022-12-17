import './App.css';
import {useState} from "react";
import {Text} from "./Text"

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App" >
        <button
            onClick={()=>{
                setShowText(!showText)
            }}
        >
            Show Text
        </button>
            <div>

        {showText && < Text />}
            </div>

    </div>
 )

}


export default App;