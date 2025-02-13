import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

function ChartCategoryDistribution() {
  const data = [
    { name: "Clothing", value: 3200 },
    { name: "Electronics", value: 4500 },
    { name: "Sports & Outdoors", value: 1900 },
    { name: "Books", value: 2100 },
    { name: "Home & Garden", value: 2800 },
  ];

  const COLORS = ["#8B5CF6", "#6366F1", "#F59E0B", "#10B981", "#EC4899"];

  const renderLabel = (entry: any) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const percentage = ((entry.value / total) * 100).toFixed(0);
    return `${entry.name}: ${percentage}%`;
  };

  return (
    <div className="h-80">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            label={renderLabel}
            labelLine={false}
            innerRadius={0}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
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
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartCategoryDistribution;
