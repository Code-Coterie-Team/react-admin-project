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
function ChartUserRetention() {

  const data = [
    { name: "Week 1", retention: 100 },
    { name: "Week 2", retention: 75 },
    { name: "Week 3", retention: 60 },
    { name: "Week 4", retention: 50 },
    { name: "Week 5", retention: 45 },
    { name: "Week 6", retention: 40 },
    { name: "Week 7", retention: null },
    { name: "Week 8", retention: 35 },
  ];
// تابع سفارشی برای نمایش نام‌ها در محور X
  const renderXAxisTick = (props: { x: any; y: any; payload: any; }) => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="middle"
          fill="#666"
        >
          {payload.value === "Week 7" ? "" : payload.value} {/* مخفی کردن Week 7 */}
        </text>
      </g>
    );
  };
  
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
          <XAxis dataKey="name" tick={renderXAxisTick} /> {/* استفاده از تابع سفارشی */}
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
            dataKey="retention"
            stroke="#8884d8" // رنگ خط
            strokeWidth={3} // پهنای خط
           
            fill="#fff"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartUserRetention
