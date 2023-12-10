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
    return axios.get(`/api/all-code?type=${input}`)
}
const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}
const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctors`)
}
const saveDetailDoctorService = (data) => {
    return axios.post(`/api/save-info-doctors`, data)
}
const getDetailInfoDoctor = (id) => {
    return axios.get(`/api/get-detail-doctors-by-id?id=${id}`)
}
const getMarkdownDoctors = (id) => {
    return axios.get(`/api/get-markdown-doctors?id=${id}`)
}
const SavebulkSchedule = (data) => {
    return axios.post(`/api/bulk-create-schedule`, data)
}
const getScheduleDoctorByDate = (doctorId, date) => {
    return axios.get(`/api/get-schedule-by-date?doctorId=${doctorId}&date=${date}`)
}
const getExtraInforDoctorById = (doctorId) => {
    return axios.get(`/api/get-extra-infor-doctor-by-id?doctorId=${doctorId}`)
}
const getProfileDoctorById = (doctorId) => {
    return axios.get(`/api/get-profile-doctor-by-id?doctorId=${doctorId}`)
}
const postPatinetBookAppoiment = (data) => {
    return axios.post(`/api/patient-book-appoinment`, data)
}
const postVerifyBookAppoiment = (data) => {
    return axios.post(`/api/patient-verify-appoinment`, data)
}
const createSpecialty = (data) => {
    return axios.post(`/api/create-new-specialty`, data)
}
const getAllSpecialty = () => {
    return axios.get(`/api/all-specialty`)
}
const getDetailSpecialtyById = (data) => {
    return axios.get(`/api/get-detail-specialty-by-id?id=${data.id}&location=${data.location}`)
}
const createClinic = (data) => {
    return axios.post(`/api/create-new-clinic`, data)
}
const getAllClinic = () => {
    return axios.get(`/api/all-clinic`)
}
const getDetailClinicById = (data) => {
    return axios.get(`/api/get-detail-clinic-by-id?id=${data.id}`)
}
const getListPatientForDoctor = (data) => {
    return axios.get(`/api/get-list-patient-for-doctor?id=${data.doctorId}&date=${data.date}`)
}
const postSendRemedy = (data) => {
    return axios.post(`/api/send-remedy`, data)
}
export {
    handleLoginApi, getAllUsers,
    createNewUserService, deleteUserService,
    editUserService, getAllCodeService,
    getTopDoctorHomeService, getAllDoctors,
    saveDetailDoctorService, getDetailInfoDoctor,
    getMarkdownDoctors, SavebulkSchedule,
    getScheduleDoctorByDate, getExtraInforDoctorById,
    getProfileDoctorById, postPatinetBookAppoiment,
    postVerifyBookAppoiment, createSpecialty,
    getAllSpecialty, getDetailSpecialtyById,
    createClinic, getAllClinic,
    getDetailClinicById, getListPatientForDoctor,
    postSendRemedy
}