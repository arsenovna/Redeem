import React, {Component} from 'react';

class CheckBox extends Component {
    render(){
        let {label, onChange, style, checked} = this.props;
        return (
            <div style={{...style}} className="checkBox">
                <label>{label}</label>
                <input checked={!!checked} onChange={(event) => onChange(event.target.value)} type="checkbox"/>
            </div>
        );
    }
}

export default CheckBox;

