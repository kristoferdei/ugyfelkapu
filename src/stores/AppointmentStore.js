import EventEmitter from 'events';
import dispatcher from "../dispatchers/AppointmentDispatcher";
const axios = require('axios');

class AppointmentStore extends EventEmitter {

    _appointments = [];

    emitChange(){
        this.emit('Change');
    }

    addChangeListener(callback){
        this.on('Change', callback);
    }

    removeChangeListener(callback){
        this.removeListener('Change', callback);
    }
}

const store = new AppointmentStore();

dispatcher.register((action)=>{
    if(action.command.commandType === 'QUERY_ALL_APPOINTMENT') {
        axios.get('http://localhost:3004/appointments')
            .then((res) => {
                store._appointments = res.data;
                console.log("Appointments loaded");
                store.emitChange();
            })
            .catch((err) => {
                console.log(err);
            });
    }
    if (action.command.commandType === 'DELETE_APPOINTMENT_BY_ID'){
        let allAppointment = store._appointments;
        let appointmentNotDeleted = allAppointment.filter(e => e.id !== action.command.id);
        store._appointments = appointmentNotDeleted;
        let url  = "http://localhost:3004/appointments/";
        fetch(url,{method:"PATCH"})
            .then(response => console.log(response.json()))
            .then(() => store.emitChange())
    }
    if (action.command.commandType === 'ADD_NEW_APPOINTMENT'){
        let newAppointment = action.command.newAppointment;
        store._appointments.push(newAppointment);
        let url  = "http://localhost:3004/appointments/";
        fetch(url, {method:"PATCH"})
            .then(response => console.log(response.json()))
            .then(() =>store.emitChange())
    }
});

export default store;