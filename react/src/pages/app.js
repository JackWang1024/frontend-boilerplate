// application's entry

import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import reducers from 'reducers/index';


//********************************
// pages
//********************************
import HomePage                 from './home/index';
import OrganizationDetailPage   from './organization/detail/index';
import PlanDetailPage           from './plan/detail/index';
import CourseDetailPage         from './course/detail/index';
import TeacherDetailPage        from './teacher/detail/index';


//********************************
// basic style
//********************************
import '../css/_base.scss';
import '../../node_modules/foundation/dist/foundation.css';


//********************************
// fast click
//********************************
import FastClick from 'fastclick';
FastClick.attach(document.body);


class App extends Component {
    render() {
        return (<div>{this.props.children}</div>);
    }
}

const store = createStore(reducers, undefined, applyMiddleware(thunk));

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage} />
                <Route path="/organization/:id" component={OrganizationDetailPage}></Route>
                <Route path="/plan/:id" component={PlanDetailPage}></Route>
                <Route path="/course/:id" component={CourseDetailPage}></Route>
                <Route path="/teacher/:id" component={TeacherDetailPage}></Route>
            </Route>
        </Router>
    </Provider>    
), document.getElementById('app'));







