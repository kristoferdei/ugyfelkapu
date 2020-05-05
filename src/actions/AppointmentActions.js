import dispatcher from "../dispatchers/AppDispatcher";

class AppointmentActions {

    newAppointment(newAppointment) {
        dispatcher.handleViewAction({
            commandType : 'INSERT_APPOINTMENT',
            newAppointment : newAppointment
        })
    }

    getAppointments(Id) {
        dispatcher.handleViewAction({
            commandType : 'GET_APPOINTMENTS',
            Id : Id
        })
    }

    removeAppointmentById(id){
        dispatcher.handleViewAction({
            commandType : 'REMOVE_BY_ID',
            id : id
        });
    }
}

export default new AppointmentActions();