import React, { useContext } from 'react';
import MosaicContext from '../../contexts/mosaic/mosaic-context';
import './mosaic.scss';
import MosaicItem from '../mosaic-item/mosaic-item';

const Mosaic = () => {
  const {sections} = useContext(MosaicContext);
  return(
  <div className="mosaic">
      {sections.map( ({id, ...otherProps}) =>(
          <MosaicItem key={id} {...otherProps} />
      ) )}
  </div>
)};

export default Mosaic;