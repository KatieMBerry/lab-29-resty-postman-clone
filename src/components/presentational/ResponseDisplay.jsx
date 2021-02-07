import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const ResponseDisplay = ({ display }) => (
    <pre>
        <ReactJson src={display} theme="monokai" />
    </pre>
);

ResponseDisplay.propTypes = {
    display: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
}

export default ResponseDisplay;
