import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import {
  Users,
  FileCheck,
  AlertTriangle,
  DollarSign,
  TrendingUp,
  Shield,
  MapPin,
  Activity,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
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

const claimsData = [
  { month: 'Oct', claims: 45, payouts: 67500 },
  { month: 'Nov', claims: 52, payouts: 78000 },
  { month: 'Dec', claims: 68, payouts: 102000 },
  { month: 'Jan', claims: 58, payouts: 87000 },
  { month: 'Feb', claims: 71, payouts: 106500 },
  { month: 'Mar', claims: 63, payouts: 94500 },
];

const disruptionsByRegion = [
  { region: 'North Delhi', count: 45 },
  { region: 'South Delhi', count: 38 },
  { region: 'East Delhi', count: 29 },
  { region: 'West Delhi', count: 33 },
  { region: 'Noida', count: 52 },
  { region: 'Gurgaon', count: 41 },
];

const riskDistribution = [
  { name: 'Low Risk', value: 420, color: '#22c55e' },
  { name: 'Medium Risk', value: 280, color: '#f59e0b' },
  { name: 'High Risk', value: 95, color: '#ef4444' },
];

const mockWorkers = [
  { id: 'W-001', name: 'Rajesh Kumar', policies: 12, claims: 3, riskScore: 'Low', status: 'Active' },
  { id: 'W-002', name: 'Amit Singh', policies: 8, claims: 5, riskScore: 'Medium', status: 'Active' },
  { id: 'W-003', name: 'Priya Sharma', policies: 15, claims: 2, riskScore: 'Low', status: 'Active' },
  { id: 'W-004', name: 'Vikram Patel', policies: 6, claims: 8, riskScore: 'High', status: 'Under Review' },
  { id: 'W-005', name: 'Neha Gupta', policies: 10, claims: 4, riskScore: 'Medium', status: 'Active' },
];

const mockClaims = [
  { id: 'CLM-145', worker: 'Rajesh Kumar', type: 'Heavy Rain', amount: 450, date: '2026-03-08', status: 'Approved' },
  { id: 'CLM-146', worker: 'Amit Singh', type: 'Poor AQI', amount: 380, date: '2026-03-08', status: 'Pending' },
  { id: 'CLM-147', worker: 'Priya Sharma', type: 'Area Curfew', amount: 520, date: '2026-03-07', status: 'Paid' },
  { id: 'CLM-148', worker: 'Vikram Patel', type: 'Heavy Rain', amount: 450, date: '2026-03-07', status: 'Flagged' },
  { id: 'CLM-149', worker: 'Neha Gupta', type: 'Poor AQI', amount: 320, date: '2026-03-06', status: 'Approved' },
];

const fraudAlerts = [
  { id: 'FRD-001', worker: 'Vikram Patel', issue: 'GPS Location Mismatch', severity: 'High', time: '2 hours ago' },
  { id: 'FRD-002', worker: 'Unknown', issue: 'Duplicate Claim Submission', severity: 'Medium', time: '5 hours ago' },
  { id: 'FRD-003', worker: 'Rohit Kumar', issue: 'Suspicious Activity Pattern', severity: 'Low', time: '1 day ago' },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Monitor and manage your parametric insurance platform</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Workers</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">795</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className="text-green-600">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Policies</CardTitle>
            <FileCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className="text-green-600">+8%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Claims Triggered</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">63</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Payouts</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹94,500</div>
            <p className="text-xs text-gray-500 mt-1">March 2026</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Claims & Payouts Trend</CardTitle>
            <CardDescription>Monthly overview of claims and payouts</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={claimsData}>
                <CartesianGrid key="grid" strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis key="xaxis" dataKey="month" stroke="#888888" fontSize={12} />
                <YAxis key="yaxis-left" yAxisId="left" stroke="#888888" fontSize={12} />
                <YAxis key="yaxis-right" yAxisId="right" orientation="right" stroke="#888888" fontSize={12} />
                <Tooltip key="tooltip" />
                <Legend key="legend" />
                <Bar key="bar-claims" yAxisId="left" dataKey="claims" fill="#3b82f6" name="Claims" radius={[4, 4, 0, 0]} />
                <Bar key="bar-payouts" yAxisId="right" dataKey="payouts" fill="#22c55e" name="Payouts (₹)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Distribution</CardTitle>
            <CardDescription>Worker risk score distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip key="tooltip" />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Disruptions by Region */}
      <Card>
        <CardHeader>
          <CardTitle>Disruptions by Region</CardTitle>
          <CardDescription>Geographic distribution of weather and pollution events</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={disruptionsByRegion} layout="vertical">
              <CartesianGrid key="grid" strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis key="xaxis" type="number" stroke="#888888" fontSize={12} />
              <YAxis key="yaxis" dataKey="region" type="category" stroke="#888888" fontSize={12} width={100} />
              <Tooltip key="tooltip" />
              <Bar key="bar" dataKey="count" fill="#f59e0b" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Tabs Section */}
      <Tabs defaultValue="workers" className="space-y-4">
        <TabsList>
          <TabsTrigger value="workers">Workers</TabsTrigger>
          <TabsTrigger value="claims">Claims</TabsTrigger>
          <TabsTrigger value="fraud">Fraud Detection</TabsTrigger>
        </TabsList>

        <TabsContent value="workers">
          <Card>
            <CardHeader>
              <CardTitle>Worker Management</CardTitle>
              <CardDescription>Registered workers and their activity</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Worker ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Total Policies</TableHead>
                    <TableHead>Claims Filed</TableHead>
                    <TableHead>Risk Score</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockWorkers.map((worker) => (
                    <TableRow key={worker.id}>
                      <TableCell className="font-medium">{worker.id}</TableCell>
                      <TableCell>{worker.name}</TableCell>
                      <TableCell>{worker.policies}</TableCell>
                      <TableCell>{worker.claims}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            worker.riskScore === 'Low'
                              ? 'border-green-500 text-green-700'
                              : worker.riskScore === 'Medium'
                              ? 'border-orange-500 text-orange-700'
                              : 'border-red-500 text-red-700'
                          }
                        >
                          {worker.riskScore}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={worker.status === 'Active' ? 'default' : 'secondary'}>
                          {worker.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="claims">
          <Card>
            <CardHeader>
              <CardTitle>Claims Monitoring</CardTitle>
              <CardDescription>Review and manage insurance claims</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Claim ID</TableHead>
                    <TableHead>Worker</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockClaims.map((claim) => (
                    <TableRow key={claim.id}>
                      <TableCell className="font-medium">{claim.id}</TableCell>
                      <TableCell>{claim.worker}</TableCell>
                      <TableCell>{claim.type}</TableCell>
                      <TableCell>₹{claim.amount}</TableCell>
                      <TableCell>{claim.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            claim.status === 'Paid'
                              ? 'default'
                              : claim.status === 'Approved'
                              ? 'secondary'
                              : 'outline'
                          }
                          className={
                            claim.status === 'Paid'
                              ? 'bg-green-100 text-green-700'
                              : claim.status === 'Approved'
                              ? 'bg-blue-100 text-blue-700'
                              : claim.status === 'Flagged'
                              ? 'border-red-500 text-red-700'
                              : ''
                          }
                        >
                          {claim.status === 'Paid' && <CheckCircle className="h-3 w-3 mr-1" />}
                          {claim.status === 'Pending' && <Clock className="h-3 w-3 mr-1" />}
                          {claim.status === 'Flagged' && <AlertTriangle className="h-3 w-3 mr-1" />}
                          {claim.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {claim.status === 'Pending' && (
                            <>
                              <Button variant="ghost" size="sm" className="text-green-600">
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-600">
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fraud">
          <Card>
            <CardHeader>
              <CardTitle>Fraud Detection Alerts</CardTitle>
              <CardDescription>AI-powered suspicious activity monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fraudAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-4 border-l-4 rounded-lg ${
                      alert.severity === 'High'
                        ? 'border-red-500 bg-red-50'
                        : alert.severity === 'Medium'
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-yellow-500 bg-yellow-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <AlertTriangle
                          className={`h-5 w-5 mt-0.5 ${
                            alert.severity === 'High'
                              ? 'text-red-600'
                              : alert.severity === 'Medium'
                              ? 'text-orange-600'
                              : 'text-yellow-600'
                          }`}
                        />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold">{alert.issue}</p>
                            <Badge
                              variant="outline"
                              className={
                                alert.severity === 'High'
                                  ? 'border-red-600 text-red-600'
                                  : alert.severity === 'Medium'
                                  ? 'border-orange-600 text-orange-600'
                                  : 'border-yellow-600 text-yellow-600'
                              }
                            >
                              {alert.severity}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            {alert.id} • Worker: {alert.worker} • {alert.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Investigate
                        </Button>
                        <Button size="sm" variant="ghost">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
