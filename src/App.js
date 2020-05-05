import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from "./components/Main";
import People from "./components/People";
import Cards from "./components/Cards";
import AppointmentList from "./components/Appointments/AppointmentList";
import AppointmentForm from "./components/Appointments/AppointmentForm";

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
                <Route path="/idopont" exact component={AppointmentList}/>
                <Route path="/foglal" exact component={AppointmentForm}/>
                <Route path="/" exact component={Main} />
        </Switch>
        </div>
      </Router>
  );
}

export default App;
