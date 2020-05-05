import React from "react";
import Button from "react-bootstrap/Button";
import TestActions from "../../../actions/TestActions";

const test = (props) => (
    <tr>
        <td>{props.test.id}</td>
        <td>{props.test.cases}</td>
        <td>{props.test.dates}</td>
        <td>{props.test.times}</td>
        <td><Button variant="danger" onClick={()=>{TestActions.removeItemById(props.test.id)}}>X</Button></td>
    </tr>
);

export default test;