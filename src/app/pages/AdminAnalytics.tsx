import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  FileCheck,
  Shield,
  Download,
  Calendar,
  BarChart3,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const revenueData = [
  { month: 'Oct', revenue: 185000, costs: 142000, profit: 43000 },
  { month: 'Nov', revenue: 198000, costs: 156000, profit: 42000 },
  { month: 'Dec', revenue: 235000, costs: 189000, profit: 46000 },
  { month: 'Jan', revenue: 262000, costs: 205000, profit: 57000 },
  { month: 'Feb', revenue: 295000, costs: 235000, profit: 60000 },
  { month: 'Mar', revenue: 348000, costs: 278000, profit: 70000 },
];

const userGrowthData = [
  { month: 'Oct', workers: 580, policies: 680 },
  { month: 'Nov', workers: 625, policies: 720 },
  { month: 'Dec', workers: 690, policies: 850 },
  { month: 'Jan', workers: 715, policies: 920 },
  { month: 'Feb', workers: 760, policies: 1050 },
  { month: 'Mar', workers: 795, policies: 1248 },
];

const disruptionImpact = [
  { type: 'Heavy Rain', claims: 112, payout: 47600, avgDuration: '3.5h' },
  { type: 'Poor AQI', claims: 95, payout: 36100, avgDuration: '4.2h' },
  { type: 'Area Curfew', claims: 68, payout: 23800, avgDuration: '6.1h' },
  { type: 'Extreme Heat', claims: 45, payout: 14400, avgDuration: '2.8h' },
];

const regionPerformance = [
  { region: 'Noida', workers: 185, revenue: 78500, claims: 52, profit: 18200, color: '#3b82f6' },
  { region: 'South Delhi', workers: 142, revenue: 62800, claims: 45, profit: 14500, color: '#22c55e' },
  { region: 'Gurgaon', workers: 128, revenue: 58200, claims: 41, profit: 13800, color: '#f59e0b' },
  { region: 'East Delhi', workers: 95, revenue: 42500, claims: 29, profit: 9800, color: '#8b5cf6' },
  { region: 'West Delhi', workers: 118, revenue: 52400, claims: 33, profit: 12200, color: '#ec4899' },
  { region: 'North Delhi', workers: 127, revenue: 53600, claims: 38, profit: 12500, color: '#06b6d4' },
];

const policyMetrics = [
  { metric: 'Retention Rate', value: '87%', change: '+5%', trend: 'up' },
  { metric: 'Avg Policy Value', value: '₹4,850', change: '+12%', trend: 'up' },
  { metric: 'Claim Approval Rate', value: '93%', change: '+3%', trend: 'up' },
  { metric: 'Customer Satisfaction', value: '4.6/5', change: '+0.3', trend: 'up' },
];

const cohortData = [
  { cohort: 'Jan 2024', month1: 100, month2: 92, month3: 85, month4: 82, month5: 80, month6: 78 },
  { cohort: 'Feb 2024', month1: 100, month2: 94, month3: 88, month4: 85, month5: 83, month6: 81 },
  { cohort: 'Mar 2024', month1: 100, month2: 95, month3: 90, month4: 87, month5: 85, month6: 0 },
];

export default function AdminAnalytics() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Analytics & Insights</h1>
          <p className="text-gray-600">Comprehensive platform analytics and performance metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹3.48L</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +18% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Net Profit</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹70K</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +16.7% margin
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Users</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">795</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% growth
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Policy Uptake</CardTitle>
            <Shield className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">157%</div>
            <p className="text-xs text-gray-500 mt-1">Policies per worker</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue & User Growth */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue & Profitability</CardTitle>
            <CardDescription>Monthly revenue, costs, and profit trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  fill="url(#colorRevenue)"
                  name="Revenue"
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stroke="#22c55e"
                  fill="url(#colorProfit)"
                  name="Profit"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>Workers and active policies over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="workers"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  name="Workers"
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="policies"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Policies"
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Disruption Impact */}
      <Card>
        <CardHeader>
          <CardTitle>Disruption Impact Analysis</CardTitle>
          <CardDescription>Claims and payouts by disruption type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Disruption Type</th>
                  <th className="text-right py-3 px-4">Total Claims</th>
                  <th className="text-right py-3 px-4">Total Payout</th>
                  <th className="text-right py-3 px-4">Avg Duration</th>
                  <th className="text-right py-3 px-4">Avg Payout</th>
                </tr>
              </thead>
              <tbody>
                {disruptionImpact.map((item) => (
                  <tr key={item.type} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <Badge variant="outline">{item.type}</Badge>
                    </td>
                    <td className="text-right py-3 px-4 font-medium">{item.claims}</td>
                    <td className="text-right py-3 px-4 text-green-600 font-semibold">
                      ₹{item.payout.toLocaleString()}
                    </td>
                    <td className="text-right py-3 px-4">{item.avgDuration}</td>
                    <td className="text-right py-3 px-4">
                      ₹{Math.round(item.payout / item.claims)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ResponsiveContainer width="100%" height={250} className="mt-6">
            <BarChart data={disruptionImpact}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="type" stroke="#888888" fontSize={12} />
              <YAxis stroke="#888888" fontSize={12} />
              <Tooltip />
              <Legend />
              <Bar dataKey="claims" fill="#3b82f6" name="Claims" radius={[4, 4, 0, 0]} />
              <Bar dataKey="payout" fill="#22c55e" name="Payout (₹)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Regional Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Regional Performance</CardTitle>
          <CardDescription>Performance metrics by geographic region</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regionPerformance.map((region) => (
              <div key={region.region} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{region.region}</h3>
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: region.color }}
                  />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Workers</span>
                    <span className="font-medium">{region.workers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Revenue</span>
                    <span className="font-medium text-green-600">₹{region.revenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Claims</span>
                    <span className="font-medium">{region.claims}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-gray-600">Profit</span>
                    <span className="font-semibold text-blue-600">₹{region.profit.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {policyMetrics.map((metric) => (
          <Card key={metric.metric}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">{metric.metric}</p>
                {metric.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
              </div>
              <div className="text-2xl font-bold mb-1">{metric.value}</div>
              <p
                className={`text-xs ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {metric.change} from last period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
