import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionKey } from '../../redux/collections/collections-selectors';

import CollectionPreview from '../collection-preview/collectionPreview';

import './collections-overview.scss';

const CollectionsOverview = ({collections}) => (
    <ul className="collections">
        {
            collections.map(({id, ...otherProps})=>(
                <CollectionPreview key={id} {...otherProps} />       
            ))
        }
    </ul>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionKey
})

export default connect(mapStateToProps)(CollectionsOverview);