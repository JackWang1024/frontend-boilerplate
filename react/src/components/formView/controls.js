import React, { Component, PropTypes } from 'react';
import './style.scss';


// 映射所有控件
const controls = {};


//********************************
// text input control
//********************************

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {val: props.val};
        this.handleChange = this.handleChange.bind(this);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.val !== this.state.val;
    // }

    componentWillReceiveProps(nextProps) {
        this.setState({val: nextProps.val});
    }

    handleChange(e) {
        const val = e.target.value;
        this.setState({ val: val });
        this.props.onChange(e, val, this.props.name);
    }

    render() {
        const { val } = this.state;
        const { name, disabled, onChange } = this.props;
        if (disabled) {
            return <div className="form__text">{val}</div>
        } else {
            return (
                <input 
                    type="text" 
                    name={name}
                    disabled={disabled}
                    value={this.state.val}
                    onChange={this.handleChange}
                    className="form__input"
                />
            );
        }
    }
}


//********************************
// radio input control
//********************************

class RadioInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: props.val
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({val: nextProps.val});
    }

    handleChange(e) {
        const val = e.target.value;
        this.setState({ val: val });
        this.props.onChange(e, val, this.props.name);
    }

    renderRadio(item, i) {
        const { name, disabled } = this.props;
        const { val } = this.state;
        return (
            <label key={i} className="form__radio">
                <input
                    type="radio" 
                    name={name}
                    checked={val === item.val}
                    value={item.val}
                    disabled={disabled}
                    onChange={this.handleChange}
                />
                <span>{item.title}</span>
            </label>
        );
    }

    render() {
        return (
            <div className="form__radio-wrap">
                {this.props.options.map(this.renderRadio.bind(this))}
            </div>
        );
    }
}



//********************************
// TextArea control
//********************************

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: props.val
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({val: nextProps.val});
    }

    handleChange(e) {
        const val = e.target.value;
        this.setState({ val: val });
        this.props.onChange(e, val, this.props.name);
    }

    render() {
        const {
            name, disabled, options, onChange
        } = this.props;
        const { val } = this.state;

        if (disabled === true) {
            return <div className="form__text">{val}</div>
        }
        
        return (
            <textarea 
                value={val} 
                name={name}
                onChange={this.handleChange}
                className="form__textarea" 
            />
        );
    }
}


//********************************
// select control
//********************************

class Select extends Component {

    renderOption(item, i) {
        const val = this.props.val;
        return <option key={i} value={item.id}>{item.name}</option>
    }

    render() {
        const {
            name, val, disabled, options, onChange
        } = this.props;

        return (
            <select className="form__select">
                {options.map(this.renderOption.bind(this))}
            </select>
        );
    }
}


//********************************
// 省市级联 control
//********************************
import { provinces, cities, counties } from 'base/area';

class AreaCascade extends Component {

    constructor(props) {
        super(props);
        const val = props.val;
        this.state = {
            val: val //[130000, 130200, 130203]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({ val: props.val });
    }

    handleChange(e) {
        const cfg = { province: 0, city: 1, county: 2 };
        const name = e.target.name;
        const value = e.target.value;
        const index = cfg[name];
        let nextVal = this.state.val.slice(0);
        nextVal[index] = value;
        this.setState({ val: nextVal });
        this.props.onChange(e, nextVal, this.props.name);
    }

    renderOptions(list, value) {
        let options = [<option key={0} value={0}>请选择</option>];
        for (let key in list) {
            options.push(<option key={key} value={key}>{list[key]}</option>);
        }
        return options;
    }

    render() {
        const { disabled } = this.props;
        const { val } = this.state;
        const province = val[0] || '';
        const city = val[1] || '';
        const county = val[2] || '';

        if (disabled === true) {
            return (
                <div className="form__text">
                    <span> {province ? provinces[province] : ''} </span>
                    <span> {cities[province] ? cities[province][city] : ''} </span>
                    <span> {counties[city] ? counties[city][county] : ''} </span>
                </div>
            );
        }

        return (
            <div className="flex">
                <select
                    name="province"
                    value={province} 
                    onChange={this.handleChange}
                    className="form__select" 
                >
                    {this.renderOptions(provinces, province)}
                </select>
                <select 
                    name="city"
                    value={city} 
                    onChange={this.handleChange}
                    className="form__select" 
                >
                    {this.renderOptions(cities[province], city)}
                </select>
                <select 
                    name="county"
                    value={county} 
                    onChange={this.handleChange}
                    className="form__select" 
                >
                    {this.renderOptions(counties[city], county)}
                </select>
            </div>
        );
    }
}


controls.text           = TextInput;
controls.radio          = RadioInput;
controls.select         = Select;
controls.textarea       = TextArea;
controls.areaCascade    = AreaCascade;


// 根据 type 获取对应的表单控件
export function getControlWithType(type) {
    return controls[type];
}






