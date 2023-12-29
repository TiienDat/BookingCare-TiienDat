import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../HomePage.scss'
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../HomeHeader';
import Slider from 'react-slick';
import * as actions from '../../../store/actions'
import { LANGUAGES } from '../../../utils/constant';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

class OutstandingDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrDoctors: []
        }
    }

    componentDidMount() {
        this.props.loadTopDoctorRedux();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux
            })
        }
    }
    handleViewDetailDoctor = (doctor) => {
        console.log('check datail doctor', doctor)
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${doctor.id}`)
        }
    }
    handleViewMore = () => {
        if (this.props.history) {
            this.props.history.push(`/detail-all-doctor`)
        }
    }
    render() {
        let { language } = this.props;
        let arrDoctors = this.state.arrDoctors;
        console.log('check ardoctor showw:', arrDoctors)
        // arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors)
        return (
            <>
                <div className='section-share outstanding-doctor'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-section'>
                                <FormattedMessage id="homepage.outstanding-doctor" />
                            </span>
                            <button className='btn-section'
                                onClick={() => this.handleViewMore()}
                            >
                                <FormattedMessage id="homepage.more-info" />
                            </button>
                        </div>
                        <div className='section-body'>
                            <Slider {...this.props.settings}>
                                {arrDoctors && arrDoctors.length > 0 &&
                                    arrDoctors.map((item, index) => {
                                        let imageBase64 = '';
                                        if (item.image) {
                                            imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                                        }
                                        let nameVi = `${item.positionData.valueVi},${item.lastName} ${item.firstName}`
                                        let nameEn = `${item.positionData.valueEn},${item.firstName} ${item.lastName}`
                                        if (item.roleId === 'R2') {
                                            return (
                                                <div className='section-customize' key={index} onClick={() => this.handleViewDetailDoctor(item)}>
                                                    <div className='customize-border'>
                                                        <div className='outer-background'>
                                                            <div className='bg-image outstanding-doctor'
                                                                style={{ backgroundImage: `url(${imageBase64})` }}
                                                            />
                                                        </div>
                                                        <div className='position text-center'>
                                                            <div>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                            <div>{item.Doctor_Infor.specialtyData.name}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        topDoctorsRedux: state.admin.dataDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctorRedux: () => dispatch(actions.fetchTopDoctor())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor));
