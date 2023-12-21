import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss'
import { getAllClinic } from '../../../services/userService'
import Slider from 'react-slick';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { FormattedMessage } from 'react-intl'

class Specialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrClinic: []
        }
    }

    async componentDidMount() {
        let res = await getAllClinic();
        this.setState({
            arrClinic: res.data ? res.data : 0
        })
    }

    handleViewDetailClinic = (clinic) => {
        if (this.props.history) {
            this.props.history.push(`/detail-clinic/${clinic.id}`)
        }
    }
    handleViewMore = () => {
        if (this.props.history) {
            this.props.history.push(`/detail-all-clinic`)
        }
    }
    render() {
        let { arrClinic } = this.state
        console.log('check arr clinic', arrClinic)
        return (
            <>
                <div className='section-share section-medical-facility'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-section'><FormattedMessage id="homepage.outstanding-clinic" /></span>
                            <button className='btn-section'
                                onClick={() => this.handleViewMore()}
                            ><FormattedMessage id="homepage.more-info" /></button>
                        </div>
                        <div className='section-body'>
                            <Slider {...this.props.settings}>
                                {arrClinic && arrClinic.length > 0 &&
                                    arrClinic.map((item, index) => {
                                        return (
                                            <>
                                                <div className='section-customize clinic-child' key={index}
                                                    onClick={() => this.handleViewDetailClinic(item)}
                                                >
                                                    <div className='outer-bg'>
                                                        <div className='bg-image section-medical-facility'
                                                            style={{ backgroundImage: `url(${item.image})` }}>
                                                        </div>
                                                    </div>
                                                    <div className='position text-center'>
                                                        <div className='clinic-name'>{item.name}</div>
                                                    </div>
                                                </div>
                                            </>

                                        )
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
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty));
