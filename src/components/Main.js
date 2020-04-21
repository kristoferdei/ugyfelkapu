import React from 'react'
import { Button } from 'react-bootstrap';
import data from "../szerver/ugyfelkapu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ugyek = data.ugyek;

class Main extends  React.Component {

    klikk = () => {
        this.props.history.push('/Idopont');
    };

    render() {
        return (
                <Container>
                    <div>
                        <h1>Válasszon teendőt!</h1>
                    </div>
                    <Row>
                        <Col>
                            {ugyek.map(s => (<Button variant="secondary" size="lg" block>{s.leiras}</Button>))}
                            <Button variant="primary" size="lg" block onClick={() => {this.klikk()}}>Tovább</Button>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

export default Main;