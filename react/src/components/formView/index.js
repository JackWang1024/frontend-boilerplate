import React, { Component, PropTypes } from 'react';
import { getControlWithType } from './controls';


class FormView extends Component {
    render() {
        const {type, name, val, options, disabled, onChange} = this.props;
        let ControlView = getControlWithType(type);
        return <ControlView name={name} val={val} options={options} disabled={disabled} onChange={onChange} />
    }
}


const formTypes = [
    'text',
    'radio',
    'select',
    'textarea',
    'areaCascade'
];


FormView.propTypes = {
    type: PropTypes.oneOf(formTypes),
    options: PropTypes.array,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};


FormView.defaultProps = {
    type: 'text',
    name: '',
    val: '',
    options: [],
    disabled: false,
    onChange: () => {}
};


export default FormView;