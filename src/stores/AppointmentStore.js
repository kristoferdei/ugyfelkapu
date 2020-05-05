import EventEmitter from 'events';
import dispatcher from "../dispatchers/AppDispatcher";
import axios from 'axios';

class AppointmentStore extends EventEmitter {

    _appointments = [];

    emitChange() {
        this.emit('change');
    }

    addChangeListener(callback){
        this.addListener('change',callback);
    }

    removeChangeListener(callback){
        this.removeListener('change', callback);
    }
}

const appointmentStore = new AppointmentStore();

dispatcher.register((action) => {
    if (action.command.commandType === 'INSERT_APPOINTMENT') {
        let newAppointment = action.command.newAppointment;
        newAppointment.id = Math.round(Math.random() * 1000);
        newAppointment.timestamp = new Date();
        axios.post("http://localhost:3004/appointments", newAppointment)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log("Error");
                console.log(err);
            });
        appointmentStore._appointments.push(newAppointment);
        appointmentStore.emitChange();
    }
    else if (action.command.commandType === 'GET_APPOINTMENTS') {
        axios.get("http://localhost:3004/appointments")
            .then((response) => {
                appointmentStore._appointments = response.data;
                appointmentStore.emitChange();
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if(action.command.commandType === 'REMOVE_BY_ID'){
        appointmentStore._appointments = appointmentStore._appointments.filter((item) =>{
            return item.id !== action.command.id
        });
        appointmentStore.emitChange();
    }
});

export default appointmentStore;