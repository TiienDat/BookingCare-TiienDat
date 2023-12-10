import React, { Component } from 'react';
import { connect } from "react-redux";
import './RemedyModal.scss';
import { Modal } from 'reactstrap';
import _ from 'lodash';
import * as actions from '../../../store/actions'
import { toast } from 'react-toastify';
import moment from 'moment';
import { CommonUtils } from '../../../utils'

class RemedyModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            imgBase64: ''
        }
    }
    async componentDidMount() {
        if (this.props.dataModal) {
            this.setState({
                email: this.props.dataModal.email
            })
        }
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.dataModal !== prevProps.dataModal) {
            this.setState({
                email: this.props.dataModal.email
            })
        }
    }
    handleOnchangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleOnchageImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            this.setState({
                imgBase64: base64
            })
        }
    }
    handleSendRemedy = () => {
        this.props.sendRemedy(this.state)
    }
    render() {
        // tonggle={}
        let { isOpenModal, dataModal, isCloseModal, sendRemedy } = this.props
        return (
            <Modal isOpen={isOpenModal}
                className={'booking-modal-container'}
                size='lg'
                centered
            >
                <div className='booking-modal-content'>
                    <div className='booking-modal-header'>
                        <span className='left'>
                            Gửi hóa đơn khám bệnh thành công
                        </span>
                        <span className='right' onClick={isCloseModal}>
                            <i className='fas fa-times'></i></span>
                    </div>
                    <div className='modal-body row'>
                        <div className='col-6 form-group'>
                            <label>Email bệnh nhân</label>
                            <input className='form-control' type='email' value={this.state.email}
                                onChange={(event) => this.handleOnchangeEmail(event)}
                            ></input>
                        </div>
                        <div className='col-6 form-group'>
                            <label>Chọn File đơn thuốc</label>
                            <input className='form-control-file' type='file'
                                onChange={(event) => this.handleOnchageImage(event)}
                            ></input>
                        </div>
                    </div>
                    <div className='booking-modal-footer'>
                        <button className='btn-booking-confirm'
                            onClick={() => this.handleSendRemedy()}
                        >Send</button>
                        <button className='btn-booking-cancel'
                            onClick={isCloseModal}
                        >
                            Cancel</button>
                    </div>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RemedyModal);
