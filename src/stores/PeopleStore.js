import EventEmitter from 'events';
import dispatcher from "../dispatchers/PeopleDispatcher";

class PeopleStore extends EventEmitter {

    _peoples = [];
    _notQueriedData = [];

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
    if(action.payload.command === 'QUERY_ALL_PEOPLE') {
        fetch("http://localhost:3004/peoples", {method: "GET"})
            .then(response => response.json())
            .then(response => store._peoples = response)
            .then(() => {
                console.log("Queried all people");
                store._notQueriedData = JSON.parse(JSON.stringify(store._peoples));
                let states = new Set();
                store._peoples.map(people => states = states.add(people.state));
            })
            .then(() => store.emitChange())
    }
});

export default store;