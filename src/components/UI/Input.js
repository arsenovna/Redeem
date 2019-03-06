import React, {Component} from 'react';

class Input extends Component {
    render(){
        let {label, required, placeholder, onChange, style, inputRef, ...rest} = this.props;

        return (
            <>
            <label>{label}{required && <span style={{color: 'red', marginLeft: '5px'}}>*</span>}
            </label>
                <input {...rest} ref={inputRef} style={{...style}} placeholder={placeholder} onChange={(event) => onChange(event)}/>
            </>
        );
    }
}

export default Input;