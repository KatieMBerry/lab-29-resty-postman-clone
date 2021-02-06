import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AllHistory from './AllHistory';

describe('AllHistory component', () => {
    afterEach(() => cleanup());
    it('renders AllHistory', () => {
        const { asFragment } = render(<AllHistory />);
        expect(asFragment()).toMatchSnapshot();
    });
});
