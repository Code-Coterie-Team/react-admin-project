import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LegendType,
} from "recharts";
import { IListAreaChart } from "../types/api";

function AreaCharts({
  dataListAreaCharts,
  legendValue,
  legendValuetow,
}: IListAreaChart) {
  return (
    <div className="chart-container lg:h-[400px] h-80">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <AreaChart
          data={dataListAreaCharts}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip
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
          /> */}
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const { name } = payload[0].payload; // مقدار name
                const value = payload[0].value; // مقدار value
                const valuetow = payload[1] ? payload[1].value : null; // مقدار valuetow

                return (
                  <div
                    style={{
                      backgroundColor: "#333",
                      borderRadius: "5px",
                      borderColor: "#5c6877",
                      padding: "10px",
                      opacity: "80%",
                    }}
                  >
                    <p style={{ color: "white" }}>{name}</p>
                    <p
                      style={{ color: "white" }}
                    >{`${legendValue}: ${value}`}</p>
                    {valuetow !== null && (
                      <p
                        style={{ color: "white" }}
                      >{`${legendValuetow}: ${valuetow}`}</p>
                    )}
                  </div>
                );
              }

              return null;
            }}
            labelStyle={{
              color: "white",
            }}
            itemStyle={{
              color: "white",
            }}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            payload={[
              {
                value: legendValue,
                type: "line" as LegendType,
                id: "ID1",
                color: "#8884d8",
              },
              ...(legendValuetow
                ? [
                    {
                      value: legendValuetow,
                      type: "line" as LegendType,
                      id: "ID2",
                      color: "#10B981",
                    },
                  ]
                : []), // اگر legendValuetow خالی نباشد، این مقدار اضافه می‌شود
            ]}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8B5CF6"
            fill="#8B5CF6"
            fillOpacity={0.3}
          />
          {legendValuetow === "" ? (
            ""
          ) : (
            <Area
              type="monotone"
              dataKey="valuetow"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.3}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AreaCharts;
