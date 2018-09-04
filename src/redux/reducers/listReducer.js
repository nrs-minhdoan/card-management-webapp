var intialState = {
    lists: [],
    id: "",
    name: "",
    index: 0,
    isAdd: false,
};

export const listReducer = (state = intialState, action) => {
    switch (action.type) {
        case "GET_LISTS": 
            console.log({...state, lists: action.lists});
            return {...state, lists: action.lists};

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