// teachers list page

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ListView from 'components/listView';
import { fetchTeacherList } from 'actions/index';
import './style.scss';

export const LEVEL_NAME = ['普通', '分支VIP', '总部VIP'];

export function renderRow(item, i) {
    return (
        <Link to={`/teacher/${item.id}`} key={i}>
            <div className="listview-row">
                <div className="listview-row__bd">
                    <h3 
                        className="listview-row__title" 
                        dangerouslySetInnerHTML={{__html: item.name}}
                    />
                    <div className="listview-row__content">
                        <div>
                            <span className="listview-row__item-name">机构：</span>
                            <span dangerouslySetInnerHTML={{__html: item.branchName}} />
                        </div>
                        <div>
                            <span className="listview-row__item-name">身份证：</span>
                            <span dangerouslySetInnerHTML={{__html: item.cardcode}} />
                            <span className="listview-row__item-name ml-small">邀请码：</span>
                            <span dangerouslySetInnerHTML={{__html: item.invite_code}} />
                        </div>
                        <div>
                            <span className="listview-row__item-name">手机号：</span>
                            <span dangerouslySetInnerHTML={{__html: item.phone}} />
                            <span className="listview-row__item-name ml-small">级别：</span>
                            <span dangerouslySetInnerHTML={{__html: item.levelName}} />
                        </div>
                    </div>
                </div>    
                <i className="icon-next"></i>
            </div>
        </Link>
    );
}


class TeacherList extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchTeacherList(this.props.oid);
    }

    render() {
        const { dataList, organization } = this.props;

        const dataListCopy = dataList.map((item) => {
            return Object.assign({}, item, {
                levelName:  LEVEL_NAME[item.level],
                branchName: organization.name
            });
        });

        return (
            <ListView 
                dataSource={dataListCopy}
                renderRow={renderRow}
                searchKeys={['name', 'branchName', 'cardcode', 'invite_code', 'phone', 'levelName']}
            />
        );
    }
}


function mapStateToProps(state, props) {
    const {ids, entities} = state.teacher;
    return {
        dataList: ids.map( id => entities[id]),
        organization: state.organization.entities[props.oid] || {}
    };
}


export default connect(mapStateToProps, {
    fetchTeacherList: fetchTeacherList
})(TeacherList);





