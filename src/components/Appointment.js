import React from "react";
import AppointmentActions from "../actions/AppointmentActions";
import AppointmentStore from  "../stores/AppointmentStore"
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class Appointment extends React.Component {

    constructor() {
        super();
        this.state = {
            appointments: [],
        };
        this.onChangeOfAppointments = this.onChangeOfAppointments.bind(this);
    }

    onChangeOfAppointments() {
        this.setState({
            appointments: AppointmentStore._appointments
        })
    }

    componentWillUnmount() {
        AppointmentStore.removeChangeListener(this.onChangeOfAppointments)
    }

    componentDidMount() {
        AppointmentStore.addChangeListener(this.onChangeOfAppointments);
    }

    render() {
        return(
            <div>
                <br/>
                <div>
                    <h3>Nézze meg korábbi foglalásait!</h3>
                <Button variant="dark" onClick={() => AppointmentActions.queryAllAppointment()}>Lekérés</Button>
                </div>
                <br/>
                <Container>
                    <div>
                        <h3>Foglaljon új intézendő ügyet!</h3>
                        <label>Válasszon teendőt!</label>
                    </div>
                    <select
                        value={this.state.cases}
                        onChange={(specie) => {
                            this.setState({
                                cases: specie.target.value
                            });
                        }
                        }>
                        {["Birth certificate","Get Married","Renew driving licence"].map(e => <option>{e}</option>)}
                    </select>
                    <div>
                        <label>Válasszon dátumot!</label>
                    </div>
                    <input type="date"
                           value={this.state.dates}
                           onChange={(e) => {
                               this.setState({
                                   dates: e.target.value
                               });
                           }}/>
                        <div>
                            <label>Válasszon időpontot!</label>
                        </div>
                            <select
                                value={this.state.times}
                                onChange={(specie) => {
                                    this.setState({
                                        times: specie.target.value
                                    });
                                }
                                }>
                                {["9:00","10:00","11:00","12:00", "13:00", "14:00", "15:00", "16:00"].map(e => <option>{e}</option>)}
                            </select>
                    <br/>
                    <br/>
                    <div>
                        <Button variant="dark" onClick={()=>{AppointmentActions.addAppointment(this.state)}}>Foglalás</Button>
                    </div>
                </Container>
                <br/>
                <Container>
                <Table striped bordered variant="dark">
                    <thead>
                    <tr>
                        <th>Teendő</th>
                        <th>Dátum</th>
                        <th>Időpont</th>
                        <th>Törlés</th>
                    </tr>
                    </thead>
                    <tbody>
                       {
                            this.state.appointments.map((appointment, index) =>
                                    <tr key={index}>
                                     <td>{appointment.cases}</td>
                                     <td>{appointment.dates}</td>
                                     <td>{appointment.times}</td>
                                    <td><Button variant="danger" onClick={()=>{AppointmentActions.deleteAppointment(appointment.id)}}>X</Button></td>
                                 </tr>
                              )
                      }
                    </tbody>
                </Table>
                </Container>
         </div>
        );
    }
}

export default Appointment;