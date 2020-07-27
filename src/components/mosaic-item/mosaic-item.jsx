import React from 'react';

import './mosaic-item.scss';

const MosaicItem = ({title,imageUrl,size='normal'}) => (
    <article className={`${size} mosaic-item`}>
        <figure style={
            {backgroundImage:`url(${imageUrl})`}
        }  className="background-image">

        </figure>
        <div className="content">
            <h1 className="card-title">
                {title.toUpperCase()}
            </h1>
            <span className="card-subtitle">
                Section description
            </span>
        </div>
    </article>
);

export default MosaicItem;