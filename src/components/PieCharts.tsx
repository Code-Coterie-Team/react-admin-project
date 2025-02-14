import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { IListDataPieChart } from "../types/api";

function PieCharts({ dataPieChart, colorPieChart }: IListDataPieChart) {
  const renderLabel = (entry: any) => {
    const percentage = (
      (entry.value /
        dataPieChart.reduce((total, current) => total + current.value, 0)) *
      100
    ).toFixed(1);
    return `${entry.name} ${percentage}%`;
  };

  return (
    <div className="chart-container h-80">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <PieChart
          width={400}
          height={400}
        >
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={dataPieChart}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={renderLabel}
          >
            {dataPieChart.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colorPieChart[index % colorPieChart.length]}
              />
            ))}
          </Pie>

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
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ paddingTop: 20 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieCharts;
