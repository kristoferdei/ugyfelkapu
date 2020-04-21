import React from 'react'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class Idopont extends  React.Component {
    klikk = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <Container>
                <div>
                    <h2>Dátum</h2>
                </div>
                <input type="date" id="date-input"/>
                <div>
                    <h3>Időpont</h3>
                <select id="time-input">
                    <option value="0">9:00</option>
                    <option value="1">10:00</option>
                    <option value="2">11:00</option>
                    <option value="3">12:00</option>
                    <option value="4">13:00</option>
                    <option value="5">14:00</option>
                    <option value="6">15:00</option>
                    <option value="7">16:00</option>
                </select>
                </div>
                <br />
                <div>
                    <Button variant="dark" onClick={() => {this.klikk()}}>Tovább</Button>
                </div>
            </Container>
        );
    }
}

export default Idopont;