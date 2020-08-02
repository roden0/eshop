import { createSelector } from 'reselect';

export const selectCollections = state => state.collections;

export const selectCollectionItems = createSelector(
    [selectCollections],
    collections => collections.items
)

export const selectCollectionKey = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = param => createSelector(
    [selectCollections],
    collections => collections[param]
)