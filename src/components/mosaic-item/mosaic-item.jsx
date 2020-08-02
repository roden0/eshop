import React from 'react';

import { withRouter } from 'react-router-dom';

import './mosaic-item.scss';

const MosaicItem = ({ title, imageUrl, size="normal", history, linkUrl, match }) => (
    <article className={`${size} mosaic-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MosaicItem);