import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import BackTop from '../index';

describe('<BackTop />', function() {
    // 初始化时，组件不可见，不渲染任何东西
    it('should render nothing when init', function() {
        const wrapper = shallow(<BackTop />);
        expect(wrapper.html()).to.equal(null);
    });

    // 当浏览器窗口滚动的距离超过300px，显示组件
    it('should contains div', function() {
        const wrapper = shallow(<BackTop />);
        wrapper.setState({visible: true});
        expect(wrapper.hasClass('backtop')).to.equal(true);
    });
});

