import ajax     from 'base/ajax';
import {Alert}  from 'foundation';

// api url
import {
    organization, 
    organizationList,
    plan, 
    planList,
    course, 
    courseList,
    teacher, 
    teacherList,
    inviteCode,
    loanOrderDetail,
    taskHost,
    taskHostList,
    taskBranch,
    taskBranchList,
    taskHostSave,
    taskBranchSave,
    taskBranchAdd,
    organReview
} from 'base/api';


//********************************************************
// 机构
//********************************************************

export const UPDATE_ORGANIZATION        = 'UPDATE_ORGANIZATION';
export const UPDATE_ORGANIZATION_LIST   = 'UPDATE_ORGANIZATION_LIST';

export function fetchOrganizationList(loadMore = false) {
    return function(dispatch, getState) {
        const {
            ids, nextPage, pageSize
        } = getState().organization;
        
        if (ids.length > 0 && !loadMore) {
            return null;
        }

        ajax({
            url: organizationList,
            method: 'post',
            data: {
                page: nextPage,
                page_size:  pageSize
            },
            success: function(response) {
                dispatch({ type: UPDATE_ORGANIZATION_LIST, data: response });
            },
            error: function(err) {
                Alert(err);
            }
        });
    }
}

export function fetchOrganization(oid) {
    return function (dispatch, getState) {
        ajax({
            url: organization,
            method: 'post',
            data: {
                code: oid
            },
            success: function(response) {
                let data = response.branch;
                let org = response.org;
                org.area = [
                    org.teach_province,
                    org.teach_city,
                    org.teach_area
                ];
                data.org = org;
                data.area = [
                    data.province_code,
                    data.city_code
                ];
                dispatch({ type: UPDATE_ORGANIZATION, data: data });
            },
            error: function(err) {
                Alert(err);
            }
        });
    };
}



//***************************************
// 套餐
//***************************************

export const UPDATE_PLAN                = 'UPDATE_PLAN';
export const UPDATE_PLAN_LIST           = 'UPDATE_PLAN_LIST';

export function fetchPlanList(oid, loadMore = false) {
    return function (dispatch, getState) {
        const {
            ids, nextPage, pageSize
        } = getState().plan;
        
        if (ids.length > 0 && !loadMore) {
            return null;
        }

        ajax({
            url: planList,
            method: 'post',
            data: {
                inst_code: oid,
                page_size: pageSize,
                page: nextPage
            },
            success: function(response) {
                dispatch({ type: UPDATE_PLAN_LIST, data: response });
            },
            error: function(err) {
                Alert(err);
            }
        });
    };
}

export function fetchPlan(oid) {
    return function (dispatch, getState) {
        ajax({
            url: plan,
            method: 'post',
            data: {
                code: oid
            },
            success: function(response) {
                dispatch({ type: UPDATE_PLAN, data: response });
            },
            error: function(err) {
                Alert(err);
            }
        });
    };
}



//***************************************
// 课程
//***************************************

export const UPDATE_COURSE              = 'UPDATE_COURSE';
export const UPDATE_COURSE_LIST         = 'UPDATE_COURSE_LIST';

export function fetchCourseList(oid, loadMore) {
    return function (dispatch, getState) {
        const {
            ids, nextPage, pageSize
        } = getState().course;
        
        if (ids.length > 0 && !loadMore) {
            return null;
        }

        ajax({
            url: courseList,
            method: 'post',
            data: {
                inst_code: oid,
                page_size: pageSize,
                page: nextPage
            },
            success: function(response) {
                dispatch({ type: UPDATE_COURSE_LIST, data: response });
            },
            error: function(err) {
                Alert(err);
            }
        });
    };
}

export function fetchCourse(oid) {
    return function (dispatch, getState) {
        ajax({
            url: course,
            method: 'post',
            data: {
                code: oid
            },
            success: function(response) {
                dispatch({ type: UPDATE_COURSE, data: response });
            },
            error: function(err) {
                Alert(err);
            }
        });
    };
}



//***************************************
// 教师
//***************************************

export const UPDATE_TEACHER             = 'UPDATE_TEACHER';
export const UPDATE_TEACHER_LIST        = 'UPDATE_TEACHER_LIST';

export function fetchTeacherList(oid, loadMore) {
    return function (dispatch, getState) {
        const {
            ids, nextPage, pageSize
        } = getState().teacher;
        
        if (ids.length > 0 && !loadMore) {
            return null;
        }

        ajax({
            url: teacherList,
            method: 'post',
            data: {
                branch_inst: oid,
                page_size: pageSize,
                page: nextPage
            },
            success: function(response) {
                dispatch({ type: UPDATE_TEACHER_LIST, data: response });
            },
            error: function(err) {
                Alert(err);
            }
        });
    };
}

