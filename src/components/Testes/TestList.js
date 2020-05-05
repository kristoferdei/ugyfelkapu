import React, {Component} from 'react';
import TestStore from "../../stores/TestStore";
import Test from "./Test/Test";
import TestActions from "../../actions/TestActions";
import {Container, Table} from "react-bootstrap";

class TestList extends Component {
    constructor(props, context) {
        super(props, context);
        TestActions.getTestes(this.props.Id);
        this.state = {
            testes : []
        };
        this.onChangeOfCatchList = this.onChangeOfCatchList.bind(this);
    }

    onChangeOfCatchList() {
        this.setState({
            testes : TestStore._testes
        })
    }

    componentDidMount() {
        TestStore.addChangeListener(this.onChangeOfCatchList);
    }

    componentWillUnmount() {
        TestStore.removeChangeListener(this.onChangeOfCatchList);
    }

    render() {
        return (
            <div>
                <br/>
                <div>
                <h3>Foglalásai</h3>
                </div>
                <br/>
                <Container>
            <Table striped bordered variant="dark">
                <thead>
                <tr>
                    <th>Sorszám</th>
                    <th>Ügy</th>
                    <th>Dátum</th>
                    <th>Idő</th>
                    <th>Törlés</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.testes.map((fishCatch)=>{
                        return(
                            <Test key={fishCatch.Id}
                                       test = {fishCatch}
                            />
                        );
                    })
                }
                </tbody>
            </Table>
                </Container>
            </div>
        );
    }
}

export default TestList;