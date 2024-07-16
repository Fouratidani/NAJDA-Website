
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', helpProvided: 240 },
  { name: 'Feb', helpProvided: 139 },
  { name: 'Mar', helpProvided: 980 },
  { name: 'Apr', helpProvided: 390 },
  { name: 'May', helpProvided: 480 },
  { name: 'Jun', helpProvided: 380 },
  { name: 'Jul', helpProvided: 430 },
  { name: 'Aug', helpProvided: 450 },
  { name: 'Sep', helpProvided: 470 },
  { name: 'Oct', helpProvided: 500 },
  { name: 'Nov', helpProvided: 520 },
  { name: 'Dec', helpProvided: 550 },
];

const HelpProvidedChart = () => (
  <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="helpProvided" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default HelpProvidedChart;
