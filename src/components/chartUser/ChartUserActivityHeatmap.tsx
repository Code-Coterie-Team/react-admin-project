import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ChartUserActivityHeatmap() {
  const data = [
    {
      name: "Mon",
      "0-4": 20,
      "4-8": 40,
      "8-12": 60,
      "12-16": 80,
      "16-20": 100,
      "20-24": 30,
    },
    {
      name: "Tue",
      "0-4": 30,
      "4-8": 50,
      "8-12": 70,
      "12-16": 90,
      "16-20": 110,
      "20-24": 40,
    },
    {
      name: "Wed",
      "0-4": 40,
      "4-8": 60,
      "8-12": 80,
      "12-16": 100,
      "16-20": 120,
      "20-24": 50,
    },
    {
      name: "Thu",
      "0-4": 50,
      "4-8": 70,
      "8-12": 90,
      "12-16": 100,
      "16-20": 130,
      "20-24": 60,
    },
    {
      name: "Fri",
      "0-4": 60,
      "4-8": 80,
      "8-12": 100,
      "12-16": 120,
      "16-20": 140,
      "20-24": 70,
    },
    {
      name: "Sat",
      "0-4": 70,
      "4-8": 50,
      "8-12": 110,
      "12-16": 130,
      "16-20": 150,
      "20-24": 80,
    },
    {
      name: "Sun",
      "0-4": 80,
      "4-8": 100,
      "8-12": 120,
      "12-16": 140,
      "16-20": 160,
      "20-24": 90,
    },
  ];

  return (
    <div className="chart-container h-80">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
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
              padding: "10px",
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
            dataKey="0-4"
            stackId="a"
            fill="#6366F1"
          />

          <Bar
            dataKey="4-8"
            stackId="a"
            fill="#8B5CF6"
          />
          <Bar
            dataKey="8-12"
            stackId="a"
            fill="#EC4899"
          />
          <Bar
            dataKey="12-16"
            stackId="a"
            fill="#10B981"
          />
          <Bar
            dataKey="16-20"
            stackId="a"
            fill="#F59E0B"
          />
          <Bar
            dataKey="20-24"
            stackId="a"
            fill="#3B82F6"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartUserActivityHeatmap;