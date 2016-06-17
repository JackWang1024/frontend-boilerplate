import React, { Component } from 'react';
import './style.scss';


function getScrollTop() {
    if (document.documentElement.scrollTop) {
        getScrollTop = function() {
            return document.documentElement.scrollTop;
        }
    } else {
        getScrollTop = function() {
            return document.body.scrollTop;
        }
    }
    return getScrollTop();
}


export default class BackTop extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: false};
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    setVisible(visible) {
        if (visible !== this.state.visible) {
            this.setState({visible: visible})
        }
    }

    handleScroll() {
        this.setVisible(getScrollTop() > 300);
    }

    handleClick() {
        window.scrollTo(0, 0);
    }

    render() {
        return this.state.visible ? <div onClick={this.handleClick} className="backtop"></div> : null;
    }
}


