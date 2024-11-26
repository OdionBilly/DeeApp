import PropTypes from 'prop-types';

const Input = (props) => {

    return(
     <div className="flex gap-5 ml-[-2rem] mb-1"> 
        <label htmlFor={props.input.id}> {props.label}</label>
        <input {...props.input }/>
     </div>

    )

}

Input.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
  };

export default Input