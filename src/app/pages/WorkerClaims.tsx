import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  FileCheck,
  CheckCircle,
  Clock,
  XCircle,
  AlertTriangle,
  CloudRain,
  Wind,
  MapPin,
  Calendar,
  DollarSign,
  Eye,
} from 'lucide-react';

const allClaims = [
  {
    id: 'CLM-001',
    date: '2026-03-08',
    time: '14:30',
    type: 'Heavy Rain',
    icon: CloudRain,
    location: 'South Delhi',
    rainfall: '65mm/hr',
    duration: '3 hours',
    amount: 450,
    status: 'Paid',
    processedDate: '2026-03-08',
    upiRef: 'UPI-450-08MAR',
  },
  {
    id: 'CLM-002',
    date: '2026-03-07',
    time: '11:15',
    type: 'Poor Air Quality',
    icon: Wind,
    location: 'Noida Sector 62',
    aqi: '425',
    duration: '4 hours',
    amount: 320,
    status: 'Approved',
    processedDate: '2026-03-07',
    upiRef: 'Pending',
  },
  {
    id: 'CLM-003',
    date: '2026-03-08',
    time: '09:00',
    type: 'Area Curfew',
    icon: AlertTriangle,
    location: 'Central Delhi',
    duration: '6 hours',
    amount: 280,
    status: 'Pending',
    processedDate: null,
    upiRef: null,
  },
  {
    id: 'CLM-004',
    date: '2026-03-05',
    time: '16:45',
    type: 'Heavy Rain',
    icon: CloudRain,
    location: 'Gurgaon',
    rainfall: '58mm/hr',
    duration: '2.5 hours',
    amount: 380,
    status: 'Paid',
    processedDate: '2026-03-05',
    upiRef: 'UPI-380-05MAR',
  },
  {
    id: 'CLM-005',
    date: '2026-03-03',
    time: '13:20',
    type: 'Poor Air Quality',
    icon: Wind,
    location: 'East Delhi',
    aqi: '410',
    duration: '5 hours',
    amount: 400,
    status: 'Paid',
    processedDate: '2026-03-03',
    upiRef: 'UPI-400-03MAR',
  },
  {
    id: 'CLM-006',
    date: '2026-02-28',
    time: '10:30',
    type: 'Heavy Rain',
    icon: CloudRain,
    location: 'South Delhi',
    rainfall: '72mm/hr',
    duration: '4 hours',
    amount: 520,
    status: 'Paid',
    processedDate: '2026-02-28',
    upiRef: 'UPI-520-28FEB',
  },
  {
    id: 'CLM-007',
    date: '2026-02-25',
    time: '15:00',
    type: 'Area Curfew',
    icon: AlertTriangle,
    location: 'Noida',
    duration: '8 hours',
    amount: 450,
    status: 'Rejected',
    processedDate: '2026-02-26',
    upiRef: null,
    rejectionReason: 'GPS location outside coverage area',
  },
  {
    id: 'CLM-008',
    date: '2026-02-22',
    time: '12:00',
    type: 'Poor Air Quality',
    icon: Wind,
    location: 'West Delhi',
    aqi: '445',
    duration: '6 hours',
    amount: 480,
    status: 'Paid',
    processedDate: '2026-02-22',
    upiRef: 'UPI-480-22FEB',
  },
];

