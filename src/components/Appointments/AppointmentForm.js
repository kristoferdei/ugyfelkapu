import React, {Component} from "react";
import AppointmentActions from "../../actions/AppointmentActions";
import {Button, Container} from "react-bootstrap";

class AppointmentForm extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            id: this.props.id,
            cases: '',
            dates: '',
            times: ''
        }
    }

    render() {
        return(
            <div>
                <br/>
                <Container>
                    <div>
                        <h3>Foglaljon új intézendő ügyet!</h3>
                        <br/>
                        <label>Válasszon teendőt!</label>
                    </div>
                  <select
                        value={this.state.cases}
                        onChange={(e)=>{
                            this.setState({cases : e.target.value});
                        }}>
                        {["Birth certificate","Get Married","Renew driving licence"].map(e => <option>{e}</option>)}
                    </select>
                    <div>
                        <br/>
                        <label>Válasszon dátumot!</label>
                    </div>
                   <input
                        type="date"
                        value={this.state.dates}
                        onChange={(e)=>{
                            this.setState({dates : e.target.value});
                        }}/>
                    <div>
                        <br/>
                        <label>Válasszon időpontot!</label>
                    </div>
                   <select
                        value={this.state.times}
                        onChange={(e)=>{
                                this.setState({times: e.target.value});
                        }}>
                        {["9:00","10:00","11:00","12:00", "13:00", "14:00", "15:00", "16:00"].map(e => <option>{e}</option>)}
                    </select>
                    <br/>
                    <br/>
                    <div>
                        <Button
                            variant="dark"
                            onClick={()=>{
                                    AppointmentActions.newAppointment(this.state)
                            }}
                        >Foglalás</Button>
                    </div>
                </Container>
            </div>
        );
    }
}

export default AppointmentForm;