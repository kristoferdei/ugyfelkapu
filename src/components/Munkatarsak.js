import React from 'react'
import Table from "react-bootstrap/Table";
import data from "../szerver/ugyfelkapu"

const munkatarsak = data.munkatarsak;

class Munkatarsak extends  React.Component {

    render() {
        return(
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Azonosító</th>
                        <th>Név</th>
                        <th>Beosztás</th>
                    </tr>
                </thead>
                <tbody>
                    {munkatarsak.map(s => (<tr>
                        <td>{s.azon}</td>
                        <td>{s.nev}</td>
                        <td>{s.beosztas}</td>
                    </tr>))}

                </tbody>
            </Table>
        );
    }
}

export default Munkatarsak;