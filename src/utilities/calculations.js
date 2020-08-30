import { summaryCategories } from "../constants/SummaryCategories";

export const getMonthlyRateFromEAR = (rate) => {
  /** Canadian annual rate is compunded semi-annually => EAR */
  const effectiveAnnualRateFloat = Math.pow(1 + rate / 200, 2) - 1;
  const rateMonthyFloat = Math.pow(1 + effectiveAnnualRateFloat, 1 / 12) - 1;
  return rateMonthyFloat * 100;
};

const convertToFloat = x => {
  return Number.parseFloat(x).toFixed(2);
}

export const calculateMortage = (
  mortgageAmt,
  rate,
  amortizationPeriod,
  paymentFrequency,
  term
) => {
  const numberOfTermPayments = paymentFrequency * term;
  const numberOfTotalPayments = paymentFrequency * amortizationPeriod;
  const summaryTableData = [];
  const graphData = [];

  summaryTableData.push({
    category: summaryCategories.NUMBER_OF_PAYMENTS,
    term: numberOfTermPayments,
    amortization: numberOfTotalPayments,
  });

  graphData.push({
    name: "0",
    principal: mortgageAmt,
  });
  const monthlyRateFloat = getMonthlyRateFromEAR(rate) / 100;
  const frequencyfactoredRateFloat = monthlyRateFloat * (12 / paymentFrequency);

  const interestPayment = mortgageAmt * frequencyfactoredRateFloat;

  const payment =
    interestPayment /
    (1 - Math.pow(1 + frequencyfactoredRateFloat, -numberOfTotalPayments));

  summaryTableData.push({
    category: summaryCategories.MORTGAGE_PAYMENT,
    term: convertToFloat(payment),
    amortization: convertToFloat(payment),
  });
  const firstPrincipalPayment = payment - interestPayment;
  const numberOfTermPaymentsLeft = numberOfTermPayments - 1;
  let termPrincipalPaymentSum = firstPrincipalPayment;
  let termInterestPaymentSum = interestPayment;
  let endingBalance = mortgageAmt - firstPrincipalPayment;

  for (let i = 1; i <= numberOfTermPaymentsLeft; i++) {
    const nextInterestPayment = parseFloat(
      convertToFloat(endingBalance * frequencyfactoredRateFloat)
    );
    const nextPrincipalPayment = parseFloat(
      convertToFloat(payment - nextInterestPayment)
    );
    endingBalance =
      parseFloat(endingBalance) -
      parseFloat(payment) +
      parseFloat(nextInterestPayment);
    termInterestPaymentSum += nextInterestPayment;
    termPrincipalPaymentSum += nextPrincipalPayment;

    if (i % paymentFrequency === 0) {
      graphData.push({
        name: i.toString(),
        principal: parseFloat(
          (mortgageAmt - termPrincipalPaymentSum).toFixed(2)
        ),
      });
    }
  }

  summaryTableData.push({
    category: summaryCategories.PRINCIPAL_PAYMENTS,
    term: convertToFloat(termPrincipalPaymentSum),
    amortization: convertToFloat(mortgageAmt),
  });

  summaryTableData.push({
    category: summaryCategories.INTEREST_PAYMENTS,
    term: convertToFloat(termInterestPaymentSum),
    amortization: convertToFloat(numberOfTotalPayments * payment - mortgageAmt),
  });

  summaryTableData.push({
    category: summaryCategories.TOTAL_COST,
    term: convertToFloat(numberOfTermPayments * payment),
    amortization: convertToFloat(numberOfTotalPayments * payment),
  });

  for (let j = numberOfTermPayments; j <= numberOfTotalPayments; j++) {
    const nextInterestPayment = parseFloat(
      convertToFloat(endingBalance * frequencyfactoredRateFloat)
    );
    const nextPrincipalPayment = parseFloat(
      convertToFloat(payment - nextInterestPayment)
    );
    endingBalance =
      parseFloat(endingBalance) -
      parseFloat(payment) +
      parseFloat(nextInterestPayment);
    termInterestPaymentSum += nextInterestPayment;
    termPrincipalPaymentSum += nextPrincipalPayment;

    if (j % paymentFrequency === 0) {
      graphData.push({
        name: j.toString(),
        principal: parseFloat(
          (mortgageAmt - termPrincipalPaymentSum).toFixed(2) > 0
            ? (mortgageAmt - termPrincipalPaymentSum).toFixed(2)
            : 0
        ),
      });
    }
  }
  console.log("Summary Table Data", summaryTableData);
  console.log("Graph Data", graphData);
  return {
    summaryTableData,
    graphData,
    barData: [
      {
        totalCost: "Total Mortgage Cost",
        interest: parseFloat(
          (payment * numberOfTotalPayments - mortgageAmt).toFixed(2)
        ),
        principal: parseFloat(typeof (mortgageAmt) === 'float' ? mortgageAmt.toFixed(2) : mortgageAmt),
      },
    ],
  };
};
