import React, { useState } from "react";
import { MortgageForm } from "./MortgageForm";
import { validateInputs } from "../utilities/validate";
import { mockSummaryTableData } from "./__mocks__/summaryTableData";
import { SummaryTable } from "./SummaryTable";

export const Home = () => {
  const [mortgageAmt, setMortgageAmt] = useState(50000);
  const [rate, setRate] = useState(5);
  const [amortizationPeriod, setAmortizationPeriod] = useState(25);
  const [paymentFrequency, setPaymentFrequency] = useState(12);
  const [term, setTerm] = useState(5);
  const [errors, setErrors] = useState({
    mortgageAmt: "",
    rate: "",
    amortizationPeriod: "",
    paymentFrequency: "",
    term: "",
  });

  const handleInputChange = (e) => {
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
    switch (e.target.name) {
      case "mortgageAmt": {
        setMortgageAmt(e.target.value);
        break;
      }
      case "rate": {
        setRate(e.target.value);
        break;
      }
      case "amortizationPeriod": {
        setAmortizationPeriod(e.target.value);
        break;
      }
      case "paymentFrequency": {
        setPaymentFrequency(e.target.value);
        break;
      }
      case "term": {
        setTerm(e.target.value);
        break;
      }
      default:
        return;
    }
  };

  const handleSubmit = () => {
    const formErrors = validateInputs(
      mortgageAmt,
      rate,
      amortizationPeriod,
      term
    );

    setErrors({
      ...errors,
      ...formErrors,
    });

  };

  return (
    <div className="main-content-container">
      <MortgageForm
        mortgageAmt={mortgageAmt}
        rate={rate}
        amortizationPeriod={amortizationPeriod}
        paymentFrequency={paymentFrequency}
        term={term}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
      {<SummaryTable summaryTableData={mockSummaryTableData} />}
    </div>
  );
};
