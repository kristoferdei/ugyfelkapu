import dispatcher from "../dispatchers/AppointmentDispatcher";

class AppointmentActions {

    addAppointment(newAppointment) {
        dispatcher.handleViewAction({
            command : 'ADD_NEW_APPOINTMENT',
            newAppointment : newAppointment
        });
    }

    queryAllAppointment() {
        dispatcher.handleViewAction({
            command : 'QUERY_ALL_APPOINTMENT',
        });
    }

    deleteAppointment(id)  {
        dispatcher.handleViewAction({
            command: 'DELETE_APPOINTMENT_BY_ID',
            id : id
        });
    }
}

export default new AppointmentActions();
