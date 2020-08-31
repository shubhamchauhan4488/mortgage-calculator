import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Charts } from '../Charts';

describe('Summary Table', () => {
  afterEach(cleanup);
  const mockData = [
    {
      numberOfPayments: "0",
      principal: 50000
    },
    {
      numberOfPayments: "12",
      principal: 48872.5
    },
    {
      numberOfPayments: "24",
      principal: 47776.83
    },
    {
      numberOfPayments: "36",
      principal: 46625.68
    }
  ]

  it('renders correctly', () => {
    const { asFragment } = render(<Charts graphData={mockData} />);
    expect(asFragment()).toMatchSnapshot();
  });
})