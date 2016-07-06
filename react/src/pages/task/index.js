// task page

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ListView from 'components/listView';
import { globalSearch } from 'base/api';
import { fetchTaskHostList } from 'actions/index';
import ajax from 'base/ajax';
import './style.scss';

import { renderRow as renderOrgan } from '../organization';
import { renderRow as renderTeacher, LEVEL_NAME } from '../teacher';

function renderStudent(item, i) {
    return (
        <Link to={`/loan/${item.loan_id}`} key={i}>
            <div className="listview-row">
                <div className="listview-row__bd">
                    <h3 
                        className="listview-row__title"
                        dangerouslySetInnerHTML={{__html: item.name}}
                    />
                    <div className="listview-row__content">
                        <div>
                            <span className="listview-row__item-name">金额：</span>
                            <span dangerouslySetInnerHTML={{__html: item.money}} />
                            <span className="listview-row__item-name  ml-small">备注：</span>
                            <span dangerouslySetInnerHTML={{__html: item.desc}} />
                        </div>
                        <div>
                            <span className="listview-row__item-name">机构：</span>
                            <span dangerouslySetInnerHTML={{__html: item.org_name}} />
                        </div>
                        <div>
                            <span className="listview-row__item-name">手机：</span>
                            <span dangerouslySetInnerHTML={{__html: item.phone}} />
                            <span className="listview-row__item-name ml-small">身份证：</span>
                            <span dangerouslySetInnerHTML={{__html: item.cardcode}} />
                        </div>
                    </div>
                </div>    
                <i className="icon-next"></i>
            </div>
        </Link>
    );
}

function hightlightKeyword(dataList, keywords) {
    return dataList.map((item) => {
        let pattern = new RegExp(keywords, 'gi');
        for (let name in item) {
            item[name] = item[name].replace(pattern, function(m) {
                return '<span style="color:#c00">'+ m +'</span>';            
            });
        }
        return item;
    });   
}


class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: []
        };
        this.lastSearchTime = 0;
        this.renderRow = this.renderRow.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentWillMount() {
        this.props.fetchTaskHostList();
    }

    renderRow(item, i) {
        if (item.type === 'organ') {
            const name = item.name + '(机构)';
            return renderOrgan(Object.assign({}, item, { name: name }), i);
        }
        if (item.type === 'teacher') {
            const name = item.name + '(教师)';
            return renderTeacher(Object.assign({}, item, { name: name }), i);
        }
        if (item.type === 'loan') {
            const name = item.name + '(学生)';
            return renderStudent(Object.assign({}, item, { name: name }), i);
        }
        return null;
    }

    renderTask(item, i) {
        return (
            <Link to={`/task/${item.code}`} key={i}>
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
                        </div>
                    </div>    
                    <i className="icon-next"></i>
                </div>
            </Link>
        );
    }

    handleSearch(_, keywords) {
        const now = Date.now();
        const last = this.lastSearchTime;
        if (keywords.length > 0 && (now - last)  > 500) {
            ajax({
                url: globalSearch,
                data: { keystr: keywords },
                showLoading: false,
                success: (res) => {
                    let dataList = res.map((item) => {
                        if (item.type === 'teacher') {
                            item.branchName = item.org_name;
                            item.levelName = LEVEL_NAME[item.level];
                        }
                        return item;
                    });
                    this.setState({ 
                        dataList: hightlightKeyword(dataList, keywords) 
                    });
                },
                error: function(err) {
                    alert(err);
                }
            });
            this.lastSearchTime = now;
        }
        if (keywords.length === 0) {
            this.setState({ dataList: [] })
        }
    }

    render() {
        const { dataList } = this.state;
        const { taskList } = this.props;
        return (
            <div>
                <ListView 
                    dataSource={dataList}
                    renderRow={this.renderRow}
                    onSearch={this.handleSearch}
                />
                
                {/* dataList.length === 0 ? <div className="empty-result">0 条结果</div> : null */}

                { dataList.length > 0 ? <h4 className="cell-title">信息待录入的机构：</h4> : null }

                <ListView 
                    dataSource={taskList}
                    renderRow={this.renderTask}
                    onSearch={false}
                />
            </div>    
        );
    }
}

export default connect((state, props) => {
    const { hostIds, hostEntities } = state.task;
    return {
        taskList: hostIds.map(id => hostEntities[id])
    };
}, {fetchTaskHostList: fetchTaskHostList})(Task);




