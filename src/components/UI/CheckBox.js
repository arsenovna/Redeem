import React, {Component} from 'react';

class CheckBox extends Component {
    render(){
        let {label, onChange, style} = this.props;
        return (
            <div style={{...style}} className="checkBox">
                <label>{label}</label>
                <input onChange={() => onChange()} type="checkbox"/>
            </div>
        );
    }
}

export default CheckBox;

