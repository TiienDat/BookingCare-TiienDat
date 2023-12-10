import React, { Component } from 'react';
import { connect } from "react-redux";
import './ManageClinic.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import CommonUtils from '../../../utils/CommonUtils';
import Lightbox from 'react-image-lightbox';
import { createClinic } from '../../../services/userService'
import { toast } from 'react-toastify';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageClinic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            imageBase64: '',
            descriptionHTML: '',
            descriptionMarkdown: '',
            isOpen: false,
            previewImgURL: ''
        }
    }
    componentDidMount() {

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {

    }
    handleOnchageImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
                imageBase64: base64
            })
        }
    }
    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
    }
    handleOnchageInput = (event, id) => {
        let valueInput = event.target.value
        let stateCopy = { ...this.state }
        stateCopy[id] = valueInput
        this.setState({
            ...stateCopy
        })
        // console.log('check event target value :', this.state)
    }
    handleEditorChange = ({ html, text }) => {
        this.setState({
            descriptionHTML: html,
            descriptionMarkdown: text,
        })
    }
    handleSaveClinic = async () => {
        let res = await createClinic(this.state)
        if (res && res.errCode === 0) {
            toast.success('Save Specialty Succeed')
            this.setState({
                name: '',
                address: '',
                imageBase64: '',
                descriptionHTML: '',
                descriptionMarkdown: '',
                isOpen: false,
                previewImgURL: ''
            })
        } else {
            toast.error('Save Specialty Failed')
        }
        console.log('check event target value :', this.state)
    }
    render() {
        console.log('check state manage specialty :', this.state)
        return (
            <>
                <div className='manage-specialty-container'>
                    <div className='manage-specilaty-title'>Quản lý phòng khám</div>
                    <div className='add-new-specialty row'>
                        <div className='col-6 form-group'>
                            <label>Tên phòng khám</label>
                            <input className='form-control' type='text'
                                value={this.state.name}
                                onChange={(event) => this.handleOnchageInput(event, 'name')}
                            ></input>
                        </div>
                        <div className='col-6 row form-group img'>
                            <label>Ảnh phòng khám: </label>
                            <input onChange={(event) => this.handleOnchageImage(event)}
                                id='preview-image' type='file' hidden />
                            <label className='label-upload' htmlFor='preview-image'>
                                Upload Imgae <i className="fas fa-upload"></i>
                            </label>
                            <div className='preview-image'
                                onClick={() => this.openPreviewImage()}
                                style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                            ></div>
                        </div>
                        <div className='col-6 form-group'>
                            <label>Địa chỉ phòng khám</label>
                            <input className='form-control' type='text'
                                value={this.state.address}
                                onChange={(event) => this.handleOnchageInput(event, 'address')}
                            ></input>
                        </div>
                        <div className='col-12'>
                            <MdEditor style={{ height: '300px' }}
                                renderHTML={text => mdParser.render(text)}
                                onChange={this.handleEditorChange}
                                value={this.state.descriptionMarkdown}
                            />
                        </div>
                        <div className='col-12'>
                            <button className='btn-save-specialty'
                                onClick={() => this.handleSaveClinic()}
                            >Save</button>
                        </div>
                    </div>
                    {this.state.isOpen === true &&
                        <Lightbox
                            mainSrc={this.state.previewImgURL}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                        />
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageClinic);
