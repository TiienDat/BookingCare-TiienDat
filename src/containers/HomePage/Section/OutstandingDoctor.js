import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../HomePage.scss'
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../HomeHeader';
import Slider from 'react-slick';

class OutstandingDoctor extends Component {



    render() {

        return (
            <>
                <div className='section-share outstanding-doctor'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-section'>Bác Sĩ Nổi Bật</span>
                            <button className='btn-section'>Xem thêm</button>
                        </div>
                        <div className='section-body'>
                            <Slider {...this.props.settings}>
                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-background'>
                                            <div className='bg-image outstanding-doctor'></div>
                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư tiến sĩ 1</div>
                                            <div>Tim Mạch</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-background'>
                                            <div className='bg-image outstanding-doctor'></div>
                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư tiến sĩ 2</div>
                                            <div>Tim Mạch</div>
                                        </div>
                                    </div>

                                </div>
                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-background'>
                                            <div className='bg-image outstanding-doctor'></div>
                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư tiến sĩ 3</div>
                                            <div>Tim Mạch</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-background'>
                                            <div className='bg-image outstanding-doctor'></div>
                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư tiến sĩ 4</div>
                                            <div>Tim Mạch</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-background'>
                                            <div className='bg-image outstanding-doctor'></div>
                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư tiến sĩ 5</div>
                                            <div>Tim Mạch</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-background'>
                                            <div className='bg-image outstanding-doctor'></div>
                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư tiến sĩ 6</div>
                                            <div>Tim Mạch</div>
                                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
