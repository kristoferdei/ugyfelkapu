import EventEmitter from 'events';
import dispatcher from "../dispatchers/AppDispatcher";
import axios from 'axios';

class EmployeeStore extends EventEmitter {

    _employees = [];

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

const employeeStore = new EmployeeStore();

dispatcher.register((action) => {
    if (action.command.commandType === 'GET_EMPLOYEES') {
        axios.get("http://localhost:3004/employees")
            .then((response) => {
                employeeStore._employees = response.data;
                employeeStore.emitChange();
            })
            .catch((err) => {
                console.log(err);
            });
    }
});

export default employeeStore;