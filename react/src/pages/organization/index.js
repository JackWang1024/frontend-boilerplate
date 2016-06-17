// 机构列表页

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ListView from 'components/listView';
import { fetchOrganizationList } from 'actions/index';
import './style.scss';


export function renderRow(item, i) {
    return (
        <Link to={`/organization/${item.code}`} key={i}>
            <div className="listview-row">
                <div className="listview-row__bd">
                    <h3 
                        className="listview-row__title"
                        dangerouslySetInnerHTML={{__html: item.name}}
                    />
                    <div className="listview-row__content">
                        <div>
                            <span className="listview-row__item-name">地址：</span>
                            <span dangerouslySetInnerHTML={{__html: item.office_addr}} />
                        </div>
                        <div>
                            <span className="listview-row__item-name">负责人：</span>
                            <span dangerouslySetInnerHTML={{__html: item.contact_name}} />
                        </div>
                    </div>
                </div>    
                <i className="icon-next"></i>
            </div>
        </Link>
    );
}


class OrganizationList extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchOrganizationList();
    }

    render() {
        const {dataList} = this.props;
        return (
            <ListView 
                dataSource={dataList}
                renderRow={renderRow}
                searchKeys={['name', 'office_addr', 'contact_name']}
            />
        );
    }
}

function mapStateToProps(state) {
    const {ids, entities} = state.organization;
    return {
        dataList: ids.map( id => entities[id])
    };
}

export default connect(mapStateToProps, {
    fetchOrganizationList: fetchOrganizationList
})(OrganizationList);

