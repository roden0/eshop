import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './mosaic.scss';
import MosaicItem from '../mosaic-item/mosaic-item';

import { selectMosaicSections } from '../../redux/mosaic/mosaic-selectors';

const Mosaic = ({sections}) => (
  <div className="mosaic">
      {sections.map( ({id, ...otherProps}) =>(
          <MosaicItem key={id} {...otherProps} />
      ) )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectMosaicSections
});

export default connect(mapStateToProps)(Mosaic);