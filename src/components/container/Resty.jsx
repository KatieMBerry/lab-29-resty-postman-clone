import React, { Component } from 'react';
import RequestForm from '../../components/presentational/RequestForm';
import ResponseDisplay from '../../components/presentational/ResponseDisplay';
import AllHistory from '../../components/presentational/history/AllHistory';
import { fetchApi } from '../../services/fetch.Api';

export default class Resty extends Component {

    state = {
        urlInput: '',
        selectedMethod: '',
        requestBody: '',
        display: {},
        historyArray: []
    }

    componentDidMount() {
        const historyStorage = JSON.parse(localStorage.getItem('historyArray'));

        if (historyStorage) {
            this.setState({ historyArray: historyStorage });
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    handleSubmit = e => {
        const { urlInput, selectedMethod } = this.state;
        e.preventDefault();
        this.fetchApi();
    }

    handleClick = e => {
        const { id } = e.target;
        let result;

        this.setState({
            urlInput: result.urlInput,
            selectedMethod: result.selectedMethod,
            requestBody: result.requestBody
        });
    }

    fetchApi = () => {
        const { urlInput, selectedMethod, requestBody } = this.state;
        return fetchApi(urlInput, selectedMethod, requestBody)
            .then(res => this.setState({ display: res }));
    }

    render() {
        const { urlInput, selectedMethod, display, requestBody, historyArray } = this.state;

        return (
            <>
                <RequestForm
                    urlInput={urlInput}
                    selectedMethod={selectedMethod}
                    requestBody={requestBody}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit} />
                <ResponseDisplay display={display} />
            </>
        )
    }
}

