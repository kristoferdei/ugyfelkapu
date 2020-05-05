import dispatcher from "../AppDispatcher";

class TestActions {

    newTest(newTest) {
        dispatcher.handleViewAction({
            commandType : 'INSERT_TEST',
            newTest : newTest
        })
    }

    getTestes(Id) {
        dispatcher.handleViewAction({
            commandType : 'GET_TESTES',
            Id : Id
        })
    }

    removeItemById(id){
        dispatcher.handleViewAction({
            commandType : 'REMOVE_BY_ID',
            id : id
        });
    }
}

export default new TestActions();