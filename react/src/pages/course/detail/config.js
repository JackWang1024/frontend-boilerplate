
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
    // 课程名称 
    name: {
        title: '课程名称',
        type: 'text'
    },
    // 金额 
    amount: {
        title: '金额',
        type: 'text'
    },
    // 备注
    remark: {
        title: '备注',
        type: 'text'
    }
};


export function createCourseDataList(data) {
    return createDataList(config, data);
}


