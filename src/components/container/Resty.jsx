import React, { Component } from 'react';
import RequestForm from '../../components/presentational/RequestForm';
import ResponseDisplay from '../../components/presentational/ResponseDisplay';
import AllHistory from '../../components/presentational/history/AllHistory';
import { fetchApi } from '../../services/fetch.Api';


export default class Resty extends Component {

    state = {
        urlInput: '',
        selectedMethod: '',
        requestBody: [],
        display: [],
        historyArray: []
    }

    handleUrlChange = ({ target }) => {
        this.setState({ urlInput: target.value });
    }

    handleMethodChange = ({ target }) => {
        this.setState({ selectedMethod: target.value });
    }

    handleRequestChange = ({ target }) => {
        this.setState({ requestBody: target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { urlInput, selectedMethod, requestBody } = this.state;

        fetchApi(urlInput, selectedMethod, requestBody)
            .then(display => this.setState({ display }));

        const newRequest = {
            urlInput: this.state.urlInput,
            selectedMethod: this.state.selectedMethod
        };
        this.state.historyArray.push(newRequest);
    }

    render() {
        const { display, historyArray } = this.state;

        return (
            <>
                <AllHistory historyArray={historyArray} />
                <RequestForm
                    handleUrlChange={this.handleUrlChange}
                    handleMethodChange={this.handleMethodChange}
                    handleRequestChange={this.handleRequestChange}
                    handleSubmit={this.handleSubmit} />
                <ResponseDisplay display={display} />
            </>
        )
    }
}

