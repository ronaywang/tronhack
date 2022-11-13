
import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './components/menubar'
import Content from './components/Content'

function App() {


  

  
  
  return (
    <div className="App">
    {/* //   <div className="Stats">
    //       {myMessage}
    //       <h4>Account Name: {myDetails.name} </h4>
    //       <h4>My Address: {myDetails.address}</h4>
    //       <h4>
    //         Balance: {myDetails.balance} TRX (Frozen:{' '}
    //         {myDetails.frozenBalance} TRX)
    //       </h4>
    //       <h4>Network Selected: {myDetails.network}</h4>
    //       <h4>Link Established: {myDetails.link}</h4>
    //     </div> */}
      
      <MenuBar/>
      <Content/>
    </div>
  );
}

export default App;
