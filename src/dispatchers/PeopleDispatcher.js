import {Dispatcher} from 'flux'

class PeopleDispatcher extends Dispatcher {

    handleViewAction(action) {
        this.dispatch({
            source : 'VIEW_ACTION',
            payload: action
            })
    }
}

const dispatcher = new  PeopleDispatcher();

export default dispatcher;
