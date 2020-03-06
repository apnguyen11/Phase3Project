import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Cards from './components/Cards';
import Contact from './components/Contact';
import { Provider } from 'react-redux';
import showResults from './components/showResults';
import store from './components/store'
import Firebase from 'firebase';
import config from './config';
import 'firebase/database';
import 'firebase/storage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {

  constructor(props){
    super(props)
    Firebase.initializeApp(config)
  }

  componentDidMount() {
   this.getSkaterData()
  }

  writeData = () => {
    Firebase.database().ref('/').set({  
    })
  }
  getSkaterData = () => {
    let ref = Firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state)
      console.log(state,'**********************');
    })
  }

  render(){
    console.log(this.state, 'props')
    return (
      <Router>
         <div>
           <Navbar/>
           <Switch>
             <Route exact path='/'>
             <About/>
             </Route>
             <Route path="/about">
             <About/>
             </Route>
             <Route path="/images">
             <div id="mainCard"class="card-columns" >
              <Cards props={this.state}/>
              </div>
             </Route>
             <Route path="/about"> 
              <About/>
             </Route>
             <Route path="/contact">
             <Provider store={store}>
             <Contact/>
             </Provider>
             </Route>
           </Switch>
        </div>
      </Router>
     
    );
  }
}


export default App;
