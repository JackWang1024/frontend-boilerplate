
function createDataList(config, data) {
    let dataMap = {};
    config.map((field, i) => {
        let name = field.name;
        dataMap[name] = Object.assign({}, field, {
            val: data[name]
        });
    });
    return dataMap;
}


export const planFields = [
    // 套餐名称 
    {
        name: 'name',
        title: '套餐名称',
        type: 'text'
    },
    // 主机构
    {
        name: 'inst_code',
        title: '主机构',
        type: 'text'
    },
    // 机构是否垫付
    {
        name: 'is_advance',
        title: '机构是否垫付',
        type: 'radio',
        options: [
            {title: '以分支机构为准', val: '0'},
            {title: '机构垫付', val: '1'},
            {title: '学生自付', val: '2'}
        ]
    },
    // 机构垫付方式
    {
        name: 'advance_way',
        title: '机构垫付方式',
        type: 'radio',
        options: [
            {title: '一次性垫付', val: '1'},
            {title: '分期垫付', val: '4'}
        ]
    },
    // 机构垫付期数 
    {
        name: 'advance_periods',
        title: '机构垫付期数',
        type: 'text'
    },
    // 还款方式
    {
        name: 'repay_way',
        title: '还款方式',
        type: 'radio',
        options: [
            {title: '前低后高', val: '1'},
            {title: '先息后本', val: '2'},
            {title: '等额本息', val: '3'}
        ]
    },
    // 宽限期 
    {
        name: 'grace_periods',
        title: '宽限期',
        type: 'text'
    },
    // 非宽限期 
    {
        name: 'ungrace_periods',
        title: '非宽限期',
        type: 'text'
    },
    // 宽限期服务费率(%) 
    {
        name: 'grace_rate',
        title: '宽限期服务费率(%)',
        type: 'text'
    },
    // 非宽限期服务费率(%) 
    {
        name: 'ungrace_rate',
        title: '非宽限期服务费率(%) ',
        type: 'text'
    },
    // 贷款利率(%)
    {
        name: 'loan_rate',
        title: '贷款利率(%)',
        type: 'text'
    },
    // 贷款本金(元)[测算用]
    {
        name: 'loan_amt',
        title: '贷款本金(元)[测算用]',
        type: 'text'
    }
];


export function createPlanDataList(data) {
    return createDataList(planFields, data);
}


