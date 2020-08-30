import React, { useState } from "react";
import { MortgageForm } from "./MortgageForm";

export const Home = () => {
  const [mortgageAmt, setMortgageAmt] = useState(50000);
  const [rate, setRate] = useState(5);

  const [errors, setErrors] = useState({
    mortgageAmt: "",
    rate: "",
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
      default:
        return;
    }
  };

  return (
    <div className="main-content-container">
      <MortgageForm
        mortgageAmt={mortgageAmt}
        rate={rate}
        handleInputChange={handleInputChange}
        errors={errors}
      />
    </div>
  );
};
