import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ChartUserGrowth() {
  const data = [
    { name: "Jan", sales: 1000 },
    { name: "Feb", sales: 1500 },
    { name: "Mar", sales: 2000 },
    { name: "Apr", sales: 3000 },
    { name: "May", sales: 4000 },
    { name: "Jun", sales: 5000 },
  ];

  return (
    <div className="chart-container h-80">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            strokeWidth={3}
            activeDot={{ r: 8, fill: "#6366f1" }}
            dot={{ r: 8, fill: "#6366f1" }}
            strokeDasharray="0 0"
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
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartUserGrowth;
