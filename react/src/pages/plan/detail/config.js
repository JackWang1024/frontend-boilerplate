
function createDataList(config, data) {
    let dataList = [], cfg;
    for (let name in config) {
        cfg = config[name];
        dataList.push({
            name:       name,
            title:      cfg.title,
            type:       cfg.type,
            options:    cfg.options,
            val:        data[name]
        });
    }
    return dataList;
}


const config = {
    // 主机构
    inst_code: {
        title: '主机构',
        type: 'text'
    },
    // 套餐名称 
    name: {
        title: '套餐名称',
        type: 'text'
    },
    // 机构是否垫付
    is_advance: {
        title: '机构是否垫付',
        type: 'radio',
        options: [
            {title: '以分支机构为准', val: '0'},
            {title: '机构垫付', val: '1'},
            {title: '学生自付', val: '2'}
        ]
    },
    // 机构垫付方式
    advance_way: {
        title: '机构垫付方式',
        type: 'radio',
        options: [
            {title: '一次性垫付', val: '1'},
            {title: '分期垫付', val: '4'}
        ]
    },
    // 机构垫付期数 
    advance_periods: {
        title: '机构垫付期数',
        type: 'text'
    },
    // 还款方式
    repay_way: {
        title: '还款方式',
        type: 'radio',
        options: [
            {title: '前低后高', val: '1'},
            {title: '先息后本', val: '2'},
            {title: '等额本息', val: '3'}
        ]
    },
    // 宽限期 
    grace_periods: {
        title: '宽限期',
        type: 'text'
    },
    // 非宽限期 
    ungrace_periods: {
        title: '非宽限期',
        type: 'text'
    },
    // 宽限期服务费率(%) 
    grace_rate: {
        title: '宽限期服务费率(%)',
        type: 'text'
    },
    // 非宽限期服务费率(%) 
    ungrace_rate: {
        title: '非宽限期服务费率(%) ',
        type: 'text'
    },
    // 贷款利率(%)
    loan_rate: {
        title: '贷款利率(%)',
        type: 'text'
    },
    // 贷款本金(元)[测算用]
    loan_amt: {
        title: '贷款本金(元)[测算用]',
        type: 'text'
    }
};


export function createPlanDataList(data) {
    return createDataList(config, data);
}


