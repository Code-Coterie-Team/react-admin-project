import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

function ChartChannelPerformance() {
  const data01 = [
    { name: "Organic Search", value: 4000 },
    { name: "Paid Search", value: 3000 },
    { name: "Direct", value: 2000 },
    { name: "Social Media", value: 2780 },
    { name: "Referral", value: 1890 },
    { name: "Email ", value: 2390 },
  ];

  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff8042",
    "#0088FE",
    "#00C49F",
  ];
  const renderLabel = (entry: { value: number; name: string }) => {
    const percentage = (
      (entry.value /
        data01.reduce((total, current) => total + current.value, 0)) *
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
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={renderLabel}
          >
            {data01.map((entry, index) => (
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

export default ChartChannelPerformance;
