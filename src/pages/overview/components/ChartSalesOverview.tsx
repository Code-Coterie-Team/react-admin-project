import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ChartSalesOverview() {
  const data = [
    { name: "Jul", sales: 4200 },
    { name: "Aug", sales: 3800 },
    { name: "Sep", sales: 5100 },
    { name: "Oct", sales: 4600 },
    { name: "Nov", sales: 5400 },
    { name: "Dec", sales: 7200 },
    { name: "Jan", sales: 6100 },
    { name: "Feb", sales: 5900 },
    { name: "Mar", sales: 6800 },
    { name: "Apr", sales: 6300 },
    { name: "May", sales: 7100 },
    { name: "Jun", sales: 7500 },
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
          <XAxis dataKey="name"

          />
          <YAxis/>
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

export default ChartSalesOverview;
