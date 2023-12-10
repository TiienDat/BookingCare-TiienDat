import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../HomePage/HomeHeader';
import './verifyEmail.scss';
import { postVerifyBookAppoiment } from '../../services/userService'

class verifyEmail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statusVerify: false,
            errCode: 0
        }
    }
    async componentDidMount() {
        if (this.props.location && this.props.location.search) {
            let urlParams = new URLSearchParams(this.props.location.search);
            let token = urlParams.get('token');
            let doctorId = urlParams.get('doctorId')
            console.log('check doctorId :', doctorId)
            let res = await postVerifyBookAppoiment({
                token: token,
                doctorId: doctorId
            })
            if (res && res.errCode === 0) {
                this.setState({
                    statusVerify: true,
                    errCode: res.errCode
                })
            } else {
                this.setState({
                    statusVerify: true,
                    errCode: res && res.errCode ? res.errCode : -1
                })

            }
        }

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {

    }
    render() {
        let { statusVerify, errCode } = this.state;

        return (
            <><HomeHeader />
                {statusVerify === false ?
                    <div>Loading data ...</div>
                    : <div>{+errCode === 0 ?
                        <div className='verify-container'>
                            <div className='verify-row'>
                                <div className='left'>
                                    <i className="fas fa-check succeed"></i>
                                </div>
                                <div className='right'>
                                    <b className='succeed'>Cám ơn bạn đã đặt lịch khám chữa bệnh Oline
                                        lịch khám của bạn đã được xác nhận thành công
                                    </b>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='verify-container'>
                            <div className='verify-row'>
                                <div className='left'>
                                    <i className="far fa-frown false"></i>
                                </div>
                                <div className='right'>
                                    <b className='false'>Lịch hẹn không tồn tại hoặc đã được xác nhận !</b>
                                </div>
                            </div>
                        </div>
                    }
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        // language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(verifyEmail);
