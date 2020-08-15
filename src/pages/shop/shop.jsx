import React from 'react';
import { Route } from 'react-router-dom';


import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionsPage from '../collection/collection';

const ShopPage = ({match})=> {

    return(
        <section className="shop-page page">
            <Route 
            exact 
            path={`${match.path}`} 
            component={CollectionsOverview}
            />
            <Route
            path={`${match.path}/:collectionName`}
            component={CollectionsPage}
            />
        </section>
    )
    
}

export default ShopPage;
