// TabBar

import React, { Component, PropTypes } from 'react';
import './style.scss';


export default class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: parseInt(props.defaultIndex) || 0
        };
    }

    handleClick(i) {
        this.setState({selected: i});
        if (this.props.onPress) {
            this.props.onPress(i);
        }
    }

    renderItem(child, i) {
        const { tintColor } = this.props;
        const { title, icon, selectedIcon } = child.props;
        const selected = this.state.selected === i;

        // active color of title
        const titleColor = selected ? {color: tintColor} : {};

        // icon
        let iconNode;
        if (icon && selectedIcon) {
            let className = 'tabbar-item-icon ' + (selected ? selectedIcon : icon);
            iconNode = <i className={className}></i>;
        } else {
            iconNode = null;
        }

        let titleNode;
        if (iconNode) {
            titleNode = <h4 className="tabbar-item-title" style={titleColor}>{title}</h4>;
        } else {
            titleNode = <span style={titleColor}>{title}</span>
        }

        return (
            <div className="tabbar-item" onClick={() => this.handleClick(i)}>
                {iconNode}
                {titleNode}
            </div>
        );   
    }

    render() {
        const { selected } = this.state;
        const { children } = this.props;
        const content = children[selected] ? children[selected].props.children : null;
        return (
            <div className="tabbar-wrap">
                <div className="tabbar-content">{content}</div>
                <div className="tabbar">
                    {React.Children.map(children, this.renderItem, this)}
                </div>
            </div>    
        );
    }
}


TabBar.propTypes = {
    className: PropTypes.string,
    tintColor: PropTypes.string.isRequired,
};



//*********************************************
// TabBar Item
//*********************************************

export class TabBarItem extends Component {
    render() {
        return null;
    }
}


TabBarItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    selectedIcon: PropTypes.string,
    onPress: PropTypes.func
}









