import React from 'react';

import './collectionItem.scss';

const CollectionItem = ({id,name,price,imageUrl}) => (
    <li className="collection-item">
        <figure 
        style={{backgroundImage:`url(${imageUrl})`}}
        className="image">
        </figure>
        <footer className="collection-footer">
            <span className="name">
                {name}
            </span>
            <span className="price">
                {price}
            </span>
        </footer>
    </li>
);

export default CollectionItem;