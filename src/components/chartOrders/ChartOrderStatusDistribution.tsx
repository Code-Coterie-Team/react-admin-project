import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from "recharts";


function ChartOrderStatusDistribution() {
    const data = [
        { name: "Pending", value: 30 },
        { name: "Processing ", value: 45 },
        { name: "Shipped", value: 60 },
        { name: "Delivered", value: 120 },
      
        
       
      ];
    

    const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766"];
    // تابع سفارشی برای نمایش متن کنار هر بخش
    const renderLabel = (entry) => {
      const percentage = ((entry.value / data.reduce((total, current) => total + current.value, 0)) * 100).toFixed(1);
      return `${entry.name} ${percentage}%`;
    };

  return (
    <div className="chart-container h-80">
    <ResponsiveContainer
      width="100%"
      height="100%"
    >
      <PieChart
        width={400}
        height={400}
      >
          <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label={renderLabel}  // استفاده از تابع سفارشی برای نمایش متن
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
     
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
          layout="horizontal"         // برای نمایش افقی
          verticalAlign="bottom"       // برای قرار دادن در پایین
          align="center"               // برای وسط چین کردن
          wrapperStyle={{ paddingTop: 20 }} // کمی فاصله از نمودار
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
  )
}

export default ChartOrderStatusDistribution
