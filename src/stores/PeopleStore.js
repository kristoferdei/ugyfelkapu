import EventEmitter from 'events';
import dispatcher from "../dispatchers/PeopleDispatcher";
const axios = require('axios');

class PeopleStore extends EventEmitter {

    _peoples = [];

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

const store = new PeopleStore();

dispatcher.register((action)=>{
    if(action.command.commandType === 'QUERY_ALL_PEOPLE') {
        axios.get('http://localhost:3004/peoples')
            .then((res) => {
                store._peoples = res.data;
                console.log("Peoples loaded");
                store.emitChange();
            })
                .catch((err) => {
                    console.log(err);
                });
    }
});

export default store;