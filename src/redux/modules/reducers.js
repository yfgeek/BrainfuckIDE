import { combineReducers } from 'redux';
import {ADD_PROGRAM, DELETE_PROGRAM, REMOVE_ALL, SAVE_PROGRAM, UPDATE_SETTING} from "./actions";

function settings(state = {
    nation: 'gbp'
}, action) {
    switch (action.type) {
        case UPDATE_SETTING:
            return {
                nation: action.nation,
                storage: action.storage
            };
        default:
            return state;
    }
}

function program(state = [{
    filename: 'HelloWorld.bf',
    text: '',
    description: '',
    deleted: false
}], action) {
    switch (action.type) {
        case ADD_PROGRAM:
            return [
                ...state,
                {
                    filename: action.filename,
                    text: action.text,
                    description: action.description || '',
                    deleted: false
                }
            ];
        case SAVE_PROGRAM:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    filename: action.filename,
                    text: action.text,
                    description: action.description || '',
                    deleted: false
                }),
                ...state.slice(action.index + 1)
            ];
        case DELETE_PROGRAM:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    deleted: true
                }),
                ...state.slice(action.index + 1)
            ];
        case REMOVE_ALL:
            state = [];
            return state;
        default:
            return state;
    }
}

const reducers = combineReducers({
    program,
    settings

});

export default {
    reducer: reducers
};
