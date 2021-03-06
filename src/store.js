import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import fuelsReducer from './reducers/fuelReducer'
import thunk from 'redux-thunk';
import distancesReducer from './reducers/distanceReducer';
import combReducer from './reducers/combReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    fuels: fuelsReducer,
    distances: distancesReducer,
    combs: combReducer
});
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;