import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { handleLoginApi } from '../../services/userService'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isshowpassword: false,
            errMessage: ''
        }
    }

    handleOnchangeInput = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value)
    }
    handleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        console.log(event.target.value)
    }
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            } if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
                console.log('login succeeds')
            }

        } catch (error) {

            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        }

    }
    handleShowHidePassword = () => {
        this.setState({
            isshowpassword: !this.state.isshowpassword
        })
    }
    render() {

        return (
            <>
                <div className='login-background'>
                    <div className='login-container'>
                        <div className='login-content row'>
                            <div className='col-12 text-login' ><b>Login</b></div>
                            <div className='col-12 form-group login-input'>
                                <label>User Name</label>
                                <input type='text' className='form-control'
                                    placeholder='Enter your username'
                                    onChange={(event) => this.handleOnchangeInput(event)} />
                            </div>
                            <div className='col-12 form-group login-input'>
                                <label>Password</label>
                                <div className='custom-input-password'>
                                    <input type={this.state.isshowpassword ? 'text' : 'password'}
                                        className='form-control'
                                        placeholder='Enter your password'
                                        onChange={(event) => this.handleOnchangePassword(event)}
                                    />
                                    <span
                                        onClick={() => { this.handleShowHidePassword() }}>
                                        <i className={this.state.isshowpassword ? 'far fa-eye' : 'fas fa-eye-slash'}></i>
                                    </span>

                                </div>
                            </div>
                            <div className='col-12' style={{ color: 'red' }}>
                                {this.state.errMessage}
                            </div>
                            <div className='col-12 mt-3' >
                                <button className='btn-login'
                                    onClick={() => { this.handleLogin() }}
                                >Login</button>
                            </div>
                            <div className='col-12 mt-3'>
                                <span className='forgot-password'>Forgot your password? </span>
                            </div>
                            <div className='col-12 text-center'>
                                <span className='text-other-login'>Or Login with:</span>
                            </div>
                            <div className='col-12 social-login'>
                                <i className="fab fa-google-plus-g google"></i>
                                <i className="fab fa-facebook-f facebook"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
