import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RequestForm from './RequestForm';

describe('RequestForm component', () => {
    afterEach(() => cleanup());
    it('renders RequestForm', () => {
        const { asFragment } = render(<RequestForm
            onSubmit={jest.fn()}
            urlInput='my_url'
            onChange={jest.fn()}

            selectedMethod='GET'
            onChange={jest.fn()}

            requestBody='my_json'
            onChange={jest.fn()}
        />);

        expect(asFragment()).toMatchSnapshot();
    })
})
