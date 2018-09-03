import {combineReducers, createStore} from 'redux';
import {userReducer} from './userReducer';
import {boardReducer} from './boardReducer';
import {listReducer} from './listReducer';
import {cardReducer} from './cardReducer';

const allReducers = combineReducers({
    user: userReducer,
    board: boardReducer,
    list: listReducer,
    card: cardReducer
})

const store = createStore(allReducers);

export default store;