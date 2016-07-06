import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormView from 'components/formView';
import {fetchPlan} from '../../../js/actions/index';
import {planFields, createPlanDataList} from './config';

class PlanDetail extends Component {
    constructor(props) {
        super(props);
        this.renderGridRow = this.renderGridRow.bind(this);
    }

    componentWillMount() {
        this.props.fetchPlan(this.props.params.id);
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
        const planDataList = createPlanDataList(this.props.info);
        return (
            <div>
                <div className="org-detail-section">
                    <h3 className="org-detail-section__hd">套餐信息（编号：{id}）</h3>
                    <div>
                        {planFields.map(({ name }, i) => {
                            return this.renderGridRow(planDataList[name], i);
                        })}
                    </div>    
                </div>
            </div>
        );
    }
}


function mapStateToProps({plan: {entities}}, {params: {id}}) {
    return {info: entities[id] || {}};
}

export default connect(mapStateToProps, {fetchPlan: fetchPlan})(PlanDetail);



