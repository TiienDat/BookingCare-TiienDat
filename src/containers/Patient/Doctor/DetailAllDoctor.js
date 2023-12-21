import React, { Component } from 'react';
import { connect } from "react-redux";
import './DetailAllDoctor.scss';
import HomeHeader from '../../HomePage/HomeHeader';
import { LANGUAGES } from '../../../utils';
import { getAllDoctors } from '../../../services/userService'
// import { FormattedMessage } from 'react-intl';

class DetailAllDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrAllDoctor: ''
        }
    }
    async componentDidMount() {
        let res = await getAllDoctors()
        if (res && res.errCode === 0) {
            this.setState({
                arrAllDoctor: res.data ? res.data : ''
            })
        }
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
    }
    handleViewDetail = (id) => {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${id.id}`)
        }
    }
    render() {
        let { arrAllDoctor } = this.state
        let { language } = this.props
        console.log("data :", language)
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

                >Danh sách bác sĩ nổi bật:</div>
                <div className='container'>
                    <div className='row'>
                        {arrAllDoctor && arrAllDoctor.length > 0 &&
                            arrAllDoctor.map((item, index) => {
                                let position = language === LANGUAGES.VI ? item.positionData.valueVi : item.positionData.valueEn
                                let nameSpecialty = item.Doctor_Infor.specialtyData.name
                                return (
                                    <div className='col-12 moduleDoctor' key={index}
                                        onClick={() => this.handleViewDetail(item)}
                                    >
                                        <div className='col-2 bg-image'
                                            style={{ backgroundImage: `url(${item.image})` }}>
                                        </div>
                                        <div className='col-10 content-right'>
                                            <span className='content-name'>
                                                <b>{position} {item.lastName} {item.firstName}</b>
                                            </span>
                                            <br></br>
                                            <span className='content-specialy' style={{ fontStyle: 'italic' }}>
                                                {nameSpecialty}
                                            </span>
                                        </div>
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
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailAllDoctor);
