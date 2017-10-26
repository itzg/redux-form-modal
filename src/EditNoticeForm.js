import React from 'react'
import {reduxForm, Field as ReduxField} from 'redux-form'
import {Segment, Form, Button, Input, Modal} from 'semantic-ui-react';
import FormActions from './FormActions'

class EditNoticeForm extends React.Component {
    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <Form.Field>
                    <label>Message</label>
                    <ReduxField name='message' component={Input} type='text'/>
                </Form.Field>
                <FormActions>
                    <Button type='submit'>Submit</Button>
                </FormActions>
            </Form>
        )
    }
}

export default reduxForm({
    form: 'editNotice'
})(EditNoticeForm);
