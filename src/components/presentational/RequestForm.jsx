import React from 'react';
import PropTypes from 'prop-types';
import styles from './RequestForm.css';

const RequestForm = ({ handleUrlChange, handleMethodChange, handleRequestChange, handleSubmit }) => (
    <>
        <header>RESTY</header>
        <section>
            <form onSubmit={handleSubmit} className={styles.RequestForm}>
                <input type="text"
                    id="url"
                    placeholder="url"
                    name="url"
                    onChange={handleUrlChange} />

                <div>

                    <input type="radio"
                        id="GET"
                        name="method"
                        value="GET"
                        onChange={handleMethodChange} />
                    <label htmlFor="GET">GET</label>


                    <input type="radio"
                        id="POST"
                        name="method"
                        value="POST"
                        onChange={handleMethodChange} />
                    <label htmlFor="POST">POST</label>


                    <input type="radio"
                        id="PUT"
                        name="method"
                        value="PUT"
                        onChange={handleMethodChange} />
                    <label htmlFor="PUT">PUT</label>


                    <input type="radio"
                        id="DELETE"
                        name="method"
                        value="DELETE"
                        onChange={handleMethodChange} />
                    <label htmlFor="DELETE">DELETE</label>

                </div>
                <button>Fetch API</button>

                <textarea placeholder="Raw JSON"
                    id="request"
                    type="text"
                    onChange={handleRequestChange}></textarea>
            </form>
        </section>
    </>
);

RequestForm.propTypes = {
    handleUrlChange: PropTypes.func.isRequired,
    handleMethodChange: PropTypes.func.isRequired,
    handleRequestChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default RequestForm;
