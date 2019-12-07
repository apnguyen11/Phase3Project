import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Cards from './components/Cards';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {


    return (
      <Router>
         <div>
           <Navbar/>
           <Switch>
             <Route path="/images">
              <Cards/>
             </Route>
             <Route path="/about"> 
              <About/>
             </Route>
           </Switch>
        </div>
      </Router>
     
    );
  }
  


export default App;
