import * as Message from '../Constans/Message'
import * as types from '../Constans/ActionType'

var initalState = Message.MSG_WELCOME;

const message = (state = initalState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            console.log(action.message)
            return action.message
        default:
            return state
    }
}

export default message;