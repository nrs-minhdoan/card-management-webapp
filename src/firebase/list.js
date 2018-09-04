import {itemRef} from './config';

export const createNewList = (id, name, index) => {
    const idList = itemRef.child(id).child("lists").push().key
    itemRef.child(id).child("lists").child(idList).set({idList, name, index});
}

export const deleteList = (id, idList) => {
    itemRef.child(id).child("lists").child(idList).remove();
}