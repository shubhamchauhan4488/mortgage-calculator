import React from 'react';
import { fireEvent, cleanup, render } from '@testing-library/react';
import { SummaryTable } from '../SummaryTable';
import { mockSummaryTableData } from '../__mocks__/summaryTableData';
import { Home } from '../Home';

describe('Summary Table', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { asFragment } = render(<SummaryTable summaryTableData={mockSummaryTableData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Summary table correct data should be rendered', () => {
    const { queryByTestId, getAllByText, getByText } = render(<Home />);
    const mortgageAmt = queryByTestId('mortgage-amt');
    const rateInput = queryByTestId('rate');
    const amortizatoinPeriodInput = queryByTestId('amortization-period');
    const paymentFrequencyInput = queryByTestId('payment-frequency');
    const termInput = queryByTestId('term');
    const calculateBtn = queryByTestId('calculate-btn');

    fireEvent.change(mortgageAmt, { target: { value: '100000' } });
    fireEvent.change(rateInput, { target: { value: '6' } });
    fireEvent.change(amortizatoinPeriodInput, { target: { value: '25' } });
    fireEvent.change(paymentFrequencyInput, { target: { value: '12' } });
    fireEvent.change(termInput, { target: { value: '5' } });
    fireEvent.click(calculateBtn);

    /** Term column figures */
    expect(getAllByText('639.81').length).toEqual(2)
    expect(getByText(/10163.47/)).toBeTruthy();
    expect(getByText(/28225.12/)).toBeTruthy();
    expect(getByText(/38388.40/)).toBeTruthy();

    /** Amortization column figures */
    expect(getByText(/100000.00/)).toBeTruthy();
    expect(getByText('91941.99')).toBeTruthy();
    expect(getByText('191941.99')).toBeTruthy();
  });

  it('Summary table should not be rendered in case of any error', () => {
    const { queryByTestId } = render(<Home />);
    const mortgageAmt = queryByTestId('mortgage-amt');
    const rateInput = queryByTestId('rate');
    const amortizatoinPeriodInput = queryByTestId('amortization-period');
    const paymentFrequencyInput = queryByTestId('payment-frequency');
    const termInput = queryByTestId('term');
    const calculateBtn = queryByTestId('calculate-btn');

    fireEvent.change(mortgageAmt, { target: { value: '1000000' } });
    fireEvent.change(rateInput, { target: { value: '105' } });
    fireEvent.change(amortizatoinPeriodInput, { target: { value: '25' } });
    fireEvent.change(paymentFrequencyInput, { target: { value: '12' } });
    fireEvent.change(termInput, { target: { value: '5' } });
    fireEvent.click(calculateBtn);
    expect(queryByTestId('summary-table')).not.toBeTruthy();
  });
});