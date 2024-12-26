import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from "recharts";

function ChartSalesByCategory() {

  const data01 = [
    { name: "Electronics", value: 400 },
    { name: "Clothing", value: 300 },
    { name: "Home & Garden", value: 200 },
    { name: "Books", value: 100 },
    { name: "Others", value: 150 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];
  // تابع سفارشی برای نمایش متن کنار هر بخش
  const renderLabel = (entry) => {
    const percentage = ((entry.value / data01.reduce((total, current) => total + current.value, 0)) * 100).toFixed(1);
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
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={renderLabel}  // استفاده از تابع سفارشی برای نمایش متن
          >
            {data01.map((entry, index) => (
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

export default ChartSalesByCategory
