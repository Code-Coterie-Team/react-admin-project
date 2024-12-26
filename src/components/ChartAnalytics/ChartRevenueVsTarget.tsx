import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function ChartRevenueVsTarget() {
  const data = [
    { name: "Jan", revenue: 4000, target: 3800 },
    { name: "Feb", revenue: 3000, target: 3200 },
    { name: "Mar", revenue: 5000, target: 4500 },
    { name: "Apr", revenue: 4500, target: 4200 },
    { name: "May", revenue: 6000, target: 5500 },
    { name: "Jun", revenue: 5500, target: 5800 },
    { name: "Jul", revenue: 7000, target: 6500 },
  ];

  return (
    <div className="chart-container lg:h-[400px] h-80">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <AreaChart
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
           <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8B5CF6"
            fill="#8B5CF6"
            fillOpacity={0.3}
          />
          <Area
            type="monotone"
            dataKey="target"
            stroke="#10B981"
            fill="#10B981"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartRevenueVsTarget;
