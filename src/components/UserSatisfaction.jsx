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

import jsonData from "../Data/aidata.json";

const UserSatisfaction = () => {

  const chart = jsonData.user_satisfaction.ratings;

  return (
    <ResponsiveContainer width="100%" height={500}>
      <p>Ratings</p>
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
        <XAxis dataKey="rating" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="count"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
          barSize={50}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserSatisfaction;
