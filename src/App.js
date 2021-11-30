import { Component } from 'react';
import Calculator from './components/Calculator';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes> 
            <Route exact path="/calculator" element={<Calculator />} />
          </Routes>
      </div>
    </Router>
  );
  }


export default App;
