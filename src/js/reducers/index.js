import { ADD_TODO, REMOVE_TODO } from "../constants/action-types";
import _ from 'lodash'
const initialState = {
    todos: [{

        ID: 0,
        CONTENT: "Buy Tabac!!!!!"

    }],

    owner: {
        name: 'Anis',
        pic: require('../../assets/IMG_7024.png')
    }
}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: return Object.assign({}, state, {
            todos:
                state.todos.concat(action.payload)
        });
        case REMOVE_TODO: let newState = _.cloneDeep(state);
            let index = _.findIndex(newState.todos, { ID: action.payload });
            newState.todos.splice(index, 1);
            return newState;

        default: return state;
    }
}
export default rootReducer;
