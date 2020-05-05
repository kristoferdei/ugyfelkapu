import React, {Component} from "react";
import TestActions from "../../actions/TestActions";
import {Button, Container} from "react-bootstrap";

class TestForm extends Component {

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
                        <label>Válasszon dátumot!</label>
                    </div>
                   <input
                        type="date"
                        value={this.state.dates}
                        onChange={(e)=>{
                            this.setState({dates : e.target.value});
                        }}/>
                    <div>
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
                                    TestActions.newTest(this.state)
                            }}
                        >Hozzáad</Button>
                    </div>
                </Container>
            </div>
        );
    }
}

export default TestForm;