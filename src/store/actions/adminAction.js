import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService, getAllUsers, deleteUserService, editUserService } from '../../services/userService';
import { generatePath } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })


export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService("gender")
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFaided());
            }
        } catch (error) {
            dispatch(fetchGenderFaided());
            console.log('check error:', error)
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFaided = () => ({
    type: actionTypes.FETCH_GENDER_FAILDED
})
export const fetchPositionSuccess = (dataInput) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: dataInput
})
export const fetchPositionFaided = () => ({
    type: actionTypes.FETCH_POSITION_FAILDED
})
export const fetchRoleSuccess = (dataInput) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: dataInput
})
export const fetchRoleFaided = () => ({
    type: actionTypes.FETCH_ROLE_FAILDED
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("position")
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFaided());
            }
        } catch (error) {
            dispatch(fetchPositionFaided());
            console.log('check error:', error)
        }
    }
}
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("role")
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFaided());
            }
        } catch (error) {
            dispatch(fetchRoleFaided());
            console.log('check error:', error)
        }
    }
}
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            toast.success("Create new user succeed!")
            if (res && res.errCode === 0) {
                dispatch(saveUserSuccess(res.data));
                dispatch(fetchAllUsersStart())
            } else {
                toast.error("Create new user error!")
                dispatch(saveUserFailed());
            }
        } catch (error) {
            dispatch(saveUserFailed());
            console.log('saveUserFailded error:', error)
        }
    }
}
export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})
export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            toast.success("Update the user succeed!")
            if (res && res.errCode === 0) {
                dispatch(editUserSuccess(res.data));
                dispatch(fetchAllUsersStart())
            } else {
                toast.error("Create the user error!")
                dispatch(editUserFailed());
            }
        } catch (error) {
            dispatch(editUserFailed());
            console.log('Create user error :', error)
        }
    }
}
export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})
export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILDED
})

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers('ALL');
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users.reverse()));
            } else {
                dispatch(fetchAllUserFailed());
            }
        } catch (error) {
            dispatch(fetchAllUserFailed());
            console.log('saveUserFailded error:', error)
        }
    }
}
export const fetchAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: data
})
export const fetchAllUserFailed = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILDED
})

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                toast.success("Delete user succeed!")
                dispatch(deleteUserSuccess(res));
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Delete user failde!")
                dispatch(deleteUserFailed());
            }
        } catch (error) {
            dispatch(deleteUserFailed());
            console.log('saveUserFailded error:', error)
        }
    }
}
export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})
export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})