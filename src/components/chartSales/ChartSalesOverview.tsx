import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function ChartSalesOverview() {

    const data = [
        { name: "Jan", sales: 4000 },
        { name: "Feb", sales: 3000 },
        { name: "Mar", sales: 5000 },
    
        { name: "Apr", sales: 4500 },
        { name: "May", sales: 6000 },
        { name: "Jun", sales: 5500 },
        { name: "Jul", sales: 7000 },
      ];

  return (
    <div  className="chart-container h-80">
        <ResponsiveContainer width="100%" height="100%">
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
          <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8B5CF6" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartSalesOverview
