import React, { useState } from "react";
import { SummaryTable } from "./SummaryTable";
import { validateInputs, hasErrors } from "../utilities/validate";
import { calculateMortage } from "../utilities/calculations";
import { MortgageForm } from "./MortgageForm";

export const Home = () => {
  const [mortgageAmt, setMortgageAmt] = useState(50000);
  const [rate, setRate] = useState(5);
  const [amortizationPeriod, setAmortizationPeriod] = useState(25);
  const [paymentFrequency, setPaymentFrequency] = useState(12);
  const [term, setTerm] = useState(5);
  const [summaryTableData, setSummaryTableData] = useState(5);
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

  const calculate = () => {
    const { summaryTableData, graphData, barData } = calculateMortage(
      mortgageAmt,
      rate,
      amortizationPeriod,
      paymentFrequency,
      term
    );
    setSummaryTableData(summaryTableData);
  }

  const handleSubmit = () => {
    const formErrors = validateInputs(
      mortgageAmt,
      rate,
      amortizationPeriod,
      term
    );
    if (hasErrors(formErrors)) {
      setErrors({
        ...errors,
        ...formErrors,
      });
    } else {
      calculate();
    }
  };

  console.log("errors", errors);
  return (
    <div className="main-container">
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
      {summaryTableData?.length > 0 && !hasErrors(errors) && <SummaryTable summaryTableData={summaryTableData} />}
    </div>
  );
};
