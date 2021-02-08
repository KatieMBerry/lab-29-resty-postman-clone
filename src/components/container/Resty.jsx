import React, { Component } from 'react';
import RequestForm from '../../components/presentational/RequestForm';
import ResponseDisplay from '../../components/presentational/ResponseDisplay';
import AllHistory from '../../components/presentational/history/AllHistory';

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
}

