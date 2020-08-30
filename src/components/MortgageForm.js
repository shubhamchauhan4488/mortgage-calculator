import React from "react";
import { paymentFrequencyOptions, getTermOptions } from "../constants/PaymentPlanOptions";

export const MortgageForm = ({ mortgageAmt, rate, amortizationPeriod, paymentFrequency, term, handleInputChange, errors }) => {
  return (
    <div id="mortgage-form-container" data-testid="mortgage-form-container" className="jumbotron no-gutters col-12 col-sm-6 mt-3 py-5">
      <div className="row align-items-center mb-3">
        <div className="col">
          <label htmlFor="basic-url">Mortgage Amount</label>
        </div>
        <div className="col">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              id="mortgageAmt"
              type="number"
              className="form-control"
              name="mortgageAmt"
              aria-label="Amount (to the nearest dollar)"
              placeholder="Value nearest to dollar amount"
              value={mortgageAmt}
              onChange={handleInputChange}
            />
            <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row align-items-center mb-3 align-items-center mb-3">
        <div className="col">
          <label htmlFor="interestRate">Interest Rate</label>
        </div>
        <div className="col">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">%</span>
            </div>
            <input
              id="rate"
              type="number"
              className="form-control"
              name="rate"
              aria-label="Interest Rate"
              placeholder="Annual Interest Rate"
              value={rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="row align-items-center mb-3">
        <div className="col-12 col-sm-6">
          <label htmlFor="amortizationPeriod">Amortization Period</label>
        </div>
        <div className="col-12 col-sm-6">
          <input
            id="amortizationPeriod"
            data-testid="amortizationPeriod"
            type="number"
            className="form-control"
            name="amortizationPeriod"
            aria-label="Amortization Period"
            placeholder="Years"
            value={amortizationPeriod}
            onChange={handleInputChange}
            max={30}
            min={1}
          />
        </div>
      </div>

      <div className="row align-items-center mb-3">
        <div className="col-12 col-sm-6">
          <label htmlFor="paymentFrequency">Payment Frequency</label>
        </div>
        <div className="col-12 col-sm-6">
          <select
            name="paymentFrequency"
            id="paymentFrequency"
            data-testid="paymentFrequency"
            value={paymentFrequency}
            onChange={handleInputChange}
          >
            {paymentFrequencyOptions.map((option, index) => (
              <option id={index} value={option.value} key={index}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/** Amortisation Input */}
      <div className="row align-items-center mb-3">
        <div className="col-12 col-sm-6">
          <label htmlFor="term">Term</label>
        </div>
        <div className="col-12 col-sm-6">
          <select
            id="term"
            data-testid="term"
            name="term"
            value={term}
            onChange={handleInputChange}
          >
            {getTermOptions().map((option, index) => (
              <option id={index} value={option.value} key={index}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}