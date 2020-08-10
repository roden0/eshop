import { createSelector } from 'reselect';

export const selectCollections = state => { 
    return state.collections
};

export const selectIsCollectionsFetching = createSelector(
    [selectCollections],
    collections => collections.isCollectionFetching
);

export const selectCollectionItems = createSelector(
    [selectCollections],
    collections => collections.items
);

export const selectCollectionKey = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = param => createSelector(
    [selectCollections],
    collections => collections ? collections[param] : null
);

export const selectIsCollectionsLoaded = createSelector(
    [selectCollections],
    collections => !!collections
);