import axios from 'axios';
import { ActionTree as Tree } from 'vuex';
import { 
    TestAction as Action,
    TestMutation as Mutation,
    ITestState as State,

} from './test.types';

const ENTRY_ROUTE = "https://jsonplaceholder.typicode.com/todos/1";


const actions: Tree<State, State> = {

    async [Action.LOAD_TEST_DATA]({ commit, state }): Promise<any>
    {
        try
        {
            const response = await axios.get(ENTRY_ROUTE, { params: {}});

            commit(Mutation.SET_TEST_DATA, response.data);            
        }
        catch(error: unknown)
        {
            commit(Mutation.SET_TEST_DATA, error);
        }
    },

    [Action.SET_TEST_DATA]({ commit, state }, data: any): void
    {
        commit(Mutation.SET_TEST_DATA, data);
    }

};

export default actions;