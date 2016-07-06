function createDataList(config, data) {
    let dataList = [];
    return config.map((field, i) => {
        let name = field.name;
        return Object.assign({}, field, {
            val: data[name]
        });
    });
}

export const userFields = [
    // 姓名: 王二小
    {
        name: 'name',
        title: '姓名',
        type: 'text'
    },
    // 身份证号: '340826199909099090'
    {
        name: 'cardcode',
        title: '身份证号',
        type: 'text'
    },
    // 手机号: 13581928491'
    {
        name: 'phone',
        title: '手机号',
        type: 'text'
    },
    // 性别: 男
    {
        name: 'sex',
        title: '性别',
        type: 'text'
    },
    // 年龄: 22
    {
        name: 'age',
        title: '年龄',
        type: 'text'
    },
    // 邮箱: 313131311@qq.com
    {
        name: 'email',
        title: '邮箱',
        type: 'text'
    },
    // qq号: 313131311
    {
        name: 'qq',
        title: 'qq号',
        type: 'text'
    },
    // 住址: 八里庄
    {
        name: 'address',
        title: '住址',
        type: 'text'
    },
    // 教育程度: 硕士及以上
    {
        name: 'eduname',
        title: '教育程度',
        type: 'text'
    },
    // 录取方式: 普通
    {
        name: 'schoolenrollname',
        title: '录取方式',
        type: 'text'
    },
    // 学校全称: 北京交通大学
    {
        name: 'school_unit',
        title: '学校全称',
        type: 'text'
    },
    // 专业: 计算机
    {
        name: 'school_major',
        title: '专业',
        type: 'text'
    },
    // 入学时间: 2011-09-01
    {
        name: 'school_time',
        title: '入学时间',
        type: 'text'
    },
    // 毕业时间: 2015-07-01
    {
        name: 'school_graduation_time',
        title: '毕业时间',
        type: 'text'
    }
];

export function createUserItems(data) {
    return createDataList(userFields, data);
}

export const orderFields = [
    // 订单状态描述: 已放款
    {
        name: 'aduitstatename',
        title: '订单状态描述',
        type: 'text'
    },
    // 订单结清状态:  已结清
    {
        name: 'status',
        title: '订单结清状态',
        type: 'radio',
        options: [
            { title: '已结清', val: 1 },
            { title: '未结清', val: 0 },
        ]
    },
    // 贷款金额: 18000,
    {
        name: 'money',
        title: '贷款金额',
        type: 'text'
    },
    // 放款日期: 2016-01-05
    {
        name: 'loan_date',
        title: '放款日期',
        type: 'text'
    },
    // 是否0息0服: 是
    {
        name: 'is_free_cn',
        title: '是否0息0服',
        type: 'text'
    },
    // 主机构编号: 201606031418180005
    {
        name: 'org_inst_code',
        title: '主机构编号',
        type: 'text'
    },
    // 子机构编号: 201606031418180001
    {
        name: 'org_branch_code',
        title: '子机构编号',
        type: 'text'
    },
    // 子机构名称: 贷贷熊（北京）
    {
        name: 'org_branch_name',
        title: '子机构名称',
        type: 'text'
    },
    // 还款方式: 先息后本
    {
        name: 'product_prototype_name',
        title: '还款方式',
        type: 'text'
    },
    // 机构代还方式: 一次性垫付
    {
        name: 'inst_behalf_way_name',
        title: '机构代还方式',
        type: 'text'
    },
    // 机构代还期数:4,//(该项可无,以下类似)
    {
        name: 'organ_repayment_periods',
        title: '机构代还期数',
        type: 'text'
    },
    // 个人还款期数:8,
    {
        name: 'student_repayment_periods',
        title: '个人还款期数',
        type: 'text'
    },
    // 套餐模式: 机构代还
    {
        name: 'grace_period_repay_name',
        title: '套餐模式',
        type: 'text'
    },
    // 申请日期: 2016-06-01
    {
        name: 'ctime',
        title: '申请日期',
        type: 'text'
    },
    // 放款账户账号:110061699018010016775
    {
        name: 'bank_loan__bank_card',
        title: '放款账户账号',
        type: 'text'
    },
    // 放款账户银行:交行北京西三旗支行
    {
        name: 'bank_loan__bank_name',
        title: '放款账户银行',
        type: 'text'
    },
    // 放款账户户名: 北京华清远见科技信息有限公司
    {
        name: 'bank_loan__bank_account',
        title: '放款账户户名',
        type: 'text'
    },
    // 课程名: PHP
    {
        name: 'course_info__name',
        title: '课程名',
        type: 'text'
    },
    // 课程金额: 15000
    {
        name: 'course_info__amount',
        title: '课程金额',
        type: 'text'
    },
    // 课程周期: 4
    {
        name: 'course_info__cycle',
        title: '课程周期',
        type: 'text'
    },
    // 套餐名称: 贷贷熊6+12
    {
        name: 'plan_info__name',
        title: '套餐名称',
        type: 'text'
    },
    // 宽限期: 4
    {
        name: 'plan_info__grace_periods',
        title: '宽限期',
        type: 'text'
    },
    // 非宽限期: 5
    {
        name: 'plan_info__ungrace_periods',
        title: '非宽限期',
        type: 'text'
    },
    // 毕业保证金比例: 10%
    {
        name: 'loan_extend__graduate_bond',
        title: '毕业保证金比例(%)',
        type: 'text'
    },
    // 毕业保证金:10000
    {
        name: 'loan_extend__graduate_bond_amount',
        title: '毕业保证金',
        type: 'text'
    },
    // 结清保证金比例:10%
    {
        name: 'loan_extend__settle_bond',
        title: '结清保证金比例(%)',
        type: 'text'
    },
    // 结清保证金:1000
    {
        name: 'loan_extend__settle_bond_amount',
        title: '结清保证金',
        type: 'text'
    },
    // 毕业保证金是否返还: 是
    {
        name: 'loan_extend__graduate_bond_status_cn',
        title: '毕业保证金是否返还',
        type: 'text'
    },
    // 结清保证金是否返还: 是
    {
        name: 'loan_extend__settle_bond_status_cn',
        title: '结清保证金是否返还',
        type: 'text'
    }
];


export function createOrderItems(data) {
    return createDataList(orderFields, data);
}


