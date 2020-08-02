import {data} from './shopdata';

const INITIAL_STATE = data;

const collectionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
        break;
    }
}

export default collectionsReducer;