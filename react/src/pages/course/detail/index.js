import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormView from 'components/formView';
import {createCourseDataList} from './config';
import {fetchCourse} from '../../../js/actions/index';



class CourseDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchCourse(this.props.params.id);
    }

    renderGridRow(item, i) {
        return (
            <dl key={i} className="org-detail-item">
                <dt className="org-detail-item__title">{item.title}</dt>
                <dd className="org-detail-item__content">
                    <FormView 
                        type={item.type}
                        name={item.name}
                        val={item.val}
                        options={item.options}
                        disabled={true}
                        onChange={(val) => console.log(val)}
                    />
                </dd>
            </dl>
        );
    }

    render() {
        const id = this.props.params.id;
        const courseDataList = createCourseDataList(this.props.info);

        return (
            <div className="organization-detail-wrap">
                <div className="org-detail-section">
                    <h3 className="org-detail-section__hd">主机构信息（编号：{id}）</h3>
                    <div>
                        {courseDataList.map(this.renderGridRow.bind(this))}
                    </div>    
                </div>
            </div>
        );
    }
}


function mapStateToProps({course: {entities}}, {params: {id}}) {
    return {info: entities[id] || {}};
}

export default connect(mapStateToProps, {fetchCourse: fetchCourse})(CourseDetail);