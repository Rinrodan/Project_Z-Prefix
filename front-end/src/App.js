
import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pageHome.js';
import Landing from './pageLanding.js'
import ItemDetailsPage from './pageItemDetails';
import ItemDetailsPageEDIT from './ItemDetailsPageEDIT'
import EditButton from './Components/EditButton';
// import admin from './pageAdminDashboardpage';
export const ParentContext = createContext();

function App() {

  const [itemsList, setItemsList] = useState([]);
  
  const [itemId ,setItemId] = useState('');

  handleCallback = (pushedItemId) => {
    // Update the name in the component's state
    this.setState({ setItemId: pushedItemId })
}
    
  useEffect(() => {
    fetch('http://localhost:8080/items')
      .then(response => response.json())
      .then(data => setItemsList(data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    
    <ParentContext.Provider value={{ itemId, itemsList, setItemsList }}>
      const { setItemId } = this.state;
        return (
            <div>
                <Home parentCallback={this.handleCallback} />
                {setItemId}
            </div>)
      <Routes>
        <Route path={"/"} exact element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/ItemDetailsPage/:itemId' element={<ItemDetailsPage />} />
        {/* <Route path={"/Admin"} exact element={<AdminDashboard />} /> */}
        <Route path='/ItemDetailsPageEDIT/:itemId' element={<ItemDetailsPageEDIT />} />
        <Home setItemId={setItemId} />
      </Routes>
      <EditButton />
      <Home GetThatIdToTheParent={GetThatIdToTheParent}/>
    </ParentContext.Provider>
  );
}

export default App;


{/* <Route path='/itemdetails/:id' element={<ItemDetailsPage />} /> */}