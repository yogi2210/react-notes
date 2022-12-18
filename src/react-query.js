import './App.css';
// import  Axios  from 'axios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import Profile from './pages/Profile';



function App() {
const client = new QueryClient()  

    
  return (
    <div className="App" >
        
          <QueryClientProvider client={client} >
             <Router>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/profile" element={<Profile/>} />
                  <Route path="/contact" element={<Contact/>} />
              </Routes>
            </Router>
          </QueryClientProvider>
        
    </div>
 ) 

}


export default App;