import React from 'react';

import './mosaic-item.scss';

const MosaicItem = ({title,imageUrl,size='normal'}) => (
    <div className={`${size} mosaic-item`}>
        <div style={
            {backgroundImage:`url(${imageUrl})`}
        }  className="background-image">

        </div>
        <div className="content">
            <h1 className="card-title">
                {title.toUpperCase()}
            </h1>
            <span className="card-subtitle">
                Section description
            </span>
        </div>
    </div>
);

export default MosaicItem;