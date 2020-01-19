import * as types from '../actions';

const counterReducer = (state= 0, action ) => {
    switch(action.type){
        case types.INCREMENT:
            return state + 1
        case types.DECREMENT:
            return state - 1
        case types.INCREMENTDATA:
            return state + action.payload;  
        default :
            return state;
    }
}
export default counterReducer;