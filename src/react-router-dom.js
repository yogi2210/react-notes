import './App.css';
// import  Axios  from 'axios';
// import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Navbar from './Navbar';

function App() {

    
  return (
    <div className="App" >
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Router>
    </div>
 )

}


export default App;