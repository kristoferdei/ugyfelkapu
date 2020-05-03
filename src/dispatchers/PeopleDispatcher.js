import {Dispatcher} from 'flux'

class PeopleDispatcher extends Dispatcher {

    handleViewAction(command) {
        this.dispatch({
            source : 'VIEW_ACTION',
            command: command
            })
    }
}

const dispatcher = new  PeopleDispatcher();

export default dispatcher;
