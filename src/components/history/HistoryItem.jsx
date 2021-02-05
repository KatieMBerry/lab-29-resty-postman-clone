import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ requestMethod, urlInput }) => (
    <div>
        <h6>{requestMethod}</h6>
        <p>{urlInput}</p>
    </div>
);

HistoryItem.propTypes = {
    requestMethod: PropTypes.string.isRequired,
    urlInput: PropTypes.string.isRequired
};

export default HistoryItem;
