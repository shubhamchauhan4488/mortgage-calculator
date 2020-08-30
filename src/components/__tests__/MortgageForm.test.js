import React from 'react';
import { fireEvent, cleanup, render } from '@testing-library/react';
import { Home } from '../Home';
import { mockMortgageFormProps } from '../__mocks__/mortgageFormInput';
import { MortgageForm } from '../MortgageForm';

describe('Mortgage', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { asFragment } = render(<MortgageForm {...mockMortgageFormProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Mortgage amount should be rendered', async () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("mortgage-amt")).toBeTruthy();
  });

  it('Mortgage amount error should be rendered', async () => {
    const { getByTestId, queryByTestId, getByText } = render(<Home />);
    const mortgageAmt = queryByTestId('mortgage-amt');
    const calculateBtn = getByTestId('calculate-btn');

    fireEvent.change(mortgageAmt, { target: { value: '999999999' } });
    fireEvent.click(calculateBtn);
    expect(getByText('Amount should be greater than 999 and less than 9,999,999')).toBeTruthy();
  });

  it('Rate should be rendered', async () => {
    const { getByTestId } = render(<Home />);
    const rateInput = getByTestId('rate')
    expect(rateInput).toBeTruthy();
    expect(rateInput.value).toBe('5');
  });

  it('Rate error should be rendered if invalid value is entered', async () => {
    const { getByTestId, getByText } = render(<Home />);
    const rateInput = getByTestId('rate');
    const calculateBtn = getByTestId('calculate-btn');

    fireEvent.change(rateInput, { target: { value: '101' } });
    fireEvent.click(calculateBtn);
    expect(getByText(/Interest rate should be greater than 0 and less than 100/)).toBeTruthy();
  });

  it('Amortization Period should be rendered', async () => {
    const { getByTestId } = render(<Home />);
    const amortizationPeriod = getByTestId('amortization-period')
    expect(amortizationPeriod).toBeTruthy();
    expect(amortizationPeriod.value).toBe('25');
  });

  it('Amortization Period error should be rendered if invalid value is entered', async () => {
    const { getByTestId, getByText } = render(<Home />);
    const amortizationPeriodInput = getByTestId('amortization-period');
    const calculateBtn = getByTestId('calculate-btn');

    fireEvent.change(amortizationPeriodInput, { target: { value: '31' } });
    fireEvent.click(calculateBtn);
    expect(getByText(/maximum 30 years/)).toBeTruthy();
  });

  it('Payment Frequency should be rendered correctly', async () => {
    const { getByTestId } = render(<Home />);
    const paymentFrequencyInput = getByTestId('payment-frequency');
    expect(paymentFrequencyInput).toBeTruthy();
    expect(paymentFrequencyInput.value).toBe('12');
  });

  it('Changing the value should change the value in select input', async () => {
    const { getByTestId } = render(<Home />);
    const paymentFrequencyInput = getByTestId('payment-frequency')
    fireEvent.change(paymentFrequencyInput, { target: { value: '24' } });
    expect(paymentFrequencyInput.value).toBe('24');
  });

  it('Term should be rendered correctly', async () => {
    const { getByTestId } = render(<Home />);
    const termInput = getByTestId('term')
    expect(termInput).toBeTruthy();
    expect(termInput.value).toBe('5');
  });

  it('Changing the term value should change the value in input', async () => {
    const { getByTestId } = render(<Home />);
    const termInput = getByTestId('payment-frequency')
    fireEvent.change(termInput, { target: { value: '24' } });
    expect(termInput.value).toBe('24');
  });

  it('Term error should be rendered if invalid value is entered', async () => {
    const { getByTestId, getByText } = render(<Home />);
    const termInput = getByTestId('term');
    const amortizationInput = getByTestId('amortization-period');
    const calculateBtn = getByTestId('calculate-btn');

    fireEvent.change(amortizationInput, { target: { value: '24' } });
    fireEvent.change(termInput, { target: { value: '25' } });
    fireEvent.click(calculateBtn);
    expect(getByText(/Term shoud be less than Amortization Period/)).toBeTruthy();
  });
})