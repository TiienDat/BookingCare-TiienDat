import React, { Component } from 'react';
import { connect } from "react-redux";
import './DetailAllClinic.scss';
import HomeHeader from '../../HomePage/HomeHeader';
// import { LANGUAGES } from '../../../utils';
import { getAllClinic } from '../../../services/userService'
// import { FormattedMessage } from 'react-intl';

class DetailAllClinic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrAllSpecialty: []
        }
    }
    async componentDidMount() {
        let res = await getAllClinic()
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
            this.props.history.push(`/detail-clinic/${id.id}`)
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

                >Tất cả cơ sở y tế:</div>
                <div className='container'>
                    <div className='row'>
                        {arrAllSpecialty && arrAllSpecialty.length > 0 &&
                            arrAllSpecialty.map((item, index) => {
                                return (
                                    <div className='col-3 module-clinic' key={index}
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailAllClinic);
