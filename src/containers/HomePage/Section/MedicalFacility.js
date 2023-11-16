import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../HomePage.scss'
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../HomeHeader';
import Slider from 'react-slick';


import SpecialtyImg from "../../../assets/co-xuong-khop.jpg"

class Specialty extends Component {



    render() {

        return (
            <>
                <div className='section-share section-medical-facility'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-section'>Cơ sở Y Tế</span>
                            <button className='btn-section'>Xem thêm</button>
                        </div>
                        <div className='section-body'>
                            <Slider {...this.props.settings}>
                                <div className='section-customize'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-medical-facility'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bệnh viện trung ương quân đội</div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-medical-facility'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bệnh viện trung ương quân đội 2</div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-medical-facility'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bệnh viện trung ương quân đội 3 </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-medical-facility'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bệnh viện trung ương quân đội 4</div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-medical-facility'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bệnh viện trung ương quân đội 5</div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-medical-facility'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bệnh viện trung ương quân đội 6</div>
                                    </div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
