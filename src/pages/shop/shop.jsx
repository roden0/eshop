import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview';

import CollectionPage from '../collection/collection';

const ShopPage = ({match}) => (
    <section className="shop-page page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionName`} component={CollectionPage} />
    </section>
)

export default ShopPage;
