import CollectionsActionTypes from './collections-types';

const INITIAL_STATE = {};

const collectionsReducer = (state = INITIAL_STATE, action) => {
    let newState;
    try{
        switch (action.type) {
            case CollectionsActionTypes.UPDATE_COLLECTIONS:
                newState = Object.assign({}, state, action.payload);
                break;
            default:
                newState = state;
            break;
        }
    }catch(e){
        console.error('Collections Reducer: '+e);
    }
    return newState;
}

export default collectionsReducer;