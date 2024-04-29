import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Create from "./Create";
function App() {
 

  return (
    

    
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
      </Routes>
    </Router>
    
   
  )
}

export default App
