import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import {
  FileCheck,
  CheckCircle,
  Clock,
  XCircle,
  AlertTriangle,
  DollarSign,
  TrendingUp,
  Search,
  Filter,
  Download,
  Eye,
  CloudRain,
  Wind,
  MapPin,
  Calendar,
  User,
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

const claimsTrendData = [
  { month: 'Oct', total: 142, approved: 125, rejected: 17, avgTime: 2.8 },
  { month: 'Nov', total: 168, approved: 151, rejected: 17, avgTime: 2.5 },
  { month: 'Dec', total: 195, approved: 178, rejected: 17, avgTime: 2.2 },
  { month: 'Jan', total: 178, approved: 165, rejected: 13, avgTime: 2.1 },
  { month: 'Feb', total: 210, approved: 196, rejected: 14, avgTime: 1.9 },
  { month: 'Mar', total: 185, approved: 172, rejected: 13, avgTime: 1.8 },
];

const claimsByType = [
  { type: 'Heavy Rain', count: 112, avgAmount: 425 },
  { type: 'Poor AQI', count: 95, avgAmount: 380 },
  { type: 'Area Curfew', count: 68, avgAmount: 350 },
  { type: 'Extreme Heat', count: 45, avgAmount: 320 },
];

const allClaims = [
  {
    id: 'CLM-2026-145',
    worker: 'Rajesh Kumar',
    workerId: 'W-001',
    policyId: 'POL-2026-001',
    type: 'Heavy Rain',
    location: 'South Delhi',
    date: '2026-03-08',
    time: '14:30',
    amount: 450,
    status: 'Approved',
    submittedAt: '2026-03-08 14:45',
    reviewedAt: '2026-03-08 15:30',
    processingTime: '45 min',
    verificationScore: 98,
  },
  {
    id: 'CLM-2026-146',
    worker: 'Amit Singh',
    workerId: 'W-002',
    policyId: 'POL-2026-002',
    type: 'Poor AQI',
    location: 'Noida Sector 62',
    date: '2026-03-08',
    time: '11:15',
    amount: 380,
    status: 'Pending',
    submittedAt: '2026-03-08 11:30',
    reviewedAt: null,
    processingTime: 'In progress',
    verificationScore: 92,
  },
  {
    id: 'CLM-2026-147',
    worker: 'Priya Sharma',
    workerId: 'W-003',
    policyId: 'POL-2026-003',
    type: 'Area Curfew',
    location: 'Central Delhi',
    date: '2026-03-07',
    time: '09:00',
    amount: 520,
    status: 'Paid',
    submittedAt: '2026-03-07 09:20',
    reviewedAt: '2026-03-07 10:15',
    processingTime: '55 min',
    verificationScore: 95,
  },
  {
    id: 'CLM-2026-148',
    worker: 'Vikram Patel',
    workerId: 'W-004',
    policyId: 'POL-2026-004',
    type: 'Heavy Rain',
    location: 'Gurgaon',
    date: '2026-03-07',
    time: '16:45',
    amount: 450,
    status: 'Flagged',
    submittedAt: '2026-03-07 17:00',
    reviewedAt: '2026-03-07 17:30',
    processingTime: '30 min',
    verificationScore: 65,
  },
  {
    id: 'CLM-2026-149',
    worker: 'Neha Gupta',
    workerId: 'W-005',
    policyId: 'POL-2026-005',
    type: 'Poor AQI',
    location: 'East Delhi',
    date: '2026-03-06',
    time: '13:20',
    amount: 320,
    status: 'Approved',
    submittedAt: '2026-03-06 13:35',
    reviewedAt: '2026-03-06 14:50',
    processingTime: '1h 15min',
    verificationScore: 89,
  },
  {
    id: 'CLM-2026-150',
    worker: 'Suresh Reddy',
    workerId: 'W-006',
    policyId: 'POL-2026-006',
    type: 'Heavy Rain',
    location: 'West Delhi',
    date: '2026-03-05',
    time: '18:00',
    amount: 380,
    status: 'Paid',
    submittedAt: '2026-03-05 18:15',
    reviewedAt: '2026-03-05 19:00',
    processingTime: '45 min',
    verificationScore: 96,
  },
  {
    id: 'CLM-2026-151',
    worker: 'Anjali Verma',
    workerId: 'W-007',
    policyId: 'POL-2026-007',
    type: 'Extreme Heat',
    location: 'Noida',
    date: '2026-03-04',
    time: '15:30',
    amount: 320,
    status: 'Rejected',
    submittedAt: '2026-03-04 15:45',
    reviewedAt: '2026-03-04 16:30',
    processingTime: '45 min',
    verificationScore: 42,
  },
  {
    id: 'CLM-2026-152',
    worker: 'Deepak Yadav',
    workerId: 'W-008',
    policyId: 'POL-2026-008',
    type: 'Area Curfew',
    location: 'Gurgaon',
    date: '2026-03-03',
    time: '10:00',
    amount: 480,
    status: 'Paid',
    submittedAt: '2026-03-03 10:20',
    reviewedAt: '2026-03-03 11:10',
    processingTime: '50 min',
    verificationScore: 94,
  },
  {
    id: 'CLM-2026-153',
    worker: 'Ravi Sharma',
    workerId: 'W-009',
    policyId: 'POL-2026-009',
    type: 'Poor AQI',
    location: 'South Delhi',
    date: '2026-03-02',
    time: '12:45',
    amount: 400,
    status: 'Paid',
    submittedAt: '2026-03-02 13:00',
    reviewedAt: '2026-03-02 13:45',
    processingTime: '45 min',
    verificationScore: 91,
  },
  {
    id: 'CLM-2026-154',
    worker: 'Kavita Desai',
    workerId: 'W-010',
    policyId: 'POL-2026-010',
    type: 'Heavy Rain',
    location: 'Noida',
    date: '2026-03-01',
    time: '14:15',
    amount: 450,
    status: 'Approved',
    submittedAt: '2026-03-01 14:30',
    reviewedAt: '2026-03-01 15:15',
    processingTime: '45 min',
    verificationScore: 97,
  },
];

export default function AdminClaims() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const pendingClaims = allClaims.filter((c) => c.status === 'Pending');
  const approvedClaims = allClaims.filter((c) => c.status === 'Approved');
  const paidClaims = allClaims.filter((c) => c.status === 'Paid');
  const flaggedClaims = allClaims.filter((c) => c.status === 'Flagged');
  const rejectedClaims = allClaims.filter((c) => c.status === 'Rejected');

  const filteredClaims = allClaims.filter((claim) => {
    const matchesSearch =
      claim.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      claim.worker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      claim.workerId.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      selectedFilter === 'all' ||
      (selectedFilter === 'pending' && claim.status === 'Pending') ||
      (selectedFilter === 'approved' && claim.status === 'Approved') ||
      (selectedFilter === 'paid' && claim.status === 'Paid') ||
      (selectedFilter === 'flagged' && claim.status === 'Flagged');

    return matchesSearch && matchesFilter;
  });

  const totalPayout = [...paidClaims, ...approvedClaims].reduce((sum, c) => sum + c.amount, 0);
  const avgProcessingTime = 1.8;

  const getStatusBadge = (status: string, score?: number) => {
    switch (status) {
      case 'Paid':
        return (
          <Badge className="bg-green-100 text-green-700">
            <CheckCircle className="h-3 w-3 mr-1" />
            {status}
          </Badge>
        );
      case 'Approved':
        return (
          <Badge className="bg-blue-100 text-blue-700">
            <CheckCircle className="h-3 w-3 mr-1" />
            {status}
          </Badge>
        );
      case 'Pending':
        return (
          <Badge className="bg-yellow-100 text-yellow-700">
            <Clock className="h-3 w-3 mr-1" />
            {status}
          </Badge>
        );
      case 'Flagged':
        return (
          <Badge className="bg-red-100 text-red-700">
            <AlertTriangle className="h-3 w-3 mr-1" />
            {status}
          </Badge>
        );
      case 'Rejected':
        return (
          <Badge variant="outline" className="text-red-600 border-red-300">
            <XCircle className="h-3 w-3 mr-1" />
            {status}
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Claims Management</h1>
        <p className="text-gray-600">Review and process insurance claims</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Claims</CardTitle>
            <FileCheck className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allClaims.length}</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingClaims.length}</div>
            <p className="text-xs text-gray-500 mt-1">Awaiting action</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Flagged</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{flaggedClaims.length}</div>
            <p className="text-xs text-gray-500 mt-1">Need attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Payout</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalPayout.toLocaleString()}</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Time</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgProcessingTime}h</div>
            <p className="text-xs text-green-600 mt-1">-15% faster</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Claims Trend</CardTitle>
            <CardDescription>Monthly claims approval rate</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={claimsTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Legend />
                <Bar dataKey="approved" fill="#22c55e" name="Approved" radius={[4, 4, 0, 0]} />
                <Bar dataKey="rejected" fill="#ef4444" name="Rejected" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Claims by Type</CardTitle>
            <CardDescription>Distribution and average amounts</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={claimsByType}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="type" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#3b82f6" name="Count" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Claims Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>All Claims</CardTitle>
              <CardDescription>Review and manage insurance claims</CardDescription>
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
                placeholder="Search by claim ID, worker name..."
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
                variant={selectedFilter === 'pending' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('pending')}
              >
                Pending ({pendingClaims.length})
              </Button>
              <Button
                variant={selectedFilter === 'approved' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('approved')}
              >
                Approved
              </Button>
              <Button
                variant={selectedFilter === 'flagged' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('flagged')}
              >
                Flagged ({flaggedClaims.length})
              </Button>
              <Button
                variant={selectedFilter === 'paid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('paid')}
              >
                Paid
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Claim ID</TableHead>
                  <TableHead>Worker</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>AI Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClaims.map((claim) => (
                  <TableRow key={claim.id}>
                    <TableCell className="font-medium">{claim.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{claim.worker}</p>
                        <p className="text-sm text-gray-500">{claim.workerId}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{claim.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="h-3 w-3 text-gray-400" />
                        {claim.location}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <p>{claim.date}</p>
                        <p className="text-gray-500">{claim.time}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold text-green-600">
                      ₹{claim.amount}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            claim.verificationScore >= 90
                              ? 'bg-green-500'
                              : claim.verificationScore >= 70
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                          }`}
                        />
                        <span className="text-sm">{claim.verificationScore}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(claim.status, claim.verificationScore)}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {claim.status === 'Pending' && (
                          <>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-green-600 hover:text-green-700"
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-700"
                            >
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
          </div>

          <div className="flex items-center justify-between pt-4">
            <p className="text-sm text-gray-500">
              Showing {filteredClaims.length} of {allClaims.length} claims
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
