import "./App.css"
import { Person } from "./components/Person"

function App(){

    return (
        <div className="classname">
            <Person
                name="Pedro"
                email="yogi.2210@gmail.com"
                age= {21}
                isMarried = {false}
                friends={["khopa", "amy", "gaj", "abhi"]}
            />
        </div>
    )
}

export default App