export const adminMenu = [
    { //Quản Lý Người Dùng
        name: 'menu.admin.manage-user', menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manage'
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux'
            },
            {
                name: 'menu.admin.manage-doctor', link: '/system/manage-doctor'
            },
            // {
            //     name: 'menu.admin.manage-admin', link: '/system/manage-admin'
            // },
            { //Quản kế hoạch của bác sĩ

                name: 'menu.doctor.manage-schedule', link: '/doctor/manage-schedule'
            }
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
    },
    { //Quản Lý Phòng Khám 
        name: 'menu.admin.clinic', menus: [
            {
                name: 'menu.admin.manage-clinic', link: '/system/manage-clinic'
            },
        ]
    },
    { //Quản Lý Chuyên Khoa 
        name: 'menu.admin.specialty', menus: [
            {
                name: 'menu.admin.manage-specialty', link: '/system/manage-specialty'
            },
        ]
    },
    { //Quản Lý Cẩm Nang
        name: 'menu.admin.handbook', menus: [
            {
                name: 'menu.admin.manage-handbook', link: '/system/manage-handbook'
            },
        ]
    },
];

export const doctorMenu = [
    {
        name: 'menu.admin.manage-user',
        menus: [
            { //Quản kế hoạch của bác sĩ

                name: 'menu.doctor.manage-schedule', link: '/doctor/manage-schedule'
            },
            { //Quản lý bệnh nhân

                name: 'menu.doctor.manage-patient', link: '/doctor/manage-patient'
            }
        ]
    }
];