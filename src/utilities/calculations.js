
export const getMonthlyRateFromEAR = (rate) => {
  /** Canadian annual rate is compunded semi-annually => EAR */
  const effectiveAnnualRateFloat = Math.pow(1 + rate / 200, 2) - 1;
  const rateMonthyFloat = Math.pow(1 + effectiveAnnualRateFloat, 1 / 12) - 1;
  return rateMonthyFloat * 100;
};