export function fetchTeacher(tid) {
    return function (dispatch, getState) {
        ajax({
            url: teacher,
            method: 'post',
            data: {
                id: tid
            },
            success: function(response) {
                dispatch({ type: UPDATE_TEACHER, data: response });
            },
            error: function(err) {
                Alert(err);
            }
        });
    };
}


// 申请熊口令
export const UPDATE_INVITE_CODE         = 'UPDATE_INVITE_CODE';

export function fetchInviteCode(hostId, branchId, num) {
    return function(dispatch, getState) {
        ajax({
            url: inviteCode,
            method: 'post',
            data: {
                ins: hostId,
                branch: branchId,
                number: num
            },
            success: function(response) {
                dispatch({ type: UPDATE_INVITE_CODE, data: response });
            },
            error: function(err) {
                Alert(err);
            }
        });
    };
}


// 贷款订单详情
export const UPDATE_LOAN_ORDER = 'UPDATE_LOAN_ORDER';

export function fetchLoanOrder(loanId) {
    return function(dispatch, getState) {
        ajax({
            url: loanOrderDetail,
            method: 'post',
            data: {
                loan_id: loanId
            },
            success: function(response) {
                dispatch({ type: UPDATE_LOAN_ORDER, data: response });
            },
            error: function(err) {
                Alert(err);
            }
        });
    }
}


export const UPDATE_TASK_HOST           = 'UPDATE_TASK_HOST';
export const UPDATE_TASK_BRANCH         = 'UPDATE_TASK_BRANCHE';
export const UPDATE_TASK_HOST_LIST      = 'UPDATE_TASK_HOST_LIST';
export const UPDATE_TASK_BRANCH_LIST    = 'UPDATE_TASK_BRANCH_LIST';

export function fetchTaskHostList() {
    return function(dispatch, getState) {
        ajax({
            url: taskHostList,
            method: 'post',
            success: function(response) {
                dispatch({ type: UPDATE_TASK_HOST_LIST, data: response.inst_list });
            },
            error: function(err) {
                Alert(err);
            }
        });
    }
}

export function fetchTaskBranchList(code) {
    return function(dispatch, getState) {
        ajax({
            url: taskBranchList,
            method: 'post',
            data: {
                inst_code: code
            },
            success: function(response) {
                dispatch({ type: UPDATE_TASK_HOST, data: response.inst_info || {} });
                dispatch({ type: UPDATE_TASK_BRANCH_LIST, data: response.branch_list || [] });
            },
            error: function(err) {
                Alert(err);
            }
        });
    }
}

// 待录入的主机构信息
export function fetchTaskHost(code) {
    return function(dispatch, getState) {
        ajax({
            url: taskHost,
            method: 'post',
            data: {
                inst_code: code
            },
            success: function(response) {
                response.area = [
                    response.teach_province,
                    response.teach_city,
                    response.teach_area
                ];
                dispatch({ type: UPDATE_TASK_HOST, data: response });
            },
            error: function(err) {
                Alert(err);
            }
        });
    }
}

// 保存修改主机构信息
export function updateTaskHost(data) {
    return function(dispatch, getState) {
        const area = data.area || [];
        data.teach_province = area[0] || '';
        data.teach_city     = area[1] || '';
        data.teach_area     = area[2] || '';
        delete data.area;
        ajax({
            url: taskHostSave,
            method: 'post',
            data: data,
            success: function(response) {
                Alert('修改成功！');
            },
            error: function(err) {
                Alert(err);
            }
        });
    }
}

// 待录入的分支机构信息
export function fetchTaskBranch(code) {
    return function(dispatch, getState) {
        ajax({
            url: taskBranch,
            method: 'post',
            data: {
                code: code
            },
            success: function(response) {
                response.area = [
                    response.province_code,
                    response.city_code
                ];
                dispatch({ type: UPDATE_TASK_BRANCH, data: response });
            },
            error: function(err) {
                Alert(err);
            }
        });
    }
}

// 保存修改分支机构信息
export function updateTaskBranch(data) {
    return function(dispatch, getState) {
        const area = data.area || [];
        data.province_code = area[0] || '';
        data.city_code     = area[1] || '';
        delete data.area;
        ajax({
            url: taskBranchSave,
            method: 'post',
            data: data,
            success: function(response) {
                Alert('修改成功！');
            },
            error: function(err) {
                Alert(err);
            }
        });
    }
}

// 添加分支机构
export function addTaskBranch(id) {
    return function(dispatch, getState) {
        ajax({
            url: taskBranchAdd,
            method: 'post',
            data: {
                inst_code: id
            },
            success: function(response) {
                dispatch({ type: UPDATE_TASK_BRANCH_LIST, data: [ response ] });
            },
            error: function(err) {
                Alert(err);
            }
        });
    }
}


export function toReview(id) {
    return function(dispatch, getState) {
        ajax({
            url: organReview,
            method: 'post',
            data: {
                inst_code: id
            },
            success: function(response) {
                Alert('提交成功');
            },
            error: function(err) {
                Alert(err);
            }
        });
    }   
}
