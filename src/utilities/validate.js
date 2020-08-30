export const validateInputs = (
  mortgageAmt,
  rate,
  amortizationPeriod,
  term
) => ({
  mortgageAmt: validateMortgage(mortgageAmt),
  rate: validateRate(rate),
  amortizationPeriod: validateAmortizationPeriod(amortizationPeriod),
  term: validateTerm(amortizationPeriod, term),
});

export const validateMortgage = (value) => {
  if (parseInt(value) < 1000 || parseInt(value) > 10000000) {
    return "Amount should be greater than 999 and less than 9,999,999";
  } else {
    return "";
  }
};

export const validateRate = (value) => {
  if (parseFloat(value) > 0 && parseFloat(value) < 100) return "";
  return "Interest rate should be greater than 0 and less than 100";
};

export const validateAmortizationPeriod = (value) => {
  if (parseInt(value) > 0 && parseInt(value) <= 30) return "";
  return "Period should be miminum 1 year and maximum 30 years";
};

export const validateTerm = (amortizationPeriod, value) => {
  if (parseInt(value) > parseInt(amortizationPeriod)) {
    return "Term shoud be less than Amortization Period";
  } else {
    return "";
  }
};

export const hasErrors = (formErrors) => {
  let hasError = false
  for (const [key, value] of Object.entries(formErrors)) {
    if (value !== '') {
      hasError = true;
      break;
    }
  }
  return hasError
}