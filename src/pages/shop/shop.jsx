import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview-container';
import CollectionsPageContainer from '../../pages/collection/collection-container';

import { fetchCollectionsStart } from '../../redux/collections/collections-actions';

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollections } = this.props;
        fetchCollections();
    }

    render () {
        const { match } = this.props;
        return(
            <section className="shop-page page">
                <Route 
                exact 
                path={`${match.path}`} 
                component={CollectionsOverviewContainer}
                />
                <Route
                path={`${match.path}/:collectionName`}
                component={CollectionsPageContainer}
                />
            </section>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    fetchCollections: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);
