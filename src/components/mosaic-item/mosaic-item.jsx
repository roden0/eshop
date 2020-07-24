import React from 'react';
import { withRouter } from 'react-router-dom';
import './mosaic-item.scss';

const MosaicItem = ({title,image,size='normal', history, linkUrl, match}) => (
    <div className={`${size} mosaic-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <div style={
            {backgroundImage:`url(${image})`}
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

export default withRouter(MosaicItem);