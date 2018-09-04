// import {call, put} from 'redux-saga/effects';
// import {signIn, signOut} from '../../firebase/user';

// function* userSignIn(props) {
//     try {
//         const signingIn = yield call(signIn);
//         yield put({type: "SIGN_IN", signingIn});
//     }
//     catch(e) {
//         console.log("Error: " + e);
//     }
// }

// function* userSignOut(props) {
//     try {
//         const signingOut = yield call(signOut, props);
//         yield put({type: "SIGN_OUT", signingOut});
//     }
//     catch(e) {
//         console.log("Error: " + e);
//     }
// }

// export {userSignIn, userSignOut};