import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

function ChartSalesByChannel() {
  const data = [
    {
      name: "Website",
      value: 45600,
      fill: "#6366F1",
    },
    {
      name: "Mobile App",
      value: 38200,
      fill: "#8B5CF6",
    },
    {
      name: "Marketplace",
      value: 29800,
      fill: "#EC4899",
    },
    {
      name: "Social Media",
      value: 18700,
      fill: "#10B981",
    },
  ];

  return (
    <div className="chart-container h-80">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, "dataMax + 10000"]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              borderRadius: "5px",
              borderColor: "#5c6877",
              padding: "10px",
              opacity: "80%",
            }}
            labelStyle={{
              color: "white",
            }}
            itemStyle={{
              color: "white",
            }}
          />

          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              paddingTop: "10px",
            }}
          />

          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartSalesByChannel;
