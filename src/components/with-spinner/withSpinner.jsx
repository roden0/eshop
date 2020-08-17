import React from 'react';

import Spinner from '../spinner/spinner';

const WithSpinner = Children => ({ isLoading, ...otherProps}) => (
  isLoading ? <Spinner/> : <Children {...otherProps}/>
)

export default WithSpinner;

