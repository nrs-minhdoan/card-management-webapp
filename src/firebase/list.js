import {itemRef} from './config';

export const createNewList = (id, name) => {
    const idList = itemRef.child(id).child("lists").push().key
    itemRef.child(id).child("lists").child(idList).set({idList, name, index: 999});
}

export const deleteList = (id, idList) => {
    itemRef.child(id).child("lists").child(idList).remove();
}