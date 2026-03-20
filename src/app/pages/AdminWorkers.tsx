import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Users,
  Search,
  Filter,
  Download,
  Eye,
  MoreVertical,
  UserCheck,
  UserX,
  TrendingUp,
  TrendingDown,
  MapPin,
  Briefcase,
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
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
} from 'recharts';

const workerGrowthData = [
  { month: 'Oct', workers: 580 },
  { month: 'Nov', workers: 625 },
  { month: 'Dec', workers: 690 },
  { month: 'Jan', workers: 715 },
  { month: 'Feb', workers: 760 },
  { month: 'Mar', workers: 795 },
];

const platformDistribution = [
  { platform: 'Swiggy', count: 340 },
  { platform: 'Zomato', count: 285 },
  { platform: 'Dunzo', count: 95 },
  { platform: 'Uber Eats', count: 75 },
];

const allWorkers = [
  {
    id: 'W-001',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    platform: 'Swiggy',
    location: 'Noida, UP',
    joined: '2024-01-15',
    policies: 12,
    claims: 3,
    totalPayout: 2850,
    riskScore: 'Low',
    status: 'Active',
    verified: true,
  },
  {
    id: 'W-002',
    name: 'Amit Singh',
    email: 'amit.singh@example.com',
    phone: '+91 98765 43211',
    platform: 'Zomato',
    location: 'South Delhi',
    joined: '2024-01-20',
    policies: 8,
    claims: 5,
    totalPayout: 3200,
    riskScore: 'Medium',
    status: 'Active',
    verified: true,
  },
  {
    id: 'W-003',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43212',
    platform: 'Swiggy',
    location: 'Gurgaon, HR',
    joined: '2024-02-01',
    policies: 15,
    claims: 2,
    totalPayout: 1800,
    riskScore: 'Low',
    status: 'Active',
    verified: true,
  },
  {
    id: 'W-004',
    name: 'Vikram Patel',
    email: 'vikram.patel@example.com',
    phone: '+91 98765 43213',
    platform: 'Dunzo',
    location: 'North Delhi',
    joined: '2024-02-10',
    policies: 6,
    claims: 8,
    totalPayout: 5100,
    riskScore: 'High',
    status: 'Under Review',
    verified: true,
  },
  {
    id: 'W-005',
    name: 'Neha Gupta',
    email: 'neha.gupta@example.com',
    phone: '+91 98765 43214',
    platform: 'Zomato',
    location: 'East Delhi',
    joined: '2024-02-15',
    policies: 10,
    claims: 4,
    totalPayout: 2950,
    riskScore: 'Medium',
    status: 'Active',
    verified: true,
  },
  {
    id: 'W-006',
    name: 'Suresh Reddy',
    email: 'suresh.reddy@example.com',
    phone: '+91 98765 43215',
    platform: 'Swiggy',
    location: 'West Delhi',
    joined: '2024-02-20',
    policies: 7,
    claims: 3,
    totalPayout: 2100,
    riskScore: 'Low',
    status: 'Active',
    verified: true,
  },
  {
    id: 'W-007',
    name: 'Anjali Verma',
    email: 'anjali.verma@example.com',
    phone: '+91 98765 43216',
    platform: 'Uber Eats',
    location: 'Noida, UP',
    joined: '2024-03-01',
    policies: 5,
    claims: 1,
    totalPayout: 850,
    riskScore: 'Low',
    status: 'Active',
    verified: false,
  },
  {
    id: 'W-008',
    name: 'Deepak Yadav',
    email: 'deepak.yadav@example.com',
    phone: '+91 98765 43217',
    platform: 'Zomato',
    location: 'Gurgaon, HR',
    joined: '2024-03-05',
    policies: 9,
    claims: 6,
    totalPayout: 4200,
    riskScore: 'High',
    status: 'Active',
    verified: true,
  },
];

export default function AdminWorkers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredWorkers = allWorkers.filter((worker) => {
    const matchesSearch =
      worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      selectedFilter === 'all' ||
      (selectedFilter === 'active' && worker.status === 'Active') ||
      (selectedFilter === 'review' && worker.status === 'Under Review') ||
      (selectedFilter === 'verified' && worker.verified) ||
      (selectedFilter === 'unverified' && !worker.verified);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Worker Management</h1>
        <p className="text-gray-600">Manage and monitor registered delivery workers</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Workers</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">795</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Workers</CardTitle>
            <UserCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">753</div>
            <p className="text-xs text-gray-500 mt-1">94.7% of total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Policies/Worker</CardTitle>
            <Shield className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9.2</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +5% this month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Under Review</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-gray-500 mt-1">5.3% of total</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Worker Growth</CardTitle>
            <CardDescription>Monthly worker registration trend</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={workerGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="workers"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Total Workers"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Platform Distribution</CardTitle>
            <CardDescription>Workers by delivery platform</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={platformDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="platform" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Bar dataKey="count" fill="#22c55e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Worker Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>All Workers</CardTitle>
              <CardDescription>Complete list of registered workers</CardDescription>
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
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, ID, or email..."
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
                variant={selectedFilter === 'review' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('review')}
              >
                Under Review
              </Button>
              <Button
                variant={selectedFilter === 'verified' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('verified')}
              >
                Verified
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Worker ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Platform</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Policies</TableHead>
                  <TableHead>Claims</TableHead>
                  <TableHead>Total Payout</TableHead>
                  <TableHead>Risk</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredWorkers.map((worker) => (
                  <TableRow key={worker.id}>
                    <TableCell className="font-medium">{worker.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{worker.name}</p>
                        <p className="text-sm text-gray-500">{worker.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{worker.platform}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="h-3 w-3 text-gray-400" />
                        {worker.location}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{worker.joined}</TableCell>
                    <TableCell>{worker.policies}</TableCell>
                    <TableCell>{worker.claims}</TableCell>
                    <TableCell>₹{worker.totalPayout.toLocaleString()}</TableCell>
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
                        {worker.verified && <CheckCircle className="h-3 w-3 mr-1" />}
                        {worker.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
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
              Showing {filteredWorkers.length} of {allWorkers.length} workers
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
