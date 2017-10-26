import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {SAVE_NOTICE} from "./actions";

function notice(state = {
    message: 'This is the first notice',
    version: 1
}, action) {
    switch (action.type) {
        case SAVE_NOTICE:
            return {
                message: action.message,
                version: state.version + 1
            };

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    notice,
    form: formReducer
});

export default rootReducer