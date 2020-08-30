import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Home } from '../Home';

describe('Home', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Mortgage form child correctly', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('mortgage-form-container')).toBeInTheDocument();
  });
});
