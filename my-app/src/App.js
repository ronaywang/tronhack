import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './components/menubar'
import Content from './components/Content'

function App() {
  function handleLoadScript() {
    import('./gettronwallet.js')
      .then(({ functionFromModule }) => {
        // Use functionFromModule 
      })
      .catch(err => {
        // Handle failure
      });
  };
  return (

    
    
    <div className="App">
      <MenuBar/>
      <Content/>
    </div>
  );
}

export default App;
