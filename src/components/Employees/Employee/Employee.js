import React from "react";

const employee = (props) => (
    <tr>
        <td>{props.employee.id}</td>
        <td>{props.employee.name}</td>
        <td>{props.employee.jobs}</td>
    </tr>
);

export default employee;