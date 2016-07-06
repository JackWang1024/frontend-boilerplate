import {
    UPDATE_ORGANIZATION, 
    UPDATE_ORGANIZATION_LIST,
    UPDATE_PLAN, 
    UPDATE_PLAN_LIST,
    UPDATE_COURSE, 
    UPDATE_COURSE_LIST,
    UPDATE_TEACHER, 
    UPDATE_TEACHER_LIST,
    UPDATE_INVITE_CODE,
    UPDATE_LOAN_ORDER,
    UPDATE_TASK_BRANCH_LIST,
    UPDATE_TASK_HOST_LIST,
    UPDATE_TASK_HOST,
    UPDATE_TASK_BRANCH
} from 'actions/index';


function union(target, source) {
    return target.concat(source.filter( item => target.indexOf(item) === -1));
}

function organization(state = {
    ids: [],
    entities: {},
    nextPage: 1,
    pageSize: 30
}, action) {
    switch (action.type) {
        case UPDATE_ORGANIZATION: 
            const code = action.data.code;
            let entities = Object.assign({}, state.entities);
            entities[code] = Object.assign({}, entities[code] || {}, action.data);
            return Object.assign({}, state, {entities: entities});
            break;
        case UPDATE_ORGANIZATION_LIST:
            let map = {}, ids = [];
            (action.data || []).forEach((item) => {
                map[item.code] = item;
                ids.push(item.code);
            });
            return Object.assign({}, state, {
                ids: union(state.ids, ids),
                entities: Object.assign({}, state.entities, map),
                nextPage: ids.length > 0 ? state.nextPage + 1 : state.nextPage
            });
            break;
        default:
            return state;
    }
}


function plan(state = {
    ids: [], 
    entities: {}, 
    nextPage: 1,
    pageSize: 30
}, action) {
    switch (action.type) {
        case UPDATE_PLAN: 
            const code = action.data.code;
            let entities = Object.assign({}, state.entities);
            entities[code] = Object.assign({}, entities[code] || {}, action.data);
            return Object.assign({}, state, {entities: entities});
            break;
        case UPDATE_PLAN_LIST:
            let map = {}, ids = [];
            (action.data || []).forEach((item) => {
                map[item.code] = item;
                ids.push(item.code);
            });
            return Object.assign({}, state, {
                ids: union(state.ids, ids),
                entities: Object.assign({}, state.entities, map),
                nextPage: ids.length > 0 ? state.nextPage + 1 : state.nextPage
            });
            break;
        default:
            return state;
    }
}


function course(state = {
    ids: [], 
    entities: {}, 
    nextPage: 1,
    pageSize: 30
}, action) {
    switch (action.type) {
        case UPDATE_COURSE: 
            const code = action.data.code;
            let entities = Object.assign({}, state.entities);
            entities[code] = Object.assign({}, entities[code] || {}, action.data);
            return Object.assign({}, state, {entities: entities});
            break;
        case UPDATE_COURSE_LIST:
            let map = {}, ids = [];
            (action.data || []).forEach((item) => {
                map[item.code] = item;
                ids.push(item.code);
            });
            return Object.assign({}, state, {
                ids: union(state.ids, ids),
                entities: Object.assign({}, state.entities, map),
                nextPage: ids.length > 0 ? state.nextPage + 1 : state.nextPage
            });
            break;
        default:
            return state;
    }
}


function teacher(state = {
    ids: [], 
    entities: {}, 
    nextPage: 1,
    pageSize: 30
}, action) {
    switch (action.type) {
        case UPDATE_TEACHER: 
            const code = action.data.id;
            let entities = Object.assign({}, state.entities);
            entities[code] = Object.assign({}, entities[code] || {}, action.data);
            return Object.assign({}, state, {entities: entities});
            break;
        case UPDATE_TEACHER_LIST:
            let map = {}, ids = [];
            (action.data || []).forEach((item) => {
                map[item.id] = item;
                ids.push(item.id);
            });
            return Object.assign({}, state, {
                ids: union(state.ids, ids),
                entities: Object.assign({}, state.entities, map),
                nextPage: ids.length > 0 ? state.nextPage + 1 : state.nextPage
            });
            break;
        default:
            return state;
    }
}


function inviteCode(state = [], action) {
    if (action.type === UPDATE_INVITE_CODE) {
        return action.data || [];
    } else {
        return state;
    }
}


function loanOrder(state = {}, action) {
    if (action.type === UPDATE_LOAN_ORDER) {
        return action.data || {};
    } else {
        return state;
    }
}


function task(state = {
    hostIds: [],
    hostEntities: {},
    branchIds: [],
    branchEntities: {}
}, action) {
    let map, code, entities, ids;
    switch (action.type) {
        case UPDATE_TASK_BRANCH_LIST: 
            map = {}; ids = [];
            (action.data || []).forEach((item) => {
                map[item.code] = item;
                ids.push(item.code);
            });
            return Object.assign({}, state, {
                branchIds: union(state.branchIds, ids),
                branchEntities: Object.assign({}, state.branchEntities, map)
            });
            break;
        case UPDATE_TASK_HOST_LIST:
            map = {}; ids = [];
            (action.data || []).forEach((item) => {
                map[item.code] = item;
                ids.push(item.code);
            });
            return Object.assign({}, state, {
                hostIds: union(state.hostIds, ids),
                hostEntities: Object.assign({}, state.hostEntities, map)
            });
            break;
        case UPDATE_TASK_HOST:
            code = action.data.code;
            entities = Object.assign({}, state.hostEntities);
            entities[code] = Object.assign({}, entities[code] || {}, action.data);
            return Object.assign({}, state, {hostEntities: entities});
            break;
        case UPDATE_TASK_BRANCH:
            code = action.data.code;
            entities = Object.assign({}, state.branchEntities);
            entities[code] = Object.assign({}, entities[code] || {}, action.data);
            return Object.assign({}, state, {branchEntities: entities});
            break;
        default:
            return state;
    }
}



export default function(state = {}, action) {
    return {
        organization:       organization(state.organization, action),
        plan:               plan(state.plan, action),
        course:             course(state.course, action),
        teacher:            teacher(state.teacher, action),
        inviteCode:         inviteCode(state.inviteCode, action),
        loanOrder:          loanOrder(state.loanOrder, action),
        task:               task(state.task, action)
    }
}





