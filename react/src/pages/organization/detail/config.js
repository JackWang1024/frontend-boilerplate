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


//*****************************
// 主机构配置
//*****************************

export const hostFields = [
    // 全称
    {
        name: 'name',
        title: '全称',
        type: 'text'
    },
    // 简称
    {
        name: 'cn',
        title: '简称',
        type: 'text'
    },
    // 办公地址
    {
        name: 'office_addr',
        title: '办公地址',
        type: 'text'
    },
    // 机构注册地址
    {
        name: 'reg_addr',
        title: '机构注册地址',
        type: 'text'
    },
    // 省-市-县/区
    {
        name: 'area',
        title: '省-市-县/区',
        type: 'areaCascade',
        val: []
    },
    // 开户账户名
    {
        name: 'bank_account',
        title: '开户账户名',
        type: 'text'
    },
    // 开户行名称
    {
        name: 'bank_name',
        title: '开户行名称',
        type: 'text'
    },
    // 开户行卡号
    {
        name: 'bank_card',
        title: '开户行卡号',
        type: 'text'
    },
    // 结算卡账户名
    {
        name: 'debit_account',
        title: '结算卡账户名',
        type: 'text'
    },
    // 结算卡开户行名称
    {
        name: 'debit_name',
        title: '结算卡开户行名称',
        type: 'text'
    },
    // 结算卡卡号
    {
        name: 'debit_card',
        title: '结算卡卡号',
        type: 'text'
    },
    // 是否委贷
    {
        name: 'is_entrust',
        title: '是否委贷',
        type: 'radio',
        options: [
            {title: '否', val: '0'},
            {title: '是', val: '1'},
        ]
    },
    // 放款账户类型
    {
        name: 'loan_type',
        title: '放款账户类型',
        type: 'radio',
        options: [
            {title: '主机构', val: '1'},
            {title: '分支机构', val: '2'},
        ]
    },
    // 负责人姓名 : 庞艳
    {
        name: 'contact_name',
        title: '负责人姓名',
        type: 'text'
    },
    // 负责人电话
    {
        name: 'contact_tel',
        title: '负责人电话',
        type: 'text'
    },
    // 负责人邮箱 : pangyan@lanou3g.com
    {
        name: 'contact_email',
        title: '负责人邮箱',
        type: 'text'
    },
    // 负责人职位 : 贷款负责人
    {
        name: 'contact_pos',
        title: '负责人职位',
        type: 'text'
    },
    // 财务姓名 : 庞艳
    {
        name: 'finance_name',
        title: '财务姓名',
        type: 'text'
    },
    // 财务电话 : 13126682630
    {
        name: 'finance_tel',
        title: '财务电话',
        type: 'text'
    },
    // 财务邮箱 : dan.zhang@beebank.com
    {
        name: 'finance_email',
        title: '财务邮箱',
        type: 'text'
    },
    // 大专是否抓取通话详单 是 否
    {
        name: 'is_getphone',
        title: '大专是否抓取通话详单',
        type: 'radio',
        options: [
            {title: '是', val: '0'},
            {title: '否', val: '1'},
        ]
    },
    // 日账单接收邮箱
    {
        name: 'daily_bill_emails',
        title: '日账单接收邮箱',
        type: 'textarea'
    },
    // 月账单接收邮箱
    {
        name: 'month_bill_emails',
        title: '月账单接收邮箱',
        type: 'textarea'
    },
    // 还款账单接收邮箱 
    {
        name: 'repay_bill_emails',
        title: '还款账单接收邮箱',
        type: 'textarea'
    },
    // 在读证明接收邮箱
    {
        name: 'confirm_bill_emails',
        title: '在读证明接收邮箱',
        type: 'textarea'
    }
];


export function createHostState(data) {
    return createDataList(hostFields, data);
}


//*****************************
// 分支机构字段配置
//*****************************

export const branchFields = [
    // 全称*
    {
        name: 'name',
        title: '全称',
        type: 'text',
    },
    // 简称*
    {
        name: 'cn',
        title: '简称',
        type: 'text',
    },
    // 昵称*
    {
        name: 'nick',
        title: '昵称',
        type: 'text',
    },
    // 机构注册地址 
    {
        name: 'reg_addr',
        title: '机构注册地址',
        type: 'text',
    },
    // 机构办公地址 
    {
        name: 'office_addr',
        title: '机构办公地址',
        type: 'text',
    },
    // 省* 市* 
    {
        name: 'area',
        title: '省-市',
        type: 'areaCascade',
    },
    // 负责人姓名 
    {
        name: 'contact_name',
        title: '负责人姓名',
        type: 'text',
    },
    // 负责人电话 
    {
        name: 'contact_tel',
        title: '负责人电话',
        type: 'text',
    },
    // 负责人邮箱 
    {
        name: 'contact_email',
        title: '负责人邮箱',
        type: 'text',
    },
    // 负责人职位 
    {
        name: 'contact_pos',
        title: '负责人职位',
        type: 'text',
    },
    // 开户账户名 
    {
        name: 'bank_account',
        title: '开户账户名',
        type: 'text',
    },
    // 开户行名称 
    {
        name: 'bank_name',
        title: '开户行名称',
        type: 'text',
    },
    // 开户行卡号 
    {
        name: 'bank_card',
        title: '开户行卡号',
        type: 'text',
    },
    // 结算卡账户名 
    {
        name: 'debit_account',
        title: '结算卡账户名',
        type: 'text',
    },
    // 结算卡开户行名称
    {
        name: 'debit_name',
        title: '结算卡开户行名称',
        type: 'text',
    },
    // 结算卡卡号
    {
        name: 'debit_card',
        title: '结算卡卡号',
        type: 'text',
    },
    // 机构是否垫付
    {
        name: 'is_advance',
        title: '机构是否垫付',
        type: 'radio',
        options: [
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
        type: 'text',
    },
    // 是否代收保证金
    {
        name: 'is_bond',
        title: '是否代收保证金',
        type: 'radio',
        options: [
            {title: '否', val: '0'},
            {title: '是', val: '1'}
        ]
    }, 
    // 总保证金利率（%）
    {
        name: 'bond_rate',
        title: '总保证金利率(%)',
        type: 'text'
    },
    // 毕业保证金利率（%）
    {
        name: 'bond_gradu_rate',
        title: '毕业保证金利率(%)',
        type: 'text'
    },
    // 结清保证金利率（%）
    {
        name: 'bond_settle_rate',
        title: '结清保证金利率(%)',
        type: 'text'
    },
    // 风控保证金利率（%）
    {
        name: 'bond_risk_rate',
        title: '风控保证金利率(%)',
        type: 'text'
    },
    // 财务姓名 : 庞艳
    {
        name: 'finance_name',
        title: '财务姓名',
        type: 'text'
    },
    // 财务电话 : 13126682630
    {
        name: 'finance_tel',
        title: '财务电话',
        type: 'text'
    },
    // 财务邮箱 : dan.zhang@beebank.com
    {
        name: 'finance_email',
        title: '财务邮箱',
        type: 'text'
    },
    // 是否代收服务费
    {
        name: 'is_service',
        title: '是否代收服务费',
        type: 'radio',
        options: [
            {title: '否', val: '0'},
            {title: '是', val: '1'}
        ]
    },
    // 大专是否抓取通话详单
    {
        name: 'is_getphone',
        title: '大专是否抓取通话详单',
        type: 'radio',
        options: [
            {title: '否', val: '0'},
            {title: '是', val: '1'},
            {title: '以主机构配置为准', val: '2'},
        ]
    },
    // 日账单接收邮箱 
    {
        name: 'daily_bill_emails',
        title: '日账单接收邮箱',
        type: 'text',
    },
    // 月账单接收邮箱 
    {
        name: 'month_bill_emails',
        title: '月账单接收邮箱',
        type: 'text',
    },
    // 还款账单接收邮箱 
    {
        name: 'repay_bill_emails',
        title: '还款账单接收邮箱',
        type: 'text',
    },
    // 在读证明账单接收邮箱
    {
        name: 'confirm_bill_emails',
        title: '在读证明账单接收邮箱',
        type: 'textarea',
    }
];


export function createBranchState(data) {
    return createDataList(branchFields, data);
}



