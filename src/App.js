import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from "./components/Main";
import Cards from "./components/Cards";
import AppointmentList from "./components/Appointments/AppointmentList";
import AppointmentForm from "./components/Appointments/AppointmentForm";
import EmployeeList from "./components/Employees/EmployeeList";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
            <div className="row">
                <div className="col-md-12"><Header/></div>
            </div>
            <Switch>
                <Route path="/munkatars" exact component={EmployeeList}/>}/>
                <Route path="/inf" exact component={Cards}/>}/>
                <Route path="/idopont" exact component={AppointmentList}/>
                <Route path="/foglal" exact component={AppointmentForm}/>
                <Route path="/" exact component={Main} />
        </Switch>
        </div>
      </Router>
  );
}

export default App;
