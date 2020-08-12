import { createSelector } from 'reselect';

export const selectCollections = state => state.collections;

export const selectIsCollectionsFetching = createSelector(
    [selectCollections],
    collections => collections.isCollectionFetching
);

export const selectCollectionItems = createSelector(
    [selectCollections],
    collections => collections.list
);

export const selectCollectionKey = createSelector(
    [selectCollections],
    collections => collections.list ? Object.keys(collections.list).map(key => collections.list[key]) : []
);

export const selectCollection = param => createSelector(
    [selectCollections],
    collections => collections.list ? collections.list[param] : null
);

export const selectIsCollectionsLoaded = createSelector(
    [selectCollections],
    collections => !!collections.list
);