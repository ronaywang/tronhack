
import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './components/menubar'
import Content from './components/Content'

function App() {

  
  return (
    <div className="App">
      <MenuBar/>
      <Content/>
    </div>
  );
}

export default App;
