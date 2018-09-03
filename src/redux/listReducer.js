var intialState = {
    id: "",
    name: "",
    index: 0,
    isAdd: false,
};

export const listReducer = (state = intialState, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return {...state, name: action.name};

        case "CHANGE_ID":
            return {...state, id: action.id};

        case "HIDDEN_OR_SHOW":
            return {...state, isAdd: !state.isAdd};

        case "RESET_ADD_LIST":
            return {...state, name: ""}

        default:
            return state;
    }
};