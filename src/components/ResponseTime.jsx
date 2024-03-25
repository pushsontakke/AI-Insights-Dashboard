import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import jsonData from "../Data/aidata.json";



const ResponseTime = () => {
  const daily = jsonData.response_times.day_wise;
  const weekly = jsonData.response_times.week_wise;

  return (
    <div style={{ width: "100%"}}>
      <p>Day wise</p>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={daily}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="average_time"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
      <p>Week wise</p>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={weekly}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="average_time"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResponseTime;