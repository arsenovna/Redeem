import React, {Component} from 'react';

class Input extends Component {
    render(){
        let {label, required, placeholder, onChange, style, inputRef, value} = this.props;

        return (
            <>
            <label>{label}{required && <span style={{color: 'red', marginLeft: '5px'}}>*</span>}
            </label>
                <input value={value || ''} ref={inputRef} style={{...style}} placeholder={placeholder} onChange={(event) => onChange(event.target.value)}/>
            </>
        );
    }
}

export default Input;