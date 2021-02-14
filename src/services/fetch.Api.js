global.fetch = require('node-fetch');

export const fetchApi = async (urlInput, selectedMethod, responseBody) => {
    if (selectedMethod !== 'GET') {
        return await fetch(`${urlInput}`,
            {
                selectedMethod: `${selectedMethod}`
            })
            .then(res => res.json());
    }
    return await fetch(`${urlInput}`, {
        selectedMethod: `${selectedMethod}`,
        responseBody: `${responseBody}`
    })
        .then(res => res.json());
};
