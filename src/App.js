import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from "./components/Main";
import People from "./components/People";
import Cards from "./components/Cards";
import TestList from "./components/Testes/TestList";
import TestForm from "./components/Testes/TestForm";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
            <div className="row">
                <div className="col-md-12"><Header/></div>
            </div>
            <Switch>
                <Route path="/munkatars" render={ (props) => <People {...props} />}/>
                <Route path="/inf" render={ (props) => <Cards {...props} />}/>
                <Route path="/proba" exact component={TestList}/>
                <Route path="/proba2" exact component={TestForm}/>
                <Route path="/" exact component={Main} />
        </Switch>
        </div>
      </Router>
  );
}

export default App;
