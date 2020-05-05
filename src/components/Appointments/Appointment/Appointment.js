import React from "react";
import Button from "react-bootstrap/Button";
import AppointmentActions from "../../../actions/AppointmentActions";

const appointment = (props) => (
    <tr>
        <td>{props.appointment.id}</td>
        <td>{props.appointment.cases}</td>
        <td>{props.appointment.dates}</td>
        <td>{props.appointment.times}</td>
        <td><Button variant="danger" onClick={()=>{AppointmentActions.removeAppointmentById(props.appointment.id)}}>X</Button></td>
    </tr>
);

export default appointment;