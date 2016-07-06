// 客户资源池

import React, { Component, PropTypes } from 'react';
import './style.scss';

const navs = ['主机构', '子机构'];

export default class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.renderNav = this.renderNav.bind(this);
    }

    toggleNav(e) {
        const index = e.target.getAttribute('data-index') * 1;
        if (index !== this.state.activeIndex) {
            this.setState({ activeIndex: parseInt(index) });
        }
    }

    renderNav(item, i) {
        const { activeIndex } = this.state;
        let cls = 'customer-nav' + (activeIndex === i ? ' customer-nav__active' : '');
        return (<div key={ i } data-index={ i } className={ cls }>{ item }</div>);
    }

    render() {
        return (
            <div className="customer-page">
                <div className="customer-navbar" onClick={ this.toggleNav }>
                    { navs.map(this.renderNav) }
                </div>
            </div>
        );
    }
}