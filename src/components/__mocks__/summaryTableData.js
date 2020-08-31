import { summaryCategories } from "../../constants/SummaryCategories";

export const mockSummaryTableData = [
  {
    amortization: 600,
    category: summaryCategories.NUMBER_OF_PAYMENTS,
    term: 120
  },
  {
    amortization: "319.73",
    category: summaryCategories.MORTGAGE_PAYMENT,
    term: "319.73"
  },
  {
    amortization: "100000.00",
    category: summaryCategories.PRINCIPAL_PAYMENTS,
    term: "10019.40"
  },
  {
    amortization: "91838.89",
    category: summaryCategories.INTEREST_PAYMENTS,
    term: "28348.20",
  },
  {
    amortization: "191838.89",
    category: summaryCategories.TOTAL_COST,
    term: "38367.78"
  }
]