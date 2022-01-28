import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Homepage from './components/Homepage/Homepage';


function App() {
  return (
    <div className="App">
        <Sidebar />
        <Homepage />      
    </div>
  );
}

export default App;
