const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',

    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAILDED: 'FETCH_GENDER_FAILDED',

    FETCH_POSITION_SUCCESS: 'FETCH_POSITION_SUCCESS',
    FETCH_POSITION_FAILDED: 'FETCH_POSITION_FAILDED',

    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAILDED: 'FETCH_ROLE_FAILDED',

    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILDED: 'CREATE_USER_FAILDED',

    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILDED: 'EDIT_USER_FAILDED',

    FETCH_ALL_USER_SUCCESS: 'FETCH_ALL_USER_SUCCESS',
    FETCH_ALL_USER_FAILDED: 'FETCH_ALL_USER_FAILDED',

    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILDED: 'DELETE_USER_FAILDED',

    FETCH_TOP_DOCTORS_SUCCESS: 'FETCH_TOP_DOCTORS_SUCCESS',
    FETCH_TOP_DOCTORS_FAILDED: 'FETCH_TOP_DOCTORS_FAILDED',

    FETCH_ALL_DOCTORS_SUCCESS: 'FETCH_ALL_DOCTORS_SUCCESS',
    FETCH_ALL_DOCTORS_FAILDED: 'FETCH_ALL_DOCTORS_FAILDED',

    SAVE_DETAIL_DOCTORS_SUCCESS: 'SAVE_DETAIL_DOCTORS_SUCCESS',
    SAVE_DETAIL_DOCTORS_FAILDED: 'SAVE_DETAIL_DOCTORS_FAILDED',

    FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS: 'FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS',
    FETCH_ALLCODE_SCHEDULE_TIME_FAILDED: 'FETCH_ALLCODE_SCHEDULE_TIME_FAILDED',

    FETCH_REQUIRED_DOCTOR_INFOR_START: 'FETCH_REQUIRED_DOCTOR_INFOR_START',
    FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS: 'FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS',
    FETCH_REQUIRED_DOCTOR_INFOR_FAILDED: 'FETCH_REQUIRED_DOCTOR_INFOR_FAILDED',

})

export default actionTypes;