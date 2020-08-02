import { createSelector } from 'reselect';

const selectMosaic = state => state.mosaic;

export const selectMosaicSections = createSelector(
    [selectMosaic],
    mosaic => mosaic.sections
)