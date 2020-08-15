import React, { useContext } from 'react';

import CollectionsContext from '../../contexts/collections/collections-context';

import CollectionPreview from '../collection-preview/collectionPreview';

import './collections-overview.scss';

const CollectionsOverview = () => {
    const collectionsMap = useContext(CollectionsContext);
    const collections = Object.keys(collectionsMap).map(k=>collectionsMap[k]);

    return(
    <ul className="collections">
        {
            collections.map(({id, ...otherProps})=>(
                <CollectionPreview key={id} {...otherProps} />       
            ))
        }
    </ul>
)};

export default CollectionsOverview;