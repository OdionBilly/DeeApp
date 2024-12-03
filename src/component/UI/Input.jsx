import React from 'react'
import PropTypes from 'prop-types';

const Input = React.forwardRef((props, ref) =>  {
    return(
     <div className="flex gap-5 ml-[-2rem] mb-1"> 
        <label htmlFor={props.input.id}> {props.label}</label>
        <input ref={ref} {...props.input }/>
     </div>
    );
});

export default Input




Input.displayName = 'Input';

Input.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
  };

