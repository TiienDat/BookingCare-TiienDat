import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorExtraInfor.scss';
import { LANGUAGES } from '../../../utils';
import moment from 'moment';
import localization from 'moment/locale/vi'
import { getScheduleDoctorByDate, getExtraInforDoctorById } from '../../../services/userService'
import { FormattedMessage } from 'react-intl';
import NumberFormat from 'react-number-format';
import { numberFilter } from 'react-bootstrap-table2-filter';

class DoctorExtraInfor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false,
            extraInfor: {}
        }
    }
    async componentDidMount() {
        if (this.props.doctorIdFromParent) {
            let res = await getExtraInforDoctorById(this.props.doctorIdFromParent)
            if (res && res.errCode === 0) {
                this.setState({
                    extraInfor: res.data
                })
            }
        }
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
        if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {
            let res = await getExtraInforDoctorById(this.props.doctorIdFromParent)
            if (res && res.errCode === 0) {
                this.setState({
                    extraInfor: res.data
                })
            }
        }
    }
    showHideDetailDoctor = (status) => {
        this.setState({
            isShowDetailInfor: status
        })
    }
    render() {
        let { isShowDetailInfor, extraInfor } = this.state
        let language = this.props.language
        return (
            <>
                <div className='doctor-extra-infor-container'>
                    <div className='content-up'>
                        <div className='text-address'><FormattedMessage id="patient.extra-infor-doctor.text-address" /></div>
                        <div className='name-clinic'>{extraInfor && extraInfor.nameClinic ? extraInfor.nameClinic : ''}</div>
                        <div className='detail-clinic'>{extraInfor && extraInfor.addressClinic ? extraInfor.addressClinic : ''}</div>
                    </div>
                    <div className='content-down'>
                        {isShowDetailInfor === false ?
                            <div className='short-infor'><FormattedMessage id="patient.extra-infor-doctor.price" /> :
                                {extraInfor && extraInfor.priceData && language === LANGUAGES.VI &&
                                    <NumberFormat
                                        className='currency'
                                        value={extraInfor.priceData.valueVi}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={'VND'}
                                    />
                                }
                                {extraInfor && extraInfor.priceData && language === LANGUAGES.EN &&
                                    <NumberFormat
                                        className='currency'
                                        value={extraInfor.priceData.valueEn}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={'$'}
                                    />
                                }
                                .<span className='detail' onClick={() => this.showHideDetailDoctor(true)}>
                                    <FormattedMessage id="patient.extra-infor-doctor.details" /></span></div>
                            : <>
                                <div className='title-price'><FormattedMessage id="patient.extra-infor-doctor.price" /></div>
                                <div className='detail-infor'>
                                    <div className='price'>
                                        <span className='left'><FormattedMessage id="patient.extra-infor-doctor.price" /></span>
                                        <span className='right'>
                                            {extraInfor && extraInfor.priceData && language === LANGUAGES.VI &&
                                                <NumberFormat
                                                    className='currency'
                                                    value={extraInfor.priceData.valueVi}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    suffix={'VND'}
                                                />
                                            }
                                            {extraInfor && extraInfor.priceData && language === LANGUAGES.EN &&
                                                <NumberFormat
                                                    className='currency'
                                                    value={extraInfor.priceData.valueEn}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    suffix={'$'}
                                                />
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className='note'>{extraInfor && extraInfor.note ? extraInfor.note : ''}</div>
                                <div className='payment'><FormattedMessage id="patient.extra-infor-doctor.payment" />
                                    {extraInfor && extraInfor.paymentData.valueVi && language === LANGUAGES.VI ?
                                        extraInfor.paymentData.valueVi : ''}
                                    {extraInfor && extraInfor.paymentData.valueEn && language === LANGUAGES.EN ?
                                        extraInfor.paymentData.valueEn : ''}
                                </div>
                                <div className='hide-price'><span onClick={() => this.showHideDetailDoctor(false)}>
                                    <FormattedMessage id="patient.extra-infor-doctor.hide-price" /></span></div>
                            </>
                        }
                    </div>

                </div>
            </>

        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
