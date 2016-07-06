
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

export const teacherFields = [
    // 姓名
    {
        name: 'name',
        title: '姓名',
        type: 'text'
    },
    // 身份证号
    {
        name: 'cardcode',
        title: '身份证号',
        type: 'text'
    },
    // 手机号
    {
        name: 'phone',
        title: '手机号',
        type: 'text'
    },
    // 邮箱
    {
        name: 'mail',
        title: '邮箱',
        type: 'text'
    },
    // 邀请码
    {
        name: 'invite_code',
        title: '邀请码',
        type: 'text'
    },
    // 教师身份
    {
        name: 'level',
        title: '教师身份',
        type: 'text'
    },
    // 注册时间
    {
        name: 'ctime',
        title: '注册时间',
        type: 'text'
    },
];


export function createTeacherDataList(data) {
    return createDataList(teacherFields, data);
}


