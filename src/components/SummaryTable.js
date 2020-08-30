import React from "react";

export const SummaryTable = ({ summaryTableData }) => {

  return (
    <div className="container-fluid">
      <h2 className="summary-heading">Summary</h2>
      <div className="row justify-content-center align-items-center mb-3 mt-3">
        <div className="col-12 col-sm-10">
          <table
            id="summary-table"
            data-testid="summary-table"
            className="table table-striped"
          >
            <thead className="thead-dark">
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Term Figures</th>
                <th scope="col">Amortization Figures</th>
              </tr>
            </thead>
            <tbody>
              {summaryTableData.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.category}</th>
                  <td id={`term-${index}`} data-testid={`term-${index}`}>
                    {item.term}
                  </td>
                  <td
                    id={`amortization-${index}`}
                    data-testid={`amortization-${index}`}
                  >
                    {item.amortization}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

