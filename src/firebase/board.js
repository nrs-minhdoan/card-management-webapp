import {itemRef} from './config';

export const createNewBoard = (title, color) => {
    const idBoard = itemRef.push().key
    itemRef.child(idBoard).set({idBoard, title, color});
}

export const deleteBoard = (id) => {
    itemRef.child(id).remove();
}