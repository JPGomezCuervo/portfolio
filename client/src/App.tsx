import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Summary from './components/Summary/Summary';
import WhoIAm from './components/WhoIAm/WhoIAm';
import ContactMe from './components/ContactMe/ContactMe';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className= "App">
      <NavBar/>
      <Summary/>
      <WhoIAm/>
      <Projects/>
      <ContactMe/>
      
    </div>
  );
}

export default App;
