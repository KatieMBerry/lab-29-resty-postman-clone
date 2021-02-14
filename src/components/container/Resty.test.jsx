import React from 'react';
import { render } from '@testing-library/react';
import Resty from './Resty';

describe('Resty component', () => {
    it('renders Resty', () => {
        const { asFragment } = render(<Resty />);
        expect(asFragment()).toMatchSnapshot();
    });
});

