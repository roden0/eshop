import React from 'react';

import './collectionPreview.scss';

import CollectionItem from '../collection-item/collectionItem';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <header>
            <h1>
            {title.toUpperCase()}
            </h1>
        </header>

        <ul className="preview">
            {items
            .filter((item,idx)=>idx < 4)
            .map(item=>(
                <CollectionItem key={item.id} item={item} />
            ))}
        </ul>
    </div>
);

export default CollectionPreview;