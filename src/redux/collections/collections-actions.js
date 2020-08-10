import CollectionsActionTypes from './collections-types';

export const fetchCollectionsStart = () =>({
    type: CollectionsActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = map => ({
    type: CollectionsActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: map
});

export const fetchCollectionsError = error =>({
    type: CollectionsActionTypes.FETCH_COLLECTIONS_ERROR,
    payload: error
});