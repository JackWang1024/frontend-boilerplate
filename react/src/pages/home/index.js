// home page

import React, { Component, PropTypes } from 'react';
import TabBar, { TabBarItem } from 'components/tabBar';

// pages
import TaskPage             from '../task';
import OrganizationPage     from '../organization';
import UcenterPage          from '../ucenter';


// 当从其他页面返回时，保持显示最后所在的 Tab
let LAST_ACTIVE_INDEX = 0;


export default class Home extends Component {
    render() {
        return (
            <TabBar 
                tintColor="#1159db" 
                defaultIndex={LAST_ACTIVE_INDEX}
                onPress={(i) => LAST_ACTIVE_INDEX = i}
            >
                <TabBarItem
                    title="任务"
                    icon="tabbar-item-icon-0__normal"
                    selectedIcon="tabbar-item-icon-0__active"
                >
                    <TaskPage />
                </TabBarItem>
                
                <TabBarItem
                    title="机构"
                    icon="tabbar-item-icon-0__normal"
                    selectedIcon="tabbar-item-icon-0__active"
                >
                    <OrganizationPage />
                </TabBarItem>

                <TabBarItem
                    title="我的"
                    icon="tabbar-item-icon-0__normal"
                    selectedIcon="tabbar-item-icon-0__active"
                >
                    <UcenterPage />
                </TabBarItem>
            </TabBar>
        );
    }
}



