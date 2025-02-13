import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

function ChartOrderStatusDistribution() {
  const data = [
    { name: "Pending", value: 30 },
    { name: "Processing ", value: 45 },
    { name: "Shipped", value: 60 },
    { name: "Delivered", value: 120 },
  ];

  const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766"];
  const renderLabel = (entry:any) => {
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

export default ChartOrderStatusDistribution;
