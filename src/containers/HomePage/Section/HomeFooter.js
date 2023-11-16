import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../HomePage.scss'
import { FormattedMessage } from 'react-intl';


class HomeFooter extends Component {



    render() {

        return (
            <>
                <div className='home-footer'>
                    <p>&copy;2023 Tiến Đạt Dev More Infomation please visit my video <a target='_blank' href='https://www.youtube.com/watch?v=Na80l82k3JQ'>&#8594;Click here&#8592;</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
