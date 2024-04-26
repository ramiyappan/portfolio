import React from 'react';
import './App.css';
import SideBar from './components/Sidebar/SideBar'
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <AboutMe />
          </div>
        </div>
      </div>
  );
}

export default App;
