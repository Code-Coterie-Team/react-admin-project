import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function ChartCustomerSegmentation() {
  const data = [
    {
      subject: "Engagement",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Loyalty",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Satisfaction",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Spend",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Frequency",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "Recen",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  return (
    <div className="chart-container h-80">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 150]}
          />
          <Radar
            name="Segment A"
            dataKey="A"
            stroke="#8884d8"
            fill="#8B5CF6"
            fillOpacity={0.6}
          />
          <Radar
            name="Segment B"
            dataKey="B"
            stroke="#82ca9d"
            fill="#10B981"
            fillOpacity={0.6}
          />
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
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartCustomerSegmentation;
