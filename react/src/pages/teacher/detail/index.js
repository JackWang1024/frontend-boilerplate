import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormView from 'components/formView';
import {fetchTeacher} from '../../../js/actions/index';
import {teacherFields, createTeacherDataList} from './config';

class TeacherDetail extends Component {
    constructor(props) {
        super(props);
        this.renderGridRow = this.renderGridRow.bind(this);
    }

    componentWillMount() {
        this.props.fetchTeacher(this.props.params.id);
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
        const teacherDataList = createTeacherDataList(this.props.info);
        return (
            <div>
                <div className="org-detail-section">
                    <h3 className="org-detail-section__hd">教师信息（编号：{id}）</h3>
                    <div>
                        {teacherFields.map(({ name }, i) => {
                            return this.renderGridRow(teacherDataList[name], i)
                        })}
                    </div>    
                </div>
            </div>
        );
    }
}


function mapStateToProps({teacher: {entities}}, {params: {id}}) {
    return {info: entities[id] || {}};
}

export default connect(mapStateToProps, {fetchTeacher: fetchTeacher})(TeacherDetail);