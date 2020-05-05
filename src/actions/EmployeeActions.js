import dispatcher from "../dispatchers/AppDispatcher";

class EmployeeActions {

    getEmployees(Id) {
        dispatcher.handleViewAction({
            commandType : 'GET_EMPLOYEES',
            Id : Id
        })
    }

}

export default new EmployeeActions();