import {Dispatcher} from 'flux'

class AppointmentDispatcher extends Dispatcher {

    handleViewAction(action){
        this.dispatch({
            source : 'VIEW_ACTION',
            payload : action
        })
    }
}

const dispatcher = new AppointmentDispatcher();

export default dispatcher;
