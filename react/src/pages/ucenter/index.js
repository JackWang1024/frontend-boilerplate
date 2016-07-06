// ucenter page

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ajax  from 'base/ajax';
import { dianFuMa } from 'base/api';
import { Alert } from 'foundation';
import './style.scss';


export default class Task extends Component {
    constructor(props) {
        super(props);
        this.getDianFuMa = this.getDianFuMa.bind(this);
    }

    getDianFuMa() {
        ajax({
            url: dianFuMa,
            method: 'post',
            success: function(code) {
                Alert(code + '');
            },
            error: function(err) {
                Alert(err);
            }
        });
    }

    render() {
        return (
            <div className="ucenter-page">
                <Link to="/customer" className="ucenter-cell c_08c">客户资源</Link>
                <Link to="/customer" className="ucenter-cell c_2ecc40">添加客户</Link>
                <Link to="/customer" className="ucenter-cell c_ff851b">查看消息</Link>
                <div onClick={ this.getDianFuMa } className="button">申请垫付码</div>
            </div>
        );
    }
}