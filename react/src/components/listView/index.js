// ListView component

import React, { Component, PropTypes } from 'react';
import BackTop from 'components/backTop';
import './style.scss';


function copy(dataSource) {
    return dataSource.map((item) => {
        return Object.assign({}, item);
    });
}

function filter(dataSource, keywords, names) {
    if (keywords.length === 0) {
        return dataSource;
    }
    return dataSource.filter((item) => {
        const pattern = new RegExp(keywords, 'gi');
        let matched = false;
        (names || Object.keys(item)).forEach((name) => {
            let value = item[name];
            let type = typeof value;
            if (type === 'number' || type === 'string') {
                value = value + '';
                item[name] = value.replace(pattern, (words) => {
                    matched = true;
                    return '<span style="color:#c00">'+ words +'</span>';
                });
            }
        });
        return matched;
    });   
}


export default class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: props.dataSource || []
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({dataSource: nextProps.dataSource});
    }

    handleSearch(event) {
        const keywords = event.target.value.trim();
        let { dataSource, onSearch, searchKeys } = this.props;
        const handleSearch = typeof onSearch === 'function' ? onSearch : filter;
        dataSource = handleSearch(copy(dataSource), keywords, searchKeys);
        if (Array.isArray(dataSource)) {
            this.setState({dataSource: dataSource});
        }
    }

    renderSearchBar() {
        return (
            <div className="listview-search-wrap">
                <div className="listview-search">
                    <div className="listview-search__bd">
                        <input 
                            type="text" 
                            placeholder="搜索..." 
                            onChange={this.handleSearch} 
                            className="listview-search__input" 
                        />
                    </div>
                </div>    
            </div>
        );
    }

    render() {
        const {dataSource} = this.state;
        const {renderRow, onLoadMoreClick, onSearch} = this.props;
        return (
            <div className="listview-wrap">
                {onSearch ? this.renderSearchBar() : null}
                <div className="listview-content">{dataSource.map(renderRow)}</div>
                <BackTop />
                {onLoadMoreClick && dataSource.length > 0  ?
                    <div onClick={onLoadMoreClick} className="listview-loadmore">点击加载更多...</div>
                : null}
            </div>
        );
    }
}

ListView.propTypes = {
    dataSource:         PropTypes.array.isRequired,
    renderRow:          PropTypes.func.isRequired,
    onLoadMoreClick:    PropTypes.func,
    onSearch:           PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    searchKeys:         PropTypes.array
};

ListView.defaultProps = {
    dataSource:         [],
    renderRow:          () => {},
    onSearch:           true
};

