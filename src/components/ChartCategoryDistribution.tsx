import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

function ChartCategoryDistribution() {
  //   const data = [
  //     { name: "Group A", value: 400 },
  //     { name: "Group B", value: 300 },
  //     { name: "Group C", value: 300 },
  //     { name: "Group D", value: 200 },
  //   ];

  //   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  // داده‌ها
  const data = [
    { name: "Clothing", value: 3200 },
    { name: "Electronics", value: 4500 },
    { name: "Sports & Outdoors", value: 1900 },
    { name: "Books", value: 2100 },
    { name: "Home & Garden", value: 2800 },
  ];

  // رنگ‌ها
  const COLORS = ["#8B5CF6", "#6366F1", "#F59E0B", "#10B981", "#EC4899"];

  // تابع برای محاسبه درصد
const renderLabel = (entry:any) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const percentage = ((entry.value / total) * 100).toFixed(0); // محاسبه درصد
    return `${entry.name}: ${percentage}%`; // فرمت برچسب
  };

  return (
    <div className="h-80">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        {/* <PieChart
          width={400}
          height={400}
        >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart> */}

        <PieChart>
          <Pie
            data={data}
            cx="50%" // مرکز x
           label={renderLabel} // استفاده از تابع برای برچسب
            labelLine={false} // حذف خطوط برچسب cy="50%" // مرکز y
            innerRadius={0} // شعاع داخلی (0 برای توپر)
            outerRadius={80} // شعاع خارجی
            fill="#8884d8"
            paddingAngle={0} // فاصله بین بخش‌ها
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              /> // رنگ هر بخش
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartCategoryDistribution;
