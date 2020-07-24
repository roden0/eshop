import React from 'react';

import data from '../../shopdata.js';

import './mosaic.scss';
import MosaicItem from '../mosaic-item/mosaic-item';

class Mosaic extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: data
        }
    }

    render(){
        return(
            <div className="mosaic">
                {this.state.sections.map( ({ id, ...otherProps}) =>(
                    <MosaicItem key={id} {...otherProps} />
                ) )}
            </div>
        );
    }
}

export default Mosaic;