export default function WorkerClaims() {
  const pendingClaims = allClaims.filter((c) => c.status === 'Pending');
  const approvedClaims = allClaims.filter((c) => c.status === 'Approved');
  const paidClaims = allClaims.filter((c) => c.status === 'Paid');
  const rejectedClaims = allClaims.filter((c) => c.status === 'Rejected');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-700';
      case 'Approved':
        return 'bg-blue-100 text-blue-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Rejected':
        return 'bg-red-100 text-red-700';
      default:
        return '';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Paid':
        return <CheckCircle className="h-3 w-3 mr-1" />;
      case 'Approved':
        return <CheckCircle className="h-3 w-3 mr-1" />;
      case 'Pending':
        return <Clock className="h-3 w-3 mr-1" />;
      case 'Rejected':
        return <XCircle className="h-3 w-3 mr-1" />;
      default:
        return null;
    }
  };

  const renderClaimCard = (claim: typeof allClaims[0]) => {
    const Icon = claim.icon;
    return (
      <Card key={claim.id} className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{claim.type}</h3>
                <p className="text-sm text-gray-500">Claim ID: {claim.id}</p>
              </div>
            </div>
            <Badge className={getStatusColor(claim.status)}>
              {getStatusIcon(claim.status)}
              {claim.status}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">
                {claim.date} at {claim.time}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">{claim.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">Duration: {claim.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <DollarSign className="h-4 w-4 text-gray-400" />
              <span className="font-semibold text-green-600">₹{claim.amount}</span>
            </div>
          </div>

          {claim.rainfall && (
            <div className="mb-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm">
                <span className="font-medium">Rainfall Intensity:</span> {claim.rainfall}
              </p>
            </div>
          )}

          {claim.aqi && (
            <div className="mb-4 p-3 bg-orange-50 rounded-lg">
              <p className="text-sm">
                <span className="font-medium">Air Quality Index:</span> {claim.aqi} (Severe)
              </p>
            </div>
          )}

          {claim.status === 'Paid' && (
            <div className="pt-4 border-t">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Processed on:</span>
                <span className="font-medium">{claim.processedDate}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-gray-600">UPI Reference:</span>
                <span className="font-medium text-blue-600">{claim.upiRef}</span>
              </div>
            </div>
          )}

          {claim.status === 'Approved' && (
            <div className="pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <CheckCircle className="h-4 w-4" />
                <span>Payout processing - Expected within 24 hours</span>
              </div>
            </div>
          )}

          {claim.status === 'Pending' && (
            <div className="pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-yellow-600">
                <Clock className="h-4 w-4" />
                <span>Under review - AI verification in progress</span>
              </div>
            </div>
          )}

          {claim.status === 'Rejected' && claim.rejectionReason && (
            <div className="pt-4 border-t">
              <div className="flex items-start gap-2 text-sm text-red-600">
                <XCircle className="h-4 w-4 mt-0.5" />
                <span>
                  <strong>Reason:</strong> {claim.rejectionReason}
                </span>
              </div>
            </div>
          )}

          <div className="pt-4 border-t mt-4">
            <Button variant="outline" size="sm" className="w-full">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Claims</h1>
        <p className="text-gray-600">Track your insurance claims and payouts</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Claims</CardTitle>
            <FileCheck className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allClaims.length}</div>
            <p className="text-xs text-gray-500 mt-1">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Received</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{paidClaims.reduce((sum, c) => sum + c.amount, 0)}</div>
            <p className="text-xs text-gray-500 mt-1">{paidClaims.length} paid claims</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingClaims.length}</div>
            <p className="text-xs text-gray-500 mt-1">Under processing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Approval Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(((paidClaims.length + approvedClaims.length) / allClaims.length) * 100)}%
            </div>
            <p className="text-xs text-gray-500 mt-1">Success rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Claims Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Claims ({allClaims.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({pendingClaims.length})</TabsTrigger>
          <TabsTrigger value="approved">Approved ({approvedClaims.length})</TabsTrigger>
          <TabsTrigger value="paid">Paid ({paidClaims.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {allClaims.map(renderClaimCard)}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {pendingClaims.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {pendingClaims.map(renderClaimCard)}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center text-gray-500">
                <Clock className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No pending claims</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="approved" className="space-y-4">
          {approvedClaims.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {approvedClaims.map(renderClaimCard)}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center text-gray-500">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No approved claims waiting for payout</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="paid" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {paidClaims.map(renderClaimCard)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
