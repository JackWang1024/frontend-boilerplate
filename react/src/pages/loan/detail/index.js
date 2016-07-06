import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FormView from 'components/formView';
import TabBar, { TabBarItem } from 'components/tabBar';
import { fetchLoanOrder } from 'actions/index';
import { 
    createUserItems,
    createOrderItems 
} from './config';
import './style.scss';


function flat(source) {
    var data = {};
    for (let name in source) {
        let val = source[name];
        if (Object.prototype.toString.call(val) === '[object Object]') {
            for (let key in val) {
                data[name + '__' + key] = val[key];
            }
        } else {
            data[name] = val;
        }
    }
    return data;
}


class LoanUser extends Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
    }

    renderRow(item, i) {
        return (
            <dl key={i} className="org-detail-item">
                <dt className="org-detail-item__title">{item.title}</dt>
                <dd className="org-detail-item__content">
                    <FormView 
                        type={item.type}
                        name={item.name}
                        val={item.val}
                        options={item.options}
                        disabled={true}
                        onChange={this.handleChange}
                    />
                </dd>
            </dl>
        );
    }

    render() {
        const { info } = this.props;
        const dataItems = createUserItems(info);
        return (
            <div className="org-detail-section">
                <h3 className="org-detail-section__hd">
                    贷款人信息
                </h3>
                <div>
                    { dataItems.map(this.renderRow) }
                </div>
            </div>
        );
    }
}


class LoanOrder extends Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
    }

    renderRow(item, i) {
        return (
            <dl key={i} className="org-detail-item">
                <dt className="org-detail-item__title">{item.title}</dt>
                <dd className="org-detail-item__content">
                    <FormView 
                        type={item.type}
                        name={item.name}
                        val={item.val}
                        options={item.options}
                        disabled={true}
                        onChange={this.handleChange}
                    />
                </dd>
            </dl>
        );
    }

    render() {
        const { info } = this.props;
        const dataItems = createOrderItems(flat(info));
        console.log(flat(info))
        return (
            <div className="org-detail-section">
                <h3 className="org-detail-section__hd">
                    贷款订单信息
                </h3>
                <div>
                    { dataItems.map(this.renderRow) }
                </div>
            </div>
        );
    }
}


class LoanRisk extends Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
    }

    renderRow(item, i) {
        let cls = item.status == 1 ? 'success' : 'failure' ;
        cls += ' td td-2';
        return (
            <div key={i} className="tr">
                <div className="td td-1">{ item.type_name }</div>
                <div className={ cls }>{ item.status_name }</div>
                <div className="td td-3">{ item.reason }</div>
            </div>
        );
    }

    render() {
        const { info } = this.props;
        const items = Object.keys(info);
        return (
            <div className="org-detail-section loan-risk-page">
                <h3 className="org-detail-section__hd">风控详情</h3>
                <div className="table">
                    <div className="thead">
                        <div className="tr">
                            <div className="td td-1">事项</div>
                            <div className="td td-2">状态</div>
                            <div className="td td-3">原因</div>
                        </div>
                    </div>    
                    <div className="tbody">
                        { items.map((name, i) => {
                            return this.renderRow(info[name], i);
                        })}
                    </div>    
                </div>
            </div>
        );
    }
}


// 当从其他页面返回时，保持显示最后所在的 Tab
let LAST_ACTIVE_INDEX = 0;

class LoanDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { id } = this.props.params;
        this.props.fetchLoanOrder(id);
    }

    render() {
        const { id } = this.props.params;
        const { loanUser, loanOrder, loanRisk } = this.props;
        return (
            <TabBar 
                tintColor="#3385FF"
                defaultIndex={LAST_ACTIVE_INDEX}
                onPress={(i) => LAST_ACTIVE_INDEX = i}
            >
                <TabBarItem title="贷款人">
                    <LoanUser loanid={id} info={loanUser} />
                </TabBarItem>
                <TabBarItem title="订单详情">
                    <LoanOrder loanid={id} info={loanOrder} />
                </TabBarItem>
                <TabBarItem title="风控详情">
                    <LoanRisk loanid={id} info={loanRisk} />
                </TabBarItem>
            </TabBar>
        );
    }
}


export default connect(function({ loanOrder }, props) {
    return { 
        loanUser: loanOrder.userinfo || {},
        loanRisk: loanOrder.risk_info || {},
        loanOrder: loanOrder.loaninfo || {}
    };
}, { fetchLoanOrder: fetchLoanOrder })(LoanDetail);

