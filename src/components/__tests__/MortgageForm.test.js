import React from 'react';
import { fireEvent, cleanup, render } from '@testing-library/react';
import { Home } from '../Home';

describe('Mortgage Form', () => {
  afterEach(cleanup);

  /** Mortgage amount */
  it('Mortgage amount should be rendered', async () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("mortgageAmt")).toBeTruthy();
  });

  it('Mortgage amount error should be rendered', async () => {
    const { queryByTestId, getByText } = render(<Home />);
    const mortgageAmt = queryByTestId('mortgageAmt')
    fireEvent.change(mortgageAmt, { target: { value: '999999999' } });
    fireEvent.blur(mortgageAmt);
    expect(getByText('Amount should be greater than 999 and less than 9,999,999')).toBeTruthy();
  });

  /** Rate */
  it('Rate should be rendered', async () => {
    const { getByTestId } = render(<Home />);
    const rateInput = getByTestId('rate')
    expect(rateInput).toBeTruthy();
    expect(rateInput.value).toBe('5');
  });

  it('Rate error should be rendered if invalid value is entered', async () => {
    const { getByTestId, getByText } = render(<Home />);
    const rateInput = getByTestId('rate')
    fireEvent.change(rateInput, { target: { value: '101' } });
    fireEvent.blur(rateInput);
    expect(getByText(/Interest rate should be greater than 0 and less than 100/)).toBeTruthy();
  });

  /** Amortization Period */
  it('Amortization Period should be rendered', async () => {
    const { getByTestId } = render(<Home />);
    const amortizationPeriod = getByTestId('amortizationPeriod')
    expect(amortizationPeriod).toBeTruthy();
    expect(amortizationPeriod.value).toBe('25');
  });

  it('Amortization Period error should be rendered if invalid value is entered', async () => {
    const { getByTestId, getByText } = render(<Home />);
    const amortizationPeriodInput = getByTestId('amortizationPeriod')
    fireEvent.change(amortizationPeriodInput, { target: { value: '31' } });
    fireEvent.blur(amortizationPeriodInput);
    expect(getByText(/maximum 30 years/)).toBeTruthy();
  });

  /** Payment Frequency */
  it('Payment Frequency should be rendered correctly', async () => {
    const { getByTestId } = render(<Home />);
    const paymentFrequencyInput = getByTestId('paymentFrequency')
    expect(paymentFrequencyInput).toBeTruthy();
    expect(paymentFrequencyInput.value).toBe('12');
  });

  it('Changing the value should change the value in select input', async () => {
    const { getByTestId } = render(<Home />);
    const paymentFrequencyInput = getByTestId('paymentFrequency')
    fireEvent.change(paymentFrequencyInput, { target: { value: '24' } });
    expect(paymentFrequencyInput.value).toBe('24');
  });

  /** Term */
  it('Term should be rendered correctly', async () => {
    const { getByTestId } = render(<Home />);
    const termInput = getByTestId('term')
    expect(termInput).toBeTruthy();
    expect(termInput.value).toBe('5');
  });

  it('Changing the term value should change the value in input', async () => {
    const { getByTestId } = render(<Home />);
    const termInput = getByTestId('paymentFrequency')
    fireEvent.change(termInput, { target: { value: '24' } });
    expect(termInput.value).toBe('24');
  });

  it('Term error should be rendered if invalid value is entered', async () => {
    const { getByTestId, getByText } = render(<Home />);
    const termInput = getByTestId('term')
    const amortizationInput = getByTestId('amortizationPeriod')
    fireEvent.change(amortizationInput, { target: { value: '24' } });
    fireEvent.change(termInput, { target: { value: '25' } });
    fireEvent.blur(termInput);
    expect(getByText(/Term shoud be less than Amortization Period/)).toBeTruthy();
  });
})