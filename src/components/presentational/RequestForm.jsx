import React from 'react';
import PropTypes from 'prop-types';

const RequestForm = ({ urlInput, selectedMethod, requestBody, onSubmit, onChange }) => (

    <section>
        <form onSubmit={onSubmit} >
            <input type="text"
                placeholder="url"
                name="url"
                value={urlInput}
                onChange={onChange} />

            <div>
                <label htmlFor="GET">GET</label>
                <input type="radio"
                    id="GET"
                    name="method"
                    value="GET"
                    onChange={onChange}
                    checked={selectedMethod === 'GET'} />

                <label htmlFor="POST">POST</label>
                <input type="radio"
                    id="GET"
                    name="method"
                    value="POST"
                    onChange={onChange}
                    checked={selectedMethod === 'POST'} />

                <label htmlFor="PUT">PUT</label>
                <input type="radio"
                    id="PUT"
                    name="method"
                    value="PUT"
                    onChange={onChange}
                    checked={selectedMethod === 'PUT'} />

                <label htmlFor="DELETE">DELETE</label>
                <input type="radio"
                    id="DELETE"
                    name="method"
                    value="DELETE"
                    onChange={onChange}
                    checked={selectedMethod === 'DELETE'} />
            </div>
            <button>Fetch API</button>

            <textarea placeholder="Raw JSON"
                name="request body"
                value={requestBody}
                onChange={onChange}></textarea>
        </form>
    </section>
);

RequestForm.propTypes = {
    urlInput: PropTypes.string.isRequired,
    selectedMethod: PropTypes.string.isRequired,
    requestBody: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}

export default RequestForm;
