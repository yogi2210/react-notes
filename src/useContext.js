import './App.css';
// import  Axios  from 'axios';
import {useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import Profile from './pages/Profile';

export const AppContext = createContext()

function App() {
const [userName, setUserName] = useState("Yogi")
    
  return (
    <div className="App" >
        <AppContext.Provider value={{userName, setUserName}} >
          <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
          </Router>
        </AppContext.Provider>
    </div>
 )

}


export default App;
