import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
function ChartSalesTrend() {
  const data = [

    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4500 },
    { name: "May", sales: 6000 },
    { name: "Jun", sales: 5500 },
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
            stroke="#8884d8" // رنگ خط
            strokeWidth={3} // پهنای خط
            activeDot={{ r: 8, fill: "#6366f1" }}
            dot={{ r: 8, fill: "#6366f1" }} // دایره اصلی
          />
          <CartesianGrid
            stroke="#e5e5e5"
            strokeDasharray="5 5"
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
               contentStyle={{
                backgroundColor: "#333", // پس‌زمینه تیره
                borderRadius: "5px",
                borderColor:"#5c6877",
                padding: "10px",
                opacity:"80%",
              }}
              labelStyle={{
                color: "white", // رنگ سفید برای برچسب
              }}
              itemStyle={{
                color: "white", // رنگ سفید برای متن مقادیر
              }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartSalesTrend;
