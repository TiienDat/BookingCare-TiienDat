import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../HomePage.scss'
import { FormattedMessage } from 'react-intl';


class About extends Component {



    render() {

        return (
            <>
                <div className='section-share section-about'>
                    <div className='section-about-header'>
                        Truyền thông nói về BookingCare+
                    </div>
                    <div className='section-about-content'>
                        <div className='content-left'>
                            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/FyDQljKtWnI"
                                title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div className='content-right'>
                            <p>A Way with Words is a radio show and podcast that features light-hearted
                                conversation about language change, debates, and differences, as well as new words,
                                old sayings, slang, family expressions, word origins and histories, etymology, linguistics,
                                regional dialects, word games and puzzles, grammar, books, literature, writers and writing,
                                A Way with Words is a radio show and podcast that features light-hearted
                                conversation about language change, debates, and differences, as well as new words,
                                old sayings, slang, family expressions, word origins and histories, etymology, linguistics,
                                regional dialects, word games and puzzles, grammar, books, literature, writers and writing,
                                A Way with Words is a radio show and podcast that features light-hearted
                                conversation about language change, debates, and differences, as well as new words,
                                old sayings, slang, family expressions, word origins and histories, etymology, linguistics,
                                regional dialects, word games and puzzles, grammar, books, literature, writers and writing,and more.</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
