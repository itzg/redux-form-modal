import React from 'react'
import {Modal,Button} from 'semantic-ui-react';
import EditNoticeForm from './EditNoticeForm';

class EditNoticeModal extends React.Component {
    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Modal trigger={<Button onClick={this.handleOpen}>Edit Notice</Button>}
                   open={this.state.modalOpen} onClose={this.handleClose}
            >
                <Modal.Header>Edit Notice</Modal.Header>
                <Modal.Content>
                    <EditNoticeForm initialValues={this.props.initialValues}
                                    onSubmit={this.props.onSubmit}
                                    onSubmitSuccess={this.handleClose}
                    />
                </Modal.Content>
            </Modal>
        )
    }
}

export default EditNoticeModal;