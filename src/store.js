import { applyMiddleware, createStore, combineReducers } from 'redux' // <- Add applyMiddleware
import thunk from 'redux-thunk'; // <- Import thunk
import campaigns from './reducers/campaignsReducer';
import apiRequestStatus from './reducers/apiRequestStatusReducer';

const reducers = combineReducers({
    apiRequestStatus,
    campaigns,
});
const middleware = [thunk];

export default createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);