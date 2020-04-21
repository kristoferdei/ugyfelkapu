import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";
import data from "../szerver/ugyfelkapu"

const ugyek = data.ugyek;

class Ugyek extends  React.Component {
    render() {
        return (
            <ListGroup>
                {ugyek.map(s => (<ListGroup.Item>{s.leiras}</ListGroup.Item>))}
            </ListGroup>
        );
    }
}

export default Ugyek;