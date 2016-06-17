// function createDataList(config, data) {
//     let dataList = [], cfg;
//     for (let name in config) {
//         cfg = config[name];
//         dataList.push({
//             name:       name,
//             title:      cfg.title,
//             type:       cfg.type,
//             options:    cfg.options,
//             val:        data[name]
//         });
//     }
//     return dataList;
// }

function createDataList(config, data) {
    let dataList = {}, cfg;
    for (let name in config) {
        cfg = config[name];
        dataList[name] = {
            name:       name,
            title:      cfg.title,
            type:       cfg.type,
            options:    cfg.options,
            val:        data[name]
        };
    }
    return dataList;
}


//*****************************
// 主机构配置
//*****************************

const hostOrgDataConfig = {
    // 全称
    name: {
        title: '全称',
        type: 'text'
    },
    // 简称
    cn: {
        title: '简称',
        type: 'text'
    },
    // 机构注册地址
    reg_addr: {
        title: '机构注册地址',
        type: 'text'
    },
    area: {
        title: '省-市-县/区',
        type: 'areaCascade'
    },
    // 开户账户名
    bank_account: {
        title: '开户账户名',
        type: 'text'
    },
    // 开户行名称
    bank_name: {
        title: '开户行名称',
        type: 'text'
    },
    // 开户行卡号
    bank_card: {
        title: '开户行卡号',
        type: 'text'
    },
    // 结算卡账户名
    debit_account: {
        title: '结算卡账户名',
        type: 'text'
    },
    // 结算卡开户行名称
    debit_name: {
        title: '结算卡开户行名称',
        type: 'text'
    },
    // 结算卡卡号
    debit_card: {
        title: '结算卡卡号',
        type: 'text'
    },
    // 是否委贷
    is_entrust: {
        title: '是否委贷',
        type: 'radio',
        options: [
            {title: '否', val: '0'},
            {title: '是', val: '1'},
        ]
    },
    // 放款账户类型
    loan_type: {
        title: '放款账户类型',
        type: 'radio',
        options: [
            {title: '主机构', val: '1'},
            {title: '分支机构', val: '2'},
        ]
    },
    // 负责人姓名 : 庞艳
    contact_name: {
        title: '负责人姓名',
        type: 'text'
    },
    // 负责人电话
    contact_tel: {
        title: '负责人电话',
        type: 'text'
    },
    // 负责人邮箱 : pangyan@lanou3g.com
    contact_email: {
        title: '负责人邮箱',
        type: 'text'
    },
    // 负责人职位 : 贷款负责人
    contact_pos: {
        title: '负责人职位',
        type: 'text'
    },
    // 财务姓名 : 庞艳
    finance_name: {
        title: '财务姓名',
        type: 'text'
    },
    // 财务电话 : 13126682630
    finance_tel: {
        title: '财务电话',
        type: 'text'
    },
    // 财务邮箱 : dan.zhang@beebank.com
    finance_email: {
        title: '财务邮箱',
        type: 'text'
    },
    // 大专是否抓取通话详单 是 否
    is_getphone: {
        title: '大专是否抓取通话详单',
        type: 'radio',
        options: [
            {title: '是', val: '0'},
            {title: '否', val: '1'},
        ]
    },
    // 日账单接收邮箱
    daily_bill_emails: {
        title: '日账单接收邮箱',
        type: 'textarea'
    },
    // 月账单接收邮箱
    month_bill_emails: {
        title: '月账单接收邮箱',
        type: 'textarea'
    },
    // 还款账单接收邮箱 
    repay_bill_emails: {
        title: '还款账单接收邮箱',
        type: 'textarea'
    },
    // 在读证明接收邮箱
    confirm_bill_emails: {
        title: '在读证明接收邮箱',
        type: 'textarea'
    },
};


export function createHostState(data) {
    return createDataList(hostOrgDataConfig, data);
}


//*****************************
// 分支机构配置
//*****************************

export const branchOrgDataConfig = {
    // 全称*
    name: {
        title: '全称',
        type: 'text',
    },
    // 简称*
    cn: {
        title: '简称',
        type: 'text',
    },
    // 昵称*
    nick: {
        title: '昵称',
        type: 'text',
    },
    // 机构注册地址 
    reg_addr: {
        title: '机构注册地址',
        type: 'text',
    },
    // 机构办公地址 
    office_addr: {
        title: '机构办公地址',
        type: 'text',
    },
    // 省* 市* 
    area: {
        title: '省-市',
        type: 'areaCascade',
    },
    // 负责人姓名 
    contact_name: {
        title: '负责人姓名',
        type: 'text',
    },
    // 负责人电话 
    contact_tel: {
        title: '负责人电话',
        type: 'text',
    },
    // 负责人邮箱 
    contact_email: {
        title: '负责人邮箱',
        type: 'text',
    },
    // 负责人职位 
    contact_pos: {
        title: '负责人职位',
        type: 'text',
    },
    // 开户账户名 
    bank_account: {
        title: '开户账户名',
        type: 'text',
    },
    // 开户行名称 
    bank_name: {
        title: '开户行名称',
        type: 'text',
    },
    // 开户行卡号 
    bank_card: {
        title: '开户行卡号',
        type: 'text',
    },
    // 结算卡账户名 
    debit_account: {
        title: '结算卡账户名',
        type: 'text',
    },
    // 结算卡开户行名称
    debit_name: {
        title: '结算卡开户行名称',
        type: 'text',
    },
    // 结算卡卡号
    debit_card: {
        title: '结算卡卡号',
        type: 'text',
    },
    // 机构是否垫付
    is_advance: {
        title: '机构是否垫付',
        type: 'radio',
        options: [
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
        type: 'text',
    },
    // 是否代收保证金
    is_bond: {
        title: '是否代收保证金',
        type: 'radio',
        options: [
            {title: '否', val: '0'},
            {title: '是', val: '1'}
        ]
    }, 
    // 财务姓名 : 庞艳
    finance_name: {
        title: '财务姓名',
        type: 'text'
    },
    // 财务电话 : 13126682630
    finance_tel: {
        title: '财务电话',
        type: 'text'
    },
    // 财务邮箱 : dan.zhang@beebank.com
    finance_email: {
        title: '财务邮箱',
        type: 'text'
    },
    // 是否代收服务费
    is_service: {
        title: '是否代收服务费',
        type: 'radio',
        options: [
            {title: '否', val: '0'},
            {title: '是', val: '1'}
        ]
    },
    // 大专是否抓取通话详单
     is_getphone: {
        title: '大专是否抓取通话详单',
        type: 'radio',
        options: [
            {title: '否', val: '0'},
            {title: '是', val: '1'},
            {title: '以主机构配置为准', val: '2'},
        ]
    },
    // 日账单接收邮箱 
    daily_bill_emails: {
        title: '日账单接收邮箱',
        type: 'text',
    },
    // 月账单接收邮箱 
    month_bill_emails: {
        title: '月账单接收邮箱',
        type: 'text',
    },
    // 还款账单接收邮箱 
    repay_bill_emails: {
        title: '还款账单接收邮箱',
        type: 'text',
    },
    // 在读证明账单接收邮箱
    confirm_bill_emails: {
        title: '在读证明账单接收邮箱',
        type: 'textarea',
    }
};


export function createBranchState(data) {
    return createDataList(branchOrgDataConfig, data);
}



