import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Munkatarsak from "./components/Munkatarsak";
import Ugyek from "./components/Ugyek";
import Main from "./components/Main";
import Idopont from "./components/Idopont";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
            <div className="row">
                <div className="col-md-12"><Header/></div>
            </div>
            <Switch>
                <Route path="/munkatarsak" render={ (props) => <Munkatarsak {...props} />}/>
                <Route path="/ugyek" render={ (props) => <Ugyek {...props} />}/>
                <Route path="/Idopont" render={ (props) => <Idopont {...props} />} />
                <Route path="/" exact component={Main} />
        </Switch>
        </div>
      </Router>
  );
}

export default App;
