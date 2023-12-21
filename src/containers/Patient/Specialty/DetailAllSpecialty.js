import React, { Component } from 'react';
import { connect } from "react-redux";
import './DetailAllSpecialty.scss';
import HomeHeader from '../../HomePage/HomeHeader';
// import { LANGUAGES } from '../../../utils';
import { getAllSpecialty } from '../../../services/userService'
// import { FormattedMessage } from 'react-intl';

class DetailAllSpecialty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrAllSpecialty: []
        }
    }
    async componentDidMount() {
        let res = await getAllSpecialty()
        if (res && res.errCode === 0) {
            this.setState({
                arrAllSpecialty: res.data ? res.data : []
            })
        }
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
    }
    handleViewDetail = (id) => {
        if (this.props.history) {
            this.props.history.push(`/detail-specialty/${id.id}`)
        }
    }
    render() {
        let { arrAllSpecialty } = this.state
        console.log("data :", arrAllSpecialty)
        return (
            <>
                <HomeHeader />
                <div style={{
                    fontSize: '25px',
                    fontFamily: 'sans-serif',
                    margin: '30px 90px',
                    textDecoration: 'underline',
                    fontStyle: 'italic'
                }}

                >Khám Chuyên khoa:</div>
                <div className='container'>
                    <div className='row'>
                        {arrAllSpecialty && arrAllSpecialty.length > 0 &&
                            arrAllSpecialty.map((item, index) => {
                                return (
                                    <div className='col-3 module' key={index}
                                        onClick={() => this.handleViewDetail(item)}
                                    >
                                        <div className='bg-image section-medical-facility'
                                            style={{ backgroundImage: `url(${item.image})` }}>
                                        </div>
                                        <span>
                                            <b>{item.name}</b>
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailAllSpecialty);
