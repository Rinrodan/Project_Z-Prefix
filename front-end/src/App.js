
import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pageHome';
import Landing from './pageLanding'
import admin from './pageAdminDashboardpage';
export const ParentContext = createContext();

function App() {

  const [itemList, setItemList] = useState([]);
  
  
  

  useEffect(() => {
    fetch('http://localhost:8080/items')
      .then(
        response => response.json()
      )
      .then(data => setItemList(data))
  }, []);

  return (
    <ParentContext.Provider value={{ itemList, setItemList }}>
      <Routes>
        <div className="App">
          <header className="App-header">
            <p>This is the front end landing page on:</p> 
            <p style={{color: "red"}}>{window.location.href}</p>
          </header>
          <main>
          </main>
          <footer></footer>
      </div>
      </Routes>
    </ParentContext.Provider>
  );
}

export default App;
