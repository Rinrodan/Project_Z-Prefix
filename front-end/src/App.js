
import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pageHome.js';
import Landing from './pageLanding.js'
// import admin from './pageAdminDashboardpage';
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
        <Route path={"/"} exact element={<Landing />} />
        <Route path='/Home' element={<Home />} />
        {/* <Route path={"/Admin"} exact element={<AdminDashboard />} /> */}
      </Routes>
    </ParentContext.Provider>
  );
}

export default App;
