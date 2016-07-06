// course list page

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ListView from 'components/listView';
import { fetchCourseList } from 'actions/index';


class CourseList extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // 课程列表需要传递主机构 code
        this.props.fetchCourseList(this.props.hostCode);
    }

    renderRow(item, i) {
        return (
            <div className="listview-row" key={i}>
                <div className="listview-row__bd">
                    <h3 
                        className="listview-row__title" 
                        dangerouslySetInnerHTML={{__html: item.name}}
                    />
                    <div className="listview-row__content">
                        <div>
                            <span className="listview-row__item-name">金额：</span>
                            <span dangerouslySetInnerHTML={{__html: item.amount}} />
                        </div>
                        <div>
                            <span className="listview-row__item-name">备注：</span>
                            <span dangerouslySetInnerHTML={{__html: item.remark}} />
                        </div>
                    </div>
                </div>    
            </div>
        );
    }

    render() {
        const { dataList } = this.props;
        return (
            <ListView 
                dataSource={dataList}
                renderRow={this.renderRow}
                searchKeys={['name', 'amount', 'remark']}
            />
        );
    }
}


function mapStateToProps(state, props) {
    const branchCode = props.oid;
    const branch = state.organization.entities[branchCode];
    const {ids, entities} = state.course;
    return {
        dataList: ids.map( id => entities[id]),
        hostCode: branch && branch.org ? branch.org.code : ''
    };
}


export default connect(mapStateToProps, {
    fetchCourseList: fetchCourseList
})(CourseList);


