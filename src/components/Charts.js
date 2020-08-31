import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  Legend,
} from "recharts";
import { colors } from "../globals/theme";

export const Charts = (props) => {
  return (
    <div className="container-fluid">
      <h2 className="diagram-heading">Payment Diagrams</h2>
      <div className="row justify-content-center justify-content-md-around mb-3 mt-3">
        <AreaChart
          className='chart-container'
          width={500}
          height={250}
          data={props.graphData}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.PURPLE} stopOpacity={0.8} />
              <stop offset="95%" stopColor={colors.PURPLE} stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="numberOfPayments" tick={{ stroke: colors.PRIMARY }} />
          <YAxis tick={{ stroke: colors.PRIMARY }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="principal"
            stroke={colors.PURPLE}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="numberOfPayments"
            stroke={colors.LIGHT_GREEN}
            fillOpacity={0}
            fill="url(#colorPv)"
          />
        </AreaChart>

        <BarChart
          className='chart-container'
          width={300}
          height={250}
          data={props.barData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="totalCost" tick={{ stroke: colors.PRIMARY }} />
          <YAxis tick={{ stroke: colors.PRIMARY }} />
          <Tooltip />
          <Legend wrapperStyle={{ color: "white" }} />
          <Bar dataKey="principal" fill={colors.PURPLE} />
          <Bar dataKey="interest" fill={colors.LIGHT_GREEN} />
        </BarChart>
      </div>
    </div>
  );
};
