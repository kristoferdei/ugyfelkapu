import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";

class Cards extends React.Component {

    render() {
        return (
            <div>
                <br/>
            <Container>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>Birth certificatee</Card.Title>
                            <Card.Text>
                                Szükséges dokumentumok: <br/>
                                Születési anyakönyvi kivonat <br/>
                                Személyigazolvány <br/>
                                Lakcímkártya
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Várható idő: 1 óra</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Get Married</Card.Title>
                            <Card.Text>
                                Szükséges dokumentumok: <br/>
                                Házassági anyakönyvi kivonat <br/>
                                Személyigazolvány <br/>
                                Lakcímkártya
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Várható idő: 30 perc</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Renew driving licence</Card.Title>
                            <Card.Text>
                                Szükséges dokumentumok: <br/>
                                Jogosítvány <br/>
                                Orvosi igazolás <br/>
                                Személyigazolvány
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Várható idő: 45 perc</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
            </div>
        );
    }
}

export default Cards;