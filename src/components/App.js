import React from 'react';
import './App.sass';
import Acceuil from './Acceuil/Acceuil'
import Projets from '../Projets/Projets'
import Navigation from '../Navigation/Navigation'
import Contact from '../Contact/Contact'
import Skills from './Skills/Skills'
import Footer from './Footer/Footer'
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <div className="feyn"> 
      <Router>
       <Navigation/>
          <switch>
            <Route path="/" exact component={Acceuil}/>
           <Route path="/Contact" exact component={Contact}/>
           <Route path="/Projets" exact component={Projets}/>
           <Route path="/Skills" exact component={Skills}/>
          </switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;