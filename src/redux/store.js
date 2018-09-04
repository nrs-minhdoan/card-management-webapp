import {combineReducers, createStore, applyMiddleware} from 'redux';
import {userReducer} from './reducers/userReducer';
import {boardReducer} from './reducers/boardReducer';
import {listReducer} from './reducers/listReducer';
import {cardReducer} from './reducers/cardReducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const allReducers = combineReducers({
    user: userReducer,
    board: boardReducer,
    list: listReducer,
    card: cardReducer
})

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

export default store;