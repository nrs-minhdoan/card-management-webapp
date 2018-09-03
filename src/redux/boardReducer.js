import color from '../constants/color';

var intialState = {
    title: "",
    color: color[0],
    isShowing: "none",
};

export const boardReducer = (state = intialState, action) => {
    switch (action.type) {
        case "SHOW_MODAL":
            return {...state, isShowing: "block"}

        case "HIDDEN_MODAL":
            return {...state, isShowing: "none"}

        case "CHANGE_TITLE":
            return {...state, title: action.title};

        case "CHANGE_COLOR":
            return {...state, color: action.color};

        case "RESET_MODAL":
            return {...state, title: "", color: color[0]};

        default:
            return state;
    }
};