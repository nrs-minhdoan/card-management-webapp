var intialState = {
    isShowing: "none",
    id: "",
    content: "",
    description: "",
    index: 0,
    idList: "",
};

export const cardReducer = (state = intialState, action) => {
    switch (action.type) {
        case "SHOW_DETAIL":
            return {...state, isShowing: "block"};

        case "HIDDEN_DETAIL":
            return {...state, isShowing: "none"};

        case "GET_DETAIL":
            return {
                ...state,
                id: action.id,
                content: action.content,
                description: action.description,
                index: action.index,
                idList: action.idList
            };
        
        case "CHANGE_CONTENT":
            return {...state, content: action.content};

        case "CHANGE_DESCRIPTION":
            return {...state, description: action.description};

        default:
            return state;
    }
};