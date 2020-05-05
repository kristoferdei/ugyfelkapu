import EventEmitter from 'events';
import dispatcher from "../AppDispatcher";
import axios from 'axios';

class TestStore extends EventEmitter {

    _testes = [];

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

const testStore = new TestStore();

dispatcher.register((action) => {
    if (action.command.commandType === 'INSERT_TEST') {
        let newTest = action.command.newTest;
        newTest.id = Math.round(Math.random() * 1000);
        newTest.timestamp = new Date();
        axios.post("http://localhost:3004/appointments", newTest)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log("Error");
                console.log(err);
            });
        testStore._testes.push(newTest);
        testStore.emitChange();
    }
    else if (action.command.commandType === 'GET_TESTES') {
        axios.get("http://localhost:3004/appointments")
            .then((response) => {
                testStore._testes = response.data;
                testStore.emitChange();
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if(action.command.commandType === 'REMOVE_BY_ID'){
        testStore._testes = testStore._testes.filter((item) =>{
            return item.id !== action.command.id
        });
        testStore.emitChange();
    }
});

export default testStore;