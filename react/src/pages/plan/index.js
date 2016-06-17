// plan list page

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ListView from 'components/listView';
import { fetchPlanList } from 'actions/index';
import './style.scss';


function renderRow(item, i) {
    return (
        <Link to={`/plan/${item.code}`} key={i}>
            <div className="listview-row">
                <div className="listview-row__bd">
                    <h3 
                        className="listview-row__title" 
                        dangerouslySetInnerHTML={{__html: item.name}}
                    />
                    <div className="listview-row__content">
                        <div>
                            <span className="listview-row__item-name">还款方式：</span>
                            <span dangerouslySetInnerHTML={{__html: item.repay_cn}} />
                        </div>
                        <div>
                            <span className="listview-row__item-name">待收服务费：</span>
                            <span>{item.is_service_cn}</span>
                            <span className="listview-row__item-name ml-small">机构垫付：</span>
                            <span>{item.is_advance_cn}</span>
                        </div>
                        <div>
                            <span className="listview-row__item-name">宽限期：</span>
                            <span>{item.grace_periods}</span>
                            <span className="listview-row__item-name ml-small">非宽限期：</span>
                            <span>{item.ungrace_periods}</span>
                        </div>
                    </div>
                </div>    
                <i className="icon-next"></i>
            </div>
        </Link>
    );
}


class PlanList extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchPlanList(this.props.hostCode);
    }

    render() {
        const { dataList } = this.props;
        return (
            <ListView 
                dataSource={dataList}
                renderRow={renderRow}
                searchKeys={['name', 'repay_cn', 'is_service_cn', 'is_advance_cn']}
            />
        );
    }
}


function mapStateToProps(state, props) {
    const branchCode = props.oid;
    const branch = state.organization.entities[branchCode];
    const {ids, entities} = state.plan;
    return {
        dataList: ids.map( id => entities[id]),
        hostCode: branch ? branch.org.code : ''
    };
}


export default connect(mapStateToProps, {
    fetchPlanList: fetchPlanList
})(PlanList);




