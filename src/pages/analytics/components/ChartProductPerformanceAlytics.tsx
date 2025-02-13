import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ChartProductPerformance() {
  const data = [
    {
      name: "Product A",
      sales: 4000,
      revenue: 2400,
      profit: 2400,
    },
    {
      name: "Product B",
      sales: 3000,
      revenue: 1398,
      profit: 2210,
    },
    {
      name: "Product C",
      sales: 2000,
      revenue: 9800,
      profit: 2290,
    },
    {
      name: "Product D",
      sales: 2780,
      revenue: 3908,
      profit: 2000,
    },
    {
      name: "Product E",
      sales: 1890,
      revenue: 4800,
      profit: 2181,
    },
  ];

  return (
    <div className="chart-container h-80">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
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
          <Legend />
          <Bar
            dataKey="sales"
            fill="#8B5CF6"
          />
          <Bar
            dataKey="revenue"
            fill="#10B981"
          />
          <Bar
            dataKey="profit"
            fill="#F59E0B"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartProductPerformance;
