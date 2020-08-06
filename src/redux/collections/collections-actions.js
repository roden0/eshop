import CollectionsActionTypes from './collections-types';

export const updateCollections = (map)=>({
    type: CollectionsActionTypes.UPDATE_COLLECTIONS,
    payload: map
})