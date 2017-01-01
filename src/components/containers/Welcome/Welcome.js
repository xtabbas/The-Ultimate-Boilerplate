import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ModalX from 'ModalX'
import Message from 'Message'

import {openModal, closeModal} from 'src/actions/modal'

require('./welcome.scss')

export class Welcome extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {}
    componentWillUnmount() {}

    render() {

        let {
            props: {
                openModal,
                closeModal,
                modal
            }
        } = this

        return (
            <div className='welcome'>
                <Message openModal={openModal}/>
                <ModalX modal={modal} closeModal={closeModal}/>
            </div>
        );
    }

};

const mapStateToProps = state => ({modal: state.modal})

const mapDispatchToProps = dispatch => ({
    openModal: bindActionCreators(openModal, dispatch),
    closeModal: bindActionCreators(closeModal, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)