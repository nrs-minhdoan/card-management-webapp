import {call, put} from 'redux-saga';
import {signIn, signOut} from '../../firebase/user';

function* userSignIn() {
    try {
        const signingIn = yield call(signIn);
        yield put({type: "SIGN_IN", signingIn});
    }
    catch(e) {
        console.log("Error: " + e);
    }
}

function* userSignOut() {
    try {
        const signingIn = yield call(signIn);
        yield put({type: "SIGN_IN", signingIn});
    }
    catch(e) {
        console.log("Error: " + e);
    }
}