import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

function ChartDailyOrders() {
  const data = [
    { name: "07/01", orders: 45 },
    { name: "07/02", orders: 52 },
    { name: "07/03", orders: 49 },
    { name: "07/04", orders: 60 },
    { name: "07/05", orders: 55 },
    { name: "07/06", orders: 58 },
    { name: "07/07", orders: 62 },
  ];


  return (
    <div className="chart-container h-80">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart
        
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
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
          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
          />
          <Line
            connectNulls
            type="monotone"
            dataKey="orders"
            stroke="#8884d8" // رنگ خط
            strokeWidth={3} // پهنای خط
           
            fill="#fff"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartDailyOrders;
