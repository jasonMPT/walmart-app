import { createFileRoute } from '@tanstack/react-router'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  { name: 'Page A', uv: 4300, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3100, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2300, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2378, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1389, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2139, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3429, pv: 4300, amt: 2100 }
];

export const Route = createFileRoute('/app/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  const title = 'Dashboard'

  return <ResponsiveContainer width="100%" height={600}>

    <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
  // return <div>Hello "/app/dashboard"!</div>
}
