import EventEmitter from 'events';
import dispatcher from "../dispatchers/AppointmentDispatcher";

class AppointmentStore extends EventEmitter {

    _appointments = [];
    _notQueriedData = [];
    _states = [];

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
    if(action.payload.command === 'QUERY_ALL_APPOINTMENT') {
        fetch("http://localhost:3004/appointments", {method: "GET"})
            .then(response => response.json())
            .then(response => store._appointments = response)
            .then(() => {
                console.log("Queried all appointment");
                store._notQueriedData = JSON.parse(JSON.stringify(store._appointments));
                let states = new Set();
                store._appointments.map(appointment => states = states.add(appointment.state));
                store._states = [...states]
            })
            .then(() => store.emitChange())
    } else if (action.payload.command === 'DELETE_APPOINTMENT_BY_ID'){
        let allAppointment = store._appointments;
        let appointmentNotDeleted = allAppointment.filter(e => e.id !== action.payload.id);
        store._appointments = appointmentNotDeleted;
        let url  = "http://localhost:3004/appointments/";
        fetch(url,{method:"PATCH"})
            .then(response => console.log(response.json()))
            .then(() => store.emitChange())
    } else if (action.payload.command === 'ADD_NEW_APPOINTMENT'){
        let newAppointment = action.payload.newAppointment;
        store._appointments.push(newAppointment);
        let url  = "http://localhost:3004/appointments/";
        fetch(url, {method:"PATCH"})
            .then(response => console.log(response.json()))
            .then(() =>store.emitChange())
    }
});

export default store;