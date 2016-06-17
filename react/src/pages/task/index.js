// task page

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ListView from 'components/listView';
import { globalSearch } from 'base/api';
import ajax from 'base/ajax';
import './style.scss';

import { renderRow as renderOrgan } from '../organization';
import { renderRow as renderTeacher, LEVEL_NAME } from '../teacher';


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


export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: []
        };
        this.lastSearchTime = 0;
        this.renderRow = this.renderRow.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    renderRow(item, i) {
        if (item.type === 'organ') {
            return renderOrgan(item, i);
        }
        if (item.type === 'teacher') {
            return renderTeacher(item, i);
        }
    }

    handleSearch(_, keywords) {
        const now = Date.now();
        const last = this.lastSearchTime;
        if (keywords.length > 0 && (now - last)  > 500) {
            ajax({
                url: globalSearch,
                data: { keystr: keywords },
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
        return (
            <div>
                <ListView 
                    dataSource={dataList}
                    renderRow={this.renderRow}
                    onSearch={this.handleSearch}
                />
                { dataList.length === 0 ? <div className="empty-result">0 条结果</div> : null }
            </div>    
        );
    }
}


