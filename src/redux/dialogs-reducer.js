const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: "Liza"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Anatoliy"},
        {id: 4, name: "Olena"},
        {id: 5, name: "Samuel"},
    ],
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "How are you?"},
    ],
}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: action.newMessageText,
            }
            return{
                ...state,
                messages: [...state.messages,newMessage],
            }
        default:
            return state;
    }
}

export const sendMessage = (newMessageText) => ({
    type: SEND_MESSAGE,
    newMessageText,
});


export default dialogsReducer;