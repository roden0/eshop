import React from 'react';

import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collectionItem';
import '../../components/collection-item/collectionItem.scss';

import { selectCollection } from '../../redux/collections/collections-selectors';

import './collection.scss';

const CollectionPage = ({ match , collection}) =>{
    const { title, items } = collection;
    return (
    <section className="page collection-page">
        <header>
            <h2>{title}</h2>
        </header>
        <ul className="collection-items">
            {items.map(item=>(<CollectionItem key={item.id} item={item}/>))}
        </ul>
    </section>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionName)(state)
})

export default connect(mapStateToProps)(CollectionPage);