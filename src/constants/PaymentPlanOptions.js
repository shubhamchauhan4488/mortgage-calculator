export const paymentFrequencyOptions = [{
  key: "weekly",
  label: 'Weekly',
  value: 52
},
{
  key: "biweekly",
  label: 'Bi-Weekly (every 2 weeks)',
  value: 26
},
{
  key: "monthly",
  label: 'Monthly (12x per year)',
  value: 12
},
{
  key: "semimonthly",
  label: 'Semi-monthly (24x per year)',
  value: 24
}];

export const getTermOptions = () => {
  let termOptionsArray = [];
  for (let i = 1; i <= 30; i++) {
    termOptionsArray.push({
      label: `${i}`,
      value: i
    })
  }
  return termOptionsArray;
}