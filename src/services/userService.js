import axios from ".././axios";

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', {
        email: userEmail,
        password: userPassword
    });
}
const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}
const createNewUserService = (data) => {
    return axios.post(`/api/create-users`, data)
}
const deleteUserService = (userId) => {
    return axios.delete(`/api/delete-users`, {
        data: {
            id: userId
        }
    })
}
const editUserService = (inputdata) => {
    return axios.put(`/api/edit-users`, inputdata)
}
const getAllCodeService = (input) => {
    return axios.get(`/api/allcode?type=${input}`)
}

export {
    handleLoginApi, getAllUsers,
    createNewUserService, deleteUserService,
    editUserService, getAllCodeService,
}