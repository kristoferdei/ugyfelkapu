import React, {Component} from 'react';
import AppointmentStore from "../../stores/AppointmentStore";
import Appointment from "./Appointment/Appointment";
import AppointmentActions from "../../actions/AppointmentActions";
import {Container, Table} from "react-bootstrap";

class AppointmentList extends Component {
    constructor(props, context) {
        super(props, context);
        AppointmentActions.getAppointments(this.props.Id);
        this.state = {
            appointments : []
        };
        this.onChangeOfAppointList = this.onChangeOfAppointList.bind(this);
    }

    onChangeOfAppointList() {
        this.setState({
            appointments : AppointmentStore._appointments
        })
    }

    componentDidMount() {
        AppointmentStore.addChangeListener(this.onChangeOfAppointList);
    }

    componentWillUnmount() {
        AppointmentStore.removeChangeListener(this.onChangeOfAppointList);
    }

    render() {
        return (
            <div>
                <br/>
                <div>
                <h3>Időpontok</h3>
                </div>
                <br/>
                <Container>
            <Table striped bordered variant="dark">
                <thead>
                <tr>
                    <th>Sorszám</th>
                    <th>Ügy</th>
                    <th>Dátum</th>
                    <th>Idő</th>
                    <th>Törlés</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.appointments.map((appoints)=>{
                        return(
                            <Appointment key={appoints.Id}
                                       appointment = {appoints}
                            />
                        );
                    })
                }
                </tbody>
            </Table>
                </Container>
            </div>
        );
    }
}

export default AppointmentList;