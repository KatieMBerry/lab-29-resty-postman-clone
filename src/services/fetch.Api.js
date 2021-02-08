export const fetchApi = (urlInput, selectedMethod, responseBody) => {
    if (selectedMethod !== 'GET') {
        return fetch(urlInput, {
            selectedMethod,
            responseBody
        })
            .then(res => res.json());
    }
    return fetch(urlInput)
        .then(res => res.json());
};
