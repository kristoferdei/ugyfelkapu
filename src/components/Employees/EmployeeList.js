import React, {Component} from "react";
import EmployeeActions from "../../actions/EmployeeActions";
import EmployeeStore from "../../stores/EmployeeStore";
import Employee from "./Employee/Employee";
import {Container, Table} from "react-bootstrap";

class EmployeeList extends Component {
    constructor(props, context) {
        super(props, context);
        EmployeeActions.getEmployees(this.props.Id);
        this.state = {
            employees : []
        };
        this.onChangeEmployeeList = this.onChangeEmployeeList.bind(this);
    }

    onChangeEmployeeList() {
        this.setState({
            employees : EmployeeStore._employees
        })
    }

    componentDidMount() {
        EmployeeStore.addChangeListener(this.onChangeEmployeeList);
    }

    componentWillUnmount() {
        EmployeeStore.removeChangeListener(this.onChangeEmployeeList);
    }

    render() {
        return (

           <div>
               <br/>
               <div>
                   <h3>Munkatársaink</h3>
               </div>
               <br/>
            <Container>
                <Table striped bordered variant="dark">
                    <thead>
                    <tr>
                        <th>Azonosító</th>
                        <th>Név</th>
                        <th>Telefonszám</th>
                        <th>E-mail</th>
                        <th>Beosztás</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.employees.map((emp) => {
                            return (
                              <Employee key={emp.Id}
                                        employee = {emp}
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

export default EmployeeList;
