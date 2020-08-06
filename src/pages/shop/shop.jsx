import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

import WithSpinner from '../../components/with-spinner/withSpinner';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/collections/collections-actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unsusbscribeFromSnapshot = null;

    componentDidMount() {
        const { getCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snap=>{
            const collectionsMap = convertCollectionsSnapshotToMap(snap);
            getCollections(collectionsMap);
            this.setState({loading:false});
        });
    }

    render () {
        const { match } = this.props;  
        const { loading } = this.state; 
        return(
            <section className="shop-page page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> } />
                <Route path={`${match.path}/:collectionName`} render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </section>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    getCollections: map => dispatch(updateCollections(map))
})

export default connect(null, mapDispatchToProps)(ShopPage);
