import React from 'react';

import { withRouter } from 'react-router-dom';

import './collectionPreview.scss';

import CollectionItem from '../collection-item/collectionItem';

const VISIBLE_ITEM_AMOUNT = 4;

const CollectionPreview = ({title, items, history, match}) => (
    <li className="collection-preview">
        <header className="collection-name">
            <h1 className="title" onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}>
                {title}
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

export default withRouter(CollectionPreview);