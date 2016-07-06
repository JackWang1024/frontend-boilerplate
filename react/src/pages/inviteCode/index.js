// apply invite code

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchInviteCode } from '../../js/actions';
import './style.scss';

class InviteCode extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.num = 1;
    }

    handleClick() {
        const { oid, hostCode } = this.props;
        this.props.fetchInviteCode(hostCode, oid, this.num);
    }

    handleChange(event) {
        this.num = event.target.value;
    }

    render() {
        const { dataList } = this.props;
        return (
            <div className="invite-code-page">
                <div className="">
                    <div className="invite-code-form">
                        <span className="label">数量:</span>
                        <input 
                            defaultValue="1"
                            className="input" 
                            type="text" 
                            onChange={this.handleChange} 
                        />
                        <button onClick={this.handleClick} className="button">产生熊口令</button>
                    </div>
                </div>
                <div className="code-list">
                    <ul>
                        {dataList.map((item, i) => {
                            return <li key={i} className="code-list-item">{item}</li>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state, props) {
    const branchCode = props.oid;
    const branch = state.organization.entities[branchCode];
    return {
        dataList: state.inviteCode,
        hostCode: branch && branch.org ? branch.org.code : ''
    };
}

export default connect(mapStateToProps, {fetchInviteCode: fetchInviteCode})(InviteCode);





