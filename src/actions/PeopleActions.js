import dispatcher from "../dispatchers/PeopleDispatcher";

class PeopleActions {

    queryAllPeople() {
        dispatcher.handleViewAction({
            command : 'QUERY_ALL_PEOPLE',
        });
    }
}

export default new PeopleActions();
