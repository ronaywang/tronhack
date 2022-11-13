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
      <header className="App-header">
        <Content/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> a save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
