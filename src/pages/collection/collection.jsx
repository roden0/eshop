import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collectionItem';
import '../../components/collection-item/collectionItem.scss';

import CollectionsContext from '../../contexts/collections/collections-context';

import './collection.scss';

const CollectionPage = ({ match}) =>{
    const collections = useContext(CollectionsContext);
    const collection = collections[match.params.collectionName];
    const { title, items } = collection;
    return (
    <article className="collection-container">
        <header className="collection-title">
            <h2>{title}</h2>
        </header>
        <ul className="collection-items">
            {items.map(item=>(<CollectionItem key={item.id} item={item}/>))}
        </ul>
    </article>
)}

export default CollectionPage;