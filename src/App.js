import React, {Component} from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import {Button, Header} from 'semantic-ui-react';
import {saveNotice} from "./actions";
import EditNoticeModal from "./EditNoticeModal";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header image={logo}>
                    <Header.Content>{this.props.notice.message}</Header.Content>
                    <Header.Subheader>Version = {this.props.notice.version}</Header.Subheader>
                </Header>

                <div>
                    <EditNoticeModal trigger={<Button>Edit</Button>} initialValues={this.props.notice} onSubmit={this.props.saveNotice}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {notice} = state;

    return {
        notice
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveNotice(values) {
            dispatch(saveNotice(values.message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
