import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const CheckBox = props => {

    const inputRef = useRef();
    const type = props.type;
    const onChange = () => {
        if(props.onChange) {
            props.onChange(inputRef.current);
        }
    }
    
    return (
        <label className="custom-checkbox">
            <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked}/>
            <span className={`custom-checkbox__checkmark ${type === 'color' && props.checked ? `bg-${props.color}` : null}`}>
                {type === 'color' ? null : <i className="bx bx-check"></i> }
            </span>
            {props.label}
        </label>
    )
}

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    type: PropTypes.string
}

export default CheckBox