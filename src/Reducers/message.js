import * as Message from '../Constans/Message'

var initalState = Message.MSG_WELCOME;

const message = (state = initalState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default message;