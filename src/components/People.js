import React from "react";
import PeopleActions from "../actions/PeopleActions";
import PeopleStore from  "../stores/PeopleStore"
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class People extends React.Component {

    constructor() {
        super();
        this.state = {
            peoples: [],
        };
        this.onChangeOfPeoples = this.onChangeOfPeoples.bind(this);
    }

    onChangeOfPeoples() {
        this.setState({
            peoples: PeopleStore._peoples
        })
    }

    componentWillUnmount() {
        PeopleStore.removeChangeListener(this.onChangeOfPeoples)
    }

    componentDidMount() {
        PeopleStore.addChangeListener(this.onChangeOfPeoples);
    }

    render() {
        return (
            <div>
              <br/>
                <div>
                    <h3>A mai ügyintézőink</h3>
                    <Button variant="dark" onClick={() => PeopleActions.queryAllPeople()}>Lekérés</Button>
                </div>
                <br/>
                <Container>
                <Table striped bordered variant="dark">
                    <thead>
                    <tr>
                        <th>Azonosító</th>
                        <th>Név</th>
                        <th>Beosztás</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.peoples.map((people, index) =>
                            <tr key={index}>
                                <td>{people.id}</td>
                                <td>{people.name}</td>
                                <td>{people.jobs}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
                </Container>
            </div>
        );
    }
}

export default People;
