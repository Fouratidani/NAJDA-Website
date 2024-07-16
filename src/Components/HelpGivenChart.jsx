
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', helpGiven: 300 },
  { name: 'Feb', helpGiven: 200 },
  { name: 'Mar', helpGiven: 500 },
  { name: 'Apr', helpGiven: 400 },
  { name: 'May', helpGiven: 600 },
  { name: 'Jun', helpGiven: 700 },
  { name: 'Jul', helpGiven: 800 },
  { name: 'Aug', helpGiven: 900 },
  { name: 'Sep', helpGiven: 1000 },
  { name: 'Oct', helpGiven: 1100 },
  { name: 'Nov', helpGiven: 1200 },
  { name: 'Dec', helpGiven: 1300 },
];

const HelpGivenChart = () => (
  <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="helpGiven" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default HelpGivenChart;
