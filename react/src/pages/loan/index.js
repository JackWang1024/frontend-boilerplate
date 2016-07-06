// loan page

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ListView from 'components/listView';
import { loanSearch } from 'base/api';
import ajax from 'base/ajax';
import './style.scss';


function renderOrder(item, i) {
    return (
        <Link to={`/loan/${item.loan_id}`} key={i}>
            <div className="listview-row">
                <div className="listview-row__bd">
                    <h3 className="listview-row__title">
                        订单号：{ item.loan_id }
                    </h3>
                    <div className="listview-row__content">
                        <div>
                            <span className="listview-row__item-name">金额：</span>
                            <span dangerouslySetInnerHTML={{__html: item.money}} />
                            <span className="listview-row__item-name ml-small">状态：</span>
                            <span>{ item.auditstate_cn }</span>
                        </div>
                        <div>
                            <span className="listview-row__item-name">机构：</span>
                            <span>{ item.org_inst_cn }</span>
                            <span className="listview-row__item-name ml-small">日期：</span>
                            <span>{ item.loan_date }</span>
                        </div>
                    </div>
                </div>    
                <i className="icon-next"></i>
            </div>
        </Link>
    );
}

let LAST_SEARCH_WORDS = '';
let LAST_SEARCH_RESULT = [];

export function clean() {
    LAST_SEARCH_WORDS = '';
    LAST_SEARCH_RESULT = [];    
}

export default class Loan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: LAST_SEARCH_RESULT
        };
        this.lastSearchTime = 0;
        this.renderRow = this.renderRow.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    renderRow(item, i) {
        const userinfo = item.userinfo;
        const orderList = item.loaninfo
        return (
            <div key={ i } className="loan-user">
                <div className="loan-user-info">
                    <div className="">
                        <span className="item-title">姓&nbsp;&nbsp;&nbsp;名：</span>
                        <span>{ userinfo.name }</span>
                    </div>
                    <div>
                        <span className="item-title">手机号：</span>
                        <span>{ userinfo.phone }</span>
                    </div>
                    <div>
                        <span className="item-title">身份证：</span>
                        <span>{ userinfo.cardcode }</span>
                    </div>
                </div>
                
                <ListView 
                    dataSource={ orderList }
                    renderRow={ renderOrder }
                    onSearch={ false }
                />
            </div>
        );
    }

    handleSearch(_, keywords) {
        let params = {};
        // 身份证
        if (/^[A-Za-z0-9]{18}$/.test(keywords)) {
            params.cardcode = keywords;
        } 
        else if (/^\d{11}$/.test(keywords)) {
            params.phone = keywords;
        } 
        else {
            params.name = keywords;
        }

        const now = Date.now();
        const last = this.lastSearchTime;
        if (keywords.length > 0 && (now - last)  > 500) {
            ajax({
                url: loanSearch,
                data: params,
                showLoading: false,
                success: (res) => {
                    LAST_SEARCH_WORDS = keywords;
                    LAST_SEARCH_RESULT = res;
                    this.setState({ dataList: res });
                },
                error: function(err) {
                    alert(err);
                }
            });
            this.lastSearchTime = now;
        }
        if (keywords.length === 0) {
            clean();
            this.setState({ dataList: [] })
        }
    }

    render() {
        const { dataList } = this.state;
        return (
            <ListView 
                dataSource={ dataList }
                renderRow={ this.renderRow }
                onSearch={ this.handleSearch }
                placeholder="输入贷款人完整的姓名，手机号，或身份证号"
                defaultValue={ LAST_SEARCH_WORDS }
            />
        );
    }
}


Loan.contextTypes = {
    router: PropTypes.object.isRequired
};

