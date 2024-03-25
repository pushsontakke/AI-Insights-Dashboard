import jsonData from "../Data/aidata.json";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



export default function CategoryDistribution() {
  const chart = Object.entries(jsonData.category_distribution).map(
    ([key, value]) => ({
      name: key,
      value: value,
    })
  );

  return (
  
      <ResponsiveContainer width="100%" height={500}>
        <p>Category distribution</p>
        <BarChart
          width={500}
          height={300}
          data={chart}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            barSize={50}
          />
        </BarChart>
      </ResponsiveContainer>
  );
}
