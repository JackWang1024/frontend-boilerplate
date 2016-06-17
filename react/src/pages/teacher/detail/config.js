
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
    // 姓名
    name: {
        title: '姓名',
        type: 'text'
    },
    // 身份证号
    cardcode: {
        title: '身份证号',
        type: 'text'
    },
    // 手机号
    phone: {
        title: '手机号',
        type: 'text'
    },
    // 邮箱
    mail: {
        title: '邮箱',
        type: 'text'
    },
    // 邀请码
    invite_code: {
        title: '邀请码',
        type: 'text'
    },
    // 教师身份
    level: {
        title: '教师身份',
        type: 'text'
    },
    // 注册时间
    ctime: {
        title: '注册时间',
        type: 'text'
    },
};


export function createTeacherDataList(data) {
    return createDataList(config, data);
}


