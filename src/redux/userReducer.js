var intialState = {
    isSigningIn: false
};

export const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return {...state, isSigningIn: true};
        case "SIGN_OUT":
            return {...state, isSigningIn: false};
        default:
            return state;
    }
};