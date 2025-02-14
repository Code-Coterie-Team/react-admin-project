import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

function ChartUserDemographics() {
  const data = [
    { name: "18-24", value: 20 },
    { name: "25-34", value: 30 },
    { name: "35-44", value: 25 },
    { name: "45-54", value: 15 },
    { name: "55+", value: 10 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];
  const renderLabel = (entry: any) => {
    const percentage = (
      (entry.value /
        data.reduce((total, current) => total + current.value, 0)) *
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
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={renderLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
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

export default ChartUserDemographics;
