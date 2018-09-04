import {firebaseApp} from './config';
import {email, password} from '../constants/authentication';

export const signIn = (props) => {
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            props.history.replace(`/boards`);
        })
        .catch((e) => {
            console.log("Error !!! " + e);
        });
};

export const signOut = (props) => {
    firebaseApp.auth().signOut()
        .then(() => {
            props.history.replace(`/`);
        })
        .catch((e) => {
            console.log("Error !!! " + e);
        });
};