import React from "react";

export const MortgageForm = ({ mortgageAmt, rate, handleInputChange, errors }) => {
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
    </div>
  )
}