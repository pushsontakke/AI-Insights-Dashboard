import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import jsonData from "../Data/aidata.json";

const UserStatistics = () => {
  const Platform = Object.entries(jsonData.usage_statistics.by_platform).map(
    ([platform, value]) => ({
      platform: platform,
      value: value,
    })
  );
  const Country = Object.entries(jsonData.usage_statistics.by_country).map(
    ([country, value]) => ({
      country: country,
      value: value,
    })
  );

  return (
      <ResponsiveContainer width="100%" height={400}>
        <p>By Platform</p>
        <AreaChart
          width={500}
          height={400}
          data={Platform}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="platform" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
        <p>By Country</p>
        <AreaChart
          width={500}
          height={400}
          data={Country}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
  );
};

export default UserStatistics;