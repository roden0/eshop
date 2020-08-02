import React from 'react';

import './collectionPreview.scss';

import CollectionItem from '../collection-item/collectionItem';

const VISIBLE_ITEM_AMOUNT = 4;

const CollectionPreview = ({title, items}) => (
    <li className="collection-preview">
        <header>
            <h1>
            {title.toUpperCase()}
            </h1>
        </header>

        <ul className="preview">
            {items
            .filter((item,idx)=>idx < VISIBLE_ITEM_AMOUNT)
            .map(item=>(
                <CollectionItem key={item.id} item={item} />
            ))}
        </ul>
    </li>
);

export default CollectionPreview;