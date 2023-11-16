import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../HomePage.scss'
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../HomeHeader';
import Slider from 'react-slick';


class HandBook extends Component {



    render() {

        return (
            <>
                <div className='section-share hand-book'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-section'>Chuyên Khoa Phổ Biến</span>
                            <button className='btn-section'>Xem thêm</button>
                        </div>
                        <div className='section-body'>
                            <Slider {...this.props.settings}>
                                <div className='section-customize'>
                                    <div className='bg-image hand-book'></div>
                                    <div>Hand Book 1</div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-image hand-book'></div>
                                    <div>Hand Book 2</div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-image hand-book'></div>
                                    <div>Hand Book 3</div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-image hand-book'></div>
                                    <div>Hand Book 4</div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-image hand-book'></div>
                                    <div>Hand Book 5</div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-image hand-book'></div>
                                    <div>Hand Book 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
