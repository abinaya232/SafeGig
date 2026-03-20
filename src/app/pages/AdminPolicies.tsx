import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import {
  Shield,
  FileCheck,
  TrendingUp,
  DollarSign,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  CheckCircle,
  Clock,
  XCircle,
  Plus,
  Calendar,
  Users,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const policyTrendData = [
  { month: 'Oct', active: 680, expired: 120, revenue: 185000 },
  { month: 'Nov', active: 720, expired: 95, revenue: 198000 },
  { month: 'Dec', active: 850, expired: 140, revenue: 235000 },
  { month: 'Jan', active: 920, expired: 110, revenue: 262000 },
  { month: 'Feb', active: 1050, expired: 125, revenue: 295000 },
  { month: 'Mar', active: 1248, expired: 98, revenue: 348000 },
];

const coverageDistribution = [
  { range: '₹2k-3k', count: 245, color: '#3b82f6' },
  { range: '₹3k-5k', count: 520, color: '#22c55e' },
  { range: '₹5k-7k', count: 340, color: '#f59e0b' },
  { range: '₹7k+', count: 143, color: '#8b5cf6' },
];

const allPolicies = [
  {
    id: 'POL-2026-001',
    worker: 'Rajesh Kumar',
    workerId: 'W-001',
    coverageAmount: 5000,
    premium: 245,
    startDate: '2026-03-08',
    endDate: '2026-03-15',
    status: 'Active',
    claimsUsed: 2,
    claimsLimit: 10,
    utilizationPercent: 28,
  },
  {
    id: 'POL-2026-002',
    worker: 'Amit Singh',
    workerId: 'W-002',
    coverageAmount: 3500,
    premium: 172,
    startDate: '2026-03-07',
    endDate: '2026-03-14',
    status: 'Active',
    claimsUsed: 3,
    claimsLimit: 10,
    utilizationPercent: 45,
  },
  {
    id: 'POL-2026-003',
    worker: 'Priya Sharma',
    workerId: 'W-003',
    coverageAmount: 7000,
    premium: 343,
    startDate: '2026-03-09',
    endDate: '2026-03-16',
    status: 'Active',
    claimsUsed: 1,
    claimsLimit: 10,
    utilizationPercent: 12,
  },
  {
    id: 'POL-2026-004',
    worker: 'Vikram Patel',
    workerId: 'W-004',
    coverageAmount: 5000,
    premium: 285,
    startDate: '2026-03-06',
    endDate: '2026-03-13',
    status: 'Active',
    claimsUsed: 7,
    claimsLimit: 10,
    utilizationPercent: 82,
  },
  {
    id: 'POL-2026-005',
    worker: 'Neha Gupta',
    workerId: 'W-005',
    coverageAmount: 4000,
    premium: 196,
    startDate: '2026-03-08',
    endDate: '2026-03-15',
    status: 'Active',
    claimsUsed: 2,
    claimsLimit: 10,
    utilizationPercent: 35,
  },
  {
    id: 'POL-2026-006',
    worker: 'Suresh Reddy',
    workerId: 'W-006',
    coverageAmount: 6000,
    premium: 294,
    startDate: '2026-02-28',
    endDate: '2026-03-07',
    status: 'Expired',
    claimsUsed: 3,
    claimsLimit: 10,
    utilizationPercent: 42,
  },
  {
    id: 'POL-2026-007',
    worker: 'Anjali Verma',
    workerId: 'W-007',
    coverageAmount: 3000,
    premium: 147,
    startDate: '2026-03-09',
    endDate: '2026-03-16',
    status: 'Active',
    claimsUsed: 0,
    claimsLimit: 10,
    utilizationPercent: 0,
  },
  {
    id: 'POL-2026-008',
    worker: 'Deepak Yadav',
    workerId: 'W-008',
    coverageAmount: 8000,
    premium: 392,
    startDate: '2026-03-05',
    endDate: '2026-03-12',
    status: 'Active',
    claimsUsed: 5,
    claimsLimit: 10,
    utilizationPercent: 68,
  },
  {
    id: 'POL-2026-009',
    worker: 'Ravi Sharma',
    workerId: 'W-009',
    coverageAmount: 5000,
    premium: 245,
    startDate: '2026-03-01',
    endDate: '2026-03-08',
    status: 'Expired',
    claimsUsed: 2,
    claimsLimit: 10,
    utilizationPercent: 28,
  },
  {
    id: 'POL-2026-010',
    worker: 'Kavita Desai',
    workerId: 'W-010',
    coverageAmount: 4500,
    premium: 221,
    startDate: '2026-03-07',
    endDate: '2026-03-14',
    status: 'Pending',
    claimsUsed: 0,
    claimsLimit: 10,
    utilizationPercent: 0,
  },
];

export default function AdminPolicies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const activePolicies = allPolicies.filter((p) => p.status === 'Active');
  const expiredPolicies = allPolicies.filter((p) => p.status === 'Expired');
  const pendingPolicies = allPolicies.filter((p) => p.status === 'Pending');

  const filteredPolicies = allPolicies.filter((policy) => {
    const matchesSearch =
      policy.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.worker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.workerId.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      selectedFilter === 'all' ||
      (selectedFilter === 'active' && policy.status === 'Active') ||
      (selectedFilter === 'expired' && policy.status === 'Expired') ||
      (selectedFilter === 'pending' && policy.status === 'Pending');

    return matchesSearch && matchesFilter;
  });

  const totalRevenue = allPolicies
    .filter((p) => p.status === 'Active' || p.status === 'Expired')
    .reduce((sum, p) => sum + p.premium, 0);
  const avgCoverage =
    activePolicies.reduce((sum, p) => sum + p.coverageAmount, 0) / activePolicies.length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge className="bg-green-100 text-green-700">{status}</Badge>;
      case 'Expired':
        return <Badge variant="outline" className="text-gray-500">{status}</Badge>;
      case 'Pending':
        return <Badge className="bg-yellow-100 text-yellow-700">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Policy Management</h1>
        <p className="text-gray-600">Configure and manage insurance policies</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Policies</CardTitle>
            <Shield className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activePolicies.length}</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +18% from last week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Coverage</CardTitle>
            <FileCheck className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{Math.round(avgCoverage).toLocaleString()}</div>
            <p className="text-xs text-gray-500 mt-1">Per policy</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Expiring Soon</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {activePolicies.filter((p) => {
                const daysLeft = Math.floor(
                  (new Date(p.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                );
                return daysLeft <= 2;
              }).length}
            </div>
            <p className="text-xs text-gray-500 mt-1">Next 2 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Policy Trends</CardTitle>
            <CardDescription>Active policies and revenue over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={policyTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888888" fontSize={12} />
                <YAxis yAxisId="left" stroke="#888888" fontSize={12} />
                <YAxis yAxisId="right" orientation="right" stroke="#888888" fontSize={12} />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="active"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Active Policies"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="revenue"
                  stroke="#22c55e"
                  strokeWidth={2}
                  name="Revenue (₹)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Coverage Distribution</CardTitle>
            <CardDescription>Policies by coverage range</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={coverageDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ range, percent }) => `${range}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {coverageDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Policies Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>All Policies</CardTitle>
              <CardDescription>Complete list of insurance policies</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Policy
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by policy ID, worker name, or worker ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedFilter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('all')}
              >
                All
              </Button>
              <Button
                variant={selectedFilter === 'active' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('active')}
              >
                Active
              </Button>
              <Button
                variant={selectedFilter === 'expired' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('expired')}
              >
                Expired
              </Button>
              <Button
                variant={selectedFilter === 'pending' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('pending')}
              >
                Pending
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Policy ID</TableHead>
                  <TableHead>Worker</TableHead>
                  <TableHead>Coverage</TableHead>
                  <TableHead>Premium</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Claims Used</TableHead>
                  <TableHead>Utilization</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPolicies.map((policy) => (
                  <TableRow key={policy.id}>
                    <TableCell className="font-medium">{policy.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{policy.worker}</p>
                        <p className="text-sm text-gray-500">{policy.workerId}</p>
                      </div>
                    </TableCell>
                    <TableCell>₹{policy.coverageAmount.toLocaleString()}</TableCell>
                    <TableCell className="text-green-600 font-medium">
                      ₹{policy.premium}
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <p>{policy.startDate}</p>
                        <p className="text-gray-500">to {policy.endDate}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {policy.claimsUsed} / {policy.claimsLimit}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span>{policy.utilizationPercent}%</span>
                        </div>
                        <div className="w-20 bg-gray-200 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full ${
                              policy.utilizationPercent > 70
                                ? 'bg-red-500'
                                : policy.utilizationPercent > 40
                                ? 'bg-orange-500'
                                : 'bg-green-500'
                            }`}
                            style={{ width: `${policy.utilizationPercent}%` }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(policy.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between pt-4">
            <p className="text-sm text-gray-500">
              Showing {filteredPolicies.length} of {allPolicies.length} policies
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
