// 

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTaskBranchList, addTaskBranch, toReview } from 'actions/index';
import { Link } from 'react-router';
import './style.scss';

class TaskDetail extends Component {
    constructor(props) {
        super(props);
        this.renderBranch = this.renderBranch.bind(this);
        this.addBranch = this.addBranch.bind(this);
        this.toReview = this.toReview.bind(this);
    }

    componentWillMount() {
        const code = this.props.params.id;
        this.props.fetchTaskBranchList(code);
    }

    renderBranch(item, i) {
        if (item.readonly == 1) {
            return (
                <div className="cell" key={ i }>    
                    <div className="cell-bd">    
                        <span>{ item.name }</span>
                    </div>    
                </div>
            );
        } else {
            return (
                <Link to={ '/task/edit/branch/' + item.code } key={ i }>
                    <div className="cell">    
                        <div className="cell-bd">    
                            <span>{ item.name }</span>
                        </div>    
                        <i className="icon-next"></i>
                    </div>
                </Link>
            );
        }
    }

    addBranch() {
        this.props.addTaskBranch(this.props.params.id);
    }

    toReview() {
        this.props.toReview(this.props.params.id);
    }

    render() {
        const { info, branches } = this.props;
        return (
            <div className="task-detail-page">
                <div className="pb-small">
                    <h3 className="cell-title">主机构：</h3>
                    <Link to={ '/task/edit/host/' + info.code}>
                        <div className="cell">    
                            <div className="cell-bd">
                                <span>{ info.name }</span>
                            </div>    
                            <i className="icon-next"></i>
                        </div>
                    </Link>
                </div>    
                <h3 className="cell-title">子机构：</h3>
                <div>
                    { branches.map(this.renderBranch) }
                </div>
                <div className="btns">
                    <div onClick={this.toReview} className="button">提交审核</div>
                    <div onClick={this.addBranch} className="button">添加子机构</div>
                </div>    
            </div>
        );
    }
}

export default connect((state, props) => {
    const code = props.params.id;
    const hostData = state.task.hostEntities[code] || {};
    const { branchIds, branchEntities } = state.task;
    return { 
        info: hostData,
        branches: branchIds.map(code => branchEntities[code] || {})
    };
}, {
    toReview:               toReview, 
    addTaskBranch:          addTaskBranch, 
    fetchTaskBranchList:    fetchTaskBranchList
})(TaskDetail);







