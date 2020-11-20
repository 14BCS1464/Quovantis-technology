import {combineReducers} from 'redux';
import FoodReducers from "../container/Home";
const RootReducers = combineReducers({
    FoodReducers,
});


export default RootReducers;
