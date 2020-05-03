import dispatcher from "../dispatchers/PeopleDispatcher";

class PeopleActions {

    queryAllPeople() {
        dispatcher.handleViewAction({
            commandType : 'QUERY_ALL_PEOPLE',
        });
    }
}

export default new PeopleActions();
