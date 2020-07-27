import React from 'react';

import './form-input.scss';

const FormInput = ({handleChange, label, ...otherProps}) =>(
    <fieldset className="input-group">
        {
            label ? (<label className={`${otherProps.value.length ? 'shrink' : '' } form-label`}>{label}</label>) : null
        }
        <input className="form-input" onChange={handleChange} {...otherProps} />
    </fieldset>
);

export default FormInput;