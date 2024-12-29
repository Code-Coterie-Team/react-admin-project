import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

function ChartDailySalesTrend() {
  const data = [
    {
      name: "Mon",
      sales: 1000,
    },
    {
      name: "Tue",
      sales: 1200,
    },
    {
      name: "Wed",
      sales: 900,
    },
    {
      name: "Thu",
      sales: 1100,
    },
    {
      name: "Fri",
      sales: 1300,
    },
    {
      name: "Sat",
      sales: 1600,
    },
    {
      name: "Sun",
      sales: 1400,
    },
  ];

  return (
    <div className="chart-container h-80">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <BarChart
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
              backgroundColor: "#333", // پس‌زمینه تیره
              borderRadius: "5px",
              borderColor: "#5c6877",
              padding: "10px",
              opacity: "80%",
            }}
            labelStyle={{
              color: "white", // رنگ سفید برای برچسب
            }}
            itemStyle={{
              color: "white", // رنگ سفید برای متن مقادیر
            }}
          />
          <Legend />

          <Bar
            dataKey="sales"
            fill="#10B981"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartDailySalesTrend;
