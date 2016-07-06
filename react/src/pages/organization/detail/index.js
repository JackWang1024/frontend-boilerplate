import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormView from 'components/formView';
import TabBar, { TabBarItem } from 'components/tabBar';
import { fetchOrganization } from 'actions/index';
import { 
    branchFields, createBranchState, 
    hostFields, createHostState 
} from './config';

import './style.scss';



// 分支机构信息
class BranchOrganInfo extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign(
            { disabled: true }, 
            createBranchState(props.info)
        );
        this.renderRow = this.renderRow.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentWillMount() {
        this.props.fetchOrganization(this.props.oid);
    }

    componentWillReceiveProps(nextProps) {
        const state = createBranchState(nextProps.info);
        this.setState(Object.assign({}, this.state, state));
    }

    handleClick() {
        const { disabled } = this.state;
        this.setState({ disabled: !disabled });
        window.scrollTo(0, 0);
    }

    handleChange(e, val, name) {
        const item = Object.assign({}, this.state[name], { val: val });
        this.setState(Object.assign({}, this.state, { [name]: item }));
    }

    handleCancel() {
        const state = Object.assign(
            { disabled: true }, 
            createBranchState(this.props.info)
        );
        this.setState(state);
        window.scrollTo(0, 0);
    }

    renderRow({ name }, i) {
        const disabled = this.state.disabled;
        const item = this.state[name];

        return (
            <dl key={i} className="org-detail-item">
                <dt className="org-detail-item__title">{item.title}</dt>
                <dd className="org-detail-item__content">
                    <FormView 
                        type={item.type}
                        name={item.name}
                        val={item.val}
                        options={item.options}
                        disabled={disabled}
                        onChange={this.handleChange}
                    />
                </dd>
            </dl>
        );
    }

    render() {
        const { oid, info } = this.props;
        const { disabled } = this.state;
        return (    
            <div className="org-detail-section">
                <h3 className="org-detail-section__hd">
                    分支机构信息（编号：{ oid }）
                </h3>
                <div>
                    { branchFields.map(this.renderRow) }
                </div>
                <div className="org-detail-section__ft">
                    <a className="button" onClick={this.handleClick}>
                        { disabled ? '编辑' : '保存' }
                    </a> 
                    { !disabled ? <a className="button button-caution" onClick={this.handleCancel}>取消</a> : null }
                </div>
            </div>
        );
    }
}

BranchOrganInfo = connect(
    ({organization: {entities}}, {oid}) => ({info: entities[oid] || {}}),
    {fetchOrganization: fetchOrganization}
)(BranchOrganInfo);



// 主机构信息
class HostOrganInfo extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign(
            { disabled: true }, 
            createHostState(props.info)
        );
        this.renderRow = this.renderRow.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentWillMount() {
        this.props.fetchOrganization(this.props.oid);
    }

    componentWillReceiveProps(nextProps) {
        const state = createHostState(nextProps.info);
        this.setState(Object.assign({}, this.state, state));
    }

    handleClick() {
        const { disabled } = this.state;
        this.setState({ disabled: !disabled });
        window.scrollTo(0, 0);
    }

    handleChange(e, val, name) {
        const item = Object.assign({}, this.state[name], { val: val });
        this.setState(Object.assign({}, this.state, { [name]: item }));
    }

    handleCancel() {
        const state = Object.assign(
            { disabled: true }, 
            createHostState(this.props.info)
        );
        this.setState(state);
        window.scrollTo(0, 0);
    }

    renderRow({ name }, i) {
        const disabled = this.state.disabled;
        const item = this.state[name];
        return (
            <dl key={i} className="org-detail-item">
                <dt className="org-detail-item__title">{item.title}</dt>
                <dd className="org-detail-item__content">
                    <FormView 
                        type={item.type}
                        name={item.name}
                        val={item.val}
                        options={item.options}
                        disabled={disabled}
                        onChange={this.handleChange}
                    />
                </dd>
            </dl>
        );
    }

    render() {
        const { oid, info } = this.props;
        const { disabled } = this.state;
        return (    
            <div className="org-detail-section">
                <h3 className="org-detail-section__hd">
                    主机构信息（编号：{ info.code }）
                </h3>
                <div>
                    { hostFields.map(this.renderRow) }
                </div>
                <div className="org-detail-section__ft">
                    <a className="button" onClick={this.handleClick}>
                        { disabled ? '编辑' : '保存' }
                    </a> 
                    { !disabled ? <a className="button button-caution" onClick={this.handleCancel}>取消</a> : null }
                </div>
            </div>
        );
    }
}


function mapStateToProps({ organization }, { oid }) {
    const entities = organization.entities;
    return {
        info: entities[oid] ? entities[oid].org || {} : {}
    };
}

HostOrganInfo = connect(mapStateToProps, { 
    fetchOrganization: fetchOrganization 
})(HostOrganInfo);



// pages
import PlanList         from '../../plan';
import CourseList       from '../../course';
import TeacherList      from '../../teacher';
import InviteCode       from '../../inviteCode';
import Loan, { clean }  from '../../loan';

// 当从其他页面返回时，保持显示最后所在的 Tab
let LAST_ACTIVE_INDEX = 0;

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    childContextTypes: {
        route: React.PropTypes.object
    },

    getChildContext() {
        return {
            route: this.props.route
        }
    },
    
    componentDidMount() {
        const { route } = this.props;
        const { router } = this.context;
        router.setRouteLeaveHook(route, this.routerWillLeave)
    },

    routerWillLeave(nextLocation) {
        // 回到上一页时，重置 LAST_ACTIVE_INDEX
        if (nextLocation.pathname === '/') {
            clean();
            LAST_ACTIVE_INDEX = 0;
        }
    },

    render() {
        const { id } = this.props.params;
        return (
            <TabBar 
                tintColor="#3385FF"
                defaultIndex={LAST_ACTIVE_INDEX}
                onPress={(i) => LAST_ACTIVE_INDEX = i}
            >
                <TabBarItem title="信息">
                    <BranchOrganInfo oid={id} />
                </TabBarItem>
                <TabBarItem title="教师">
                    <TeacherList oid={id} />
                </TabBarItem>
                <TabBarItem title="贷款">
                    <Loan oid={id} />
                </TabBarItem>
                <TabBarItem title="操作">
                    <InviteCode oid={id} />
                </TabBarItem>
                <TabBarItem title="套餐">
                    <PlanList oid={id} />
                </TabBarItem>
                <TabBarItem title="课程">
                    <CourseList oid={id} />
                </TabBarItem>
                <TabBarItem title="主机构">
                    <HostOrganInfo oid={id} />
                </TabBarItem>
            </TabBar>
        );
    }
});


