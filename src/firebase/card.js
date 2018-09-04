import {itemRef} from './config';

export const createNewCard = (id, idList, content, index) => {
    const idCard = itemRef.child(id).child("lists").child(idList).child("cards").push().key
    itemRef.child(id).child("lists").child(idList).child("cards").child(idCard).set({
        idCard,
        content,
        index,
        description: "",
    });
}

export const deleteCard = (id, idList, idCard) => {
    itemRef.child(id).child("lists").child(idList).child("cards").child(idCard).remove();
}

export const editCard = (id, idList, idCard, content, description, index) => {
    itemRef.child(id).child("lists").child(idList).child("cards").child(idCard).set({
        content,
        idCard,
        index,
        description
    });
}