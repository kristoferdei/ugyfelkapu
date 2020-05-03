import dispatcher from "../dispatchers/AppointmentDispatcher";

class AppointmentActions {

    addAppointment(newAppointment) {
        dispatcher.handleViewAction({
            commandType : 'ADD_NEW_APPOINTMENT',
            newAppointment : newAppointment
        });
    }

    queryAllAppointment() {
        dispatcher.handleViewAction({
            commandType : 'QUERY_ALL_APPOINTMENT',
        });
    }

    deleteAppointment(id)  {
        dispatcher.handleViewAction({
            commandType: 'DELETE_APPOINTMENT_BY_ID',
            id : id
        });
    }
}

export default new AppointmentActions();
