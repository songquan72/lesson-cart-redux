import * as types from './../contants/ActionTypes';
import * as Measage from './../contants/Message';

var initialState = Measage.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
        default:
            return state;
    }
}

export default message;