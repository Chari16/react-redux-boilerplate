import * as types  from './index';

export const increment = () => {
    return {
        type: types.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: types.DECREMENT
    };
};

export const incrementWithData = (data) => {
    return {
        type: types.INCREMENTDATA,
        payload: data
    }
}