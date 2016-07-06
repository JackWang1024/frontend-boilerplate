import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormView from 'components/formView';
import TabBar, { TabBarItem } from 'components/tabBar';
import { fetchTaskHost, updateTaskHost } from 'actions/index';
import { 
    branchFields, createBranchState, 
    hostFields, createHostState 
} from '../../organization/detail/config';
import './style.scss';


// 主机构信息
class TaskHostOrganInfo extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign(
            { disabled: false }, 
            createHostState(props.info)
        );
        this.renderRow = this.renderRow.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentWillMount() {
        this.props.fetchTaskHost(this.props.params.id);
    }

    componentWillReceiveProps(nextProps) {
        const state = createHostState(nextProps.info);
        this.setState(Object.assign({}, this.state, state));
    }

    handleClick() {
        const code = this.props.params.id;
        const { disabled } = this.state;
        const state = this.state;
        let data = { code: code };
        for (let name in state) {
            data[name] = state[name].val;
        }
        delete data['disabled'];
        this.props.updateTaskHost(data);
        // this.setState({ disabled: !disabled });
        // window.scrollTo(0, 0);
    }

    handleChange(e, val, name) {
        const item = Object.assign({}, this.state[name], { val: val });
        this.setState(Object.assign({}, this.state, { [name]: item }));
    }

    handleCancel() {
        const state = Object.assign(
            { disabled: false }, 
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
        const { info } = this.props;
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
                    { !disabled ? <a className="button button-caution" onClick={this.handleCancel}>重置</a> : null }
                </div>
            </div>
        );
    }
}

function mapStateToProps({ task }, { params }) {
    const entities = task.entities;
    return {
        info: entities[params.id] || {}
    };
}

export default connect(mapStateToProps, { 
    fetchTaskHost: fetchTaskHost,
    updateTaskHost: updateTaskHost
})(TaskHostOrganInfo);



