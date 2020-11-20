import {ActionType} from "../../constants";


const initialState = {
    dataSource: [],
    copyDataSource: [],
    isMakeRequest: true

};
const FoodReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionType.INTIALSTATE:
            return Object.assign({}, state, {dataSource: action.dataSource});
        case ActionType.COPY_DATA:
            return Object.assign({}, state, {copyDataSource: action.copyDataSource});
        case ActionType.MAKE_REQUEST:
            return Object.assign({}, state, {isMakeRequest: action.isMakeRequest});

        default:
            return state;
    }
};
export default FoodReducers;
