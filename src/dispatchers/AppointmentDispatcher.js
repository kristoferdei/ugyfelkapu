import {Dispatcher} from 'flux'

class AppointmentDispatcher extends Dispatcher {

    handleViewAction(command){
        this.dispatch({
            source : 'VIEW_ACTION',
            command : command
        })
    }
}

const dispatcher = new AppointmentDispatcher();

export default dispatcher;
