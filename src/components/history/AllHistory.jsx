import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const AllHistory = ({ historyList }) => {
    const historyData = historyList.map(listItem => (
        <li className="historyListItem"
            key={listItem.id}>
            <HistoryItem {...listItem} />
        </li>
    ));

    return (
        <ul data-testid="historyList">
            {historyData}
        </ul>
    );
}

AllHistory.propTypes = {
    historyList: PropTypes.arrayOf(
        PropTypes.shape({
            requestMethod: PropTypes.string.isRequired,
            urlInput: PropTypes.string.isRequired
        })
    )
}

export default HistoryItem;
