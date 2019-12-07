import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';


class App extends Component {

  render(){
    return (
      <div>
        <Navbar/>
        <About/>
      </div>
    );
  }
  
}

export default App;
