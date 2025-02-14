import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { IListDataLineChart } from "../types/api";
function LineCharts({ dataLineChart, legendName }: IListDataLineChart) {
  return (
    <div className="chart-container h-80">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart
          data={dataLineChart}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={3}
            activeDot={{ r: 8, fill: "#6366f1" }}
            dot={{ r: 8, fill: "#6366f1" }}
          />
          <CartesianGrid
            stroke="#e5e5e5"
            strokeDasharray="5 5"
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              borderRadius: "5px",
              borderColor: "#5c6877",
              padding: "10px",
              opacity: "80%",
            }}
            labelStyle={{
              color: "white",
            }}
            itemStyle={{
              color: "white",
            }}
          />
          {legendName === "" ? (
            ""
          ) : (
            <Legend
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              payload={[
                {
                  value: legendName,
                  type: "line",
                  id: "ID1",
                  color: "#8884d8",
                },
              ]}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineCharts;
