import CollectionsActionTypes from './collections-types';

const INITIAL_STATE = {
    list: null,
    isCollectionFetching: false,
    errorMessage: null
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
    let newState;
    try{
        switch (action.type) {
            case CollectionsActionTypes.FETCH_COLLECTIONS_START:
                newState = {
                    ...state,
                    isCollectionFetching: true
                }
            break;
            case CollectionsActionTypes.FETCH_COLLECTIONS_SUCCESS:
                newState = {
                    ...state,
                    isCollectionFetching: false,
                    list: action.payload
                };
            break;
            case CollectionsActionTypes.FETCH_COLLECTIONS_ERROR:
                newState = {
                    ...state,
                    isCollectionFetching: false,
                    errorMessage: action.payload
                }
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