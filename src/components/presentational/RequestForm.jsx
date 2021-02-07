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

            <label>GET</label>
            <input type="radio"
                name="method"
                value="GET"
                onChange={onChange}
                checked={selectedMethod === 'GET'} />

            <label>POST</label>
            <input type="radio"
                name="method"
                value="POST"
                onChange={onChange}
                checked={selectedMethod === 'POST'} />

            <label>PUT</label>
            <input type="radio"
                name="method"
                value="PUT"
                onChange={onChange}
                checked={selectedMethod === 'PUT'} />

            <label>DELETE</label>
            <input type="radio"
                name="method"
                value="DELETE"
                onChange={onChange}
                checked={selectedMethod === 'DELETE'} />

            <button>GO</button>

            <textarea placeholder="Raw JSON"
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
