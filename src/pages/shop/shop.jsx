import React, { lazy, Suspense} from 'react';
import { Route } from 'react-router-dom';

import Spinner from '../../components/spinner/spinner';

const CollectionsOverview = lazy(()=>import('../../components/collections-overview/collections-overview'));
const CollectionsPage = lazy(()=>import('../collection/collection'));

const ShopPage = ({match})=> {

    return(
        <section className="shop-page page">
            <Suspense fallback={<Spinner />}>
                <Route 
                exact 
                path={`${match.path}`} 
                component={CollectionsOverview}
                />
                <Route
                path={`${match.path}/:collectionName`}
                component={CollectionsPage}
                />
            </Suspense>
        </section>
    )
    
}

export default React.memo(ShopPage);
