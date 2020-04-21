import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";
import data from "../szerver/ugyfelkapu"

const ugyek = data.ugyek;

class Ugyek extends  React.Component {
    render() {
        return (
            <div>
                <h1>Választható teendők</h1>
            <ListGroup>
                {ugyek.map(s => (<ListGroup.Item>{s.leiras}</ListGroup.Item>))}
            </ListGroup>
            </div>
        );
    }
}

export default Ugyek;