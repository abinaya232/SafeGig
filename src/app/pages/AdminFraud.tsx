import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  AlertTriangle,
  Shield,
  TrendingDown,
  Eye,
  MapPin,
  User,
  Calendar,
  FileCheck,
  XCircle,
  CheckCircle,
  Ban,
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

const fraudTrendData = [
  { month: 'Oct', detected: 12, prevented: 11, lossAvoided: 14500 },
  { month: 'Nov', detected: 15, prevented: 14, lossAvoided: 18200 },
  { month: 'Dec', detected: 18, prevented: 16, lossAvoided: 21800 },
  { month: 'Jan', detected: 14, prevented: 13, lossAvoided: 17500 },
  { month: 'Feb', detected: 16, prevented: 15, lossAvoided: 19800 },
  { month: 'Mar', detected: 10, prevented: 9, lossAvoided: 12400 },
];

const fraudByType = [
  { type: 'GPS Mismatch', count: 28, severity: 'High' },
  { type: 'Duplicate Claims', count: 18, severity: 'Medium' },
  { type: 'Time Anomaly', count: 15, severity: 'Medium' },
  { type: 'Pattern Abuse', count: 12, severity: 'High' },
  { type: 'False Location', count: 10, severity: 'High' },
];

const activeAlerts = [
  {
    id: 'FRD-2026-045',
    worker: 'Vikram Patel',
    workerId: 'W-004',
    issue: 'GPS Location Mismatch',
    details: 'Claim location 15km away from last known GPS position',
    claimId: 'CLM-2026-148',
    severity: 'High',
    confidence: 95,
    detectedAt: '2 hours ago',
    status: 'Open',
  },
  {
    id: 'FRD-2026-046',
    worker: 'Ravi Kumar',
    workerId: 'W-015',
    issue: 'Duplicate Claim Submission',
    details: 'Same incident claimed twice with different timestamps',
    claimId: 'CLM-2026-167',
    severity: 'Medium',
    confidence: 88,
    detectedAt: '4 hours ago',
    status: 'Open',
  },
  {
    id: 'FRD-2026-047',
    worker: 'Deepak Yadav',
    workerId: 'W-008',
    issue: 'Suspicious Activity Pattern',
    details: 'Unusual claim frequency - 8 claims in last 2 weeks',
    claimId: 'CLM-2026-152',
    severity: 'Medium',
    confidence: 78,
    detectedAt: '6 hours ago',
    status: 'Under Review',
  },
  {
    id: 'FRD-2026-048',
    worker: 'Sanjay Mishra',
    workerId: 'W-021',
    issue: 'Time-based Anomaly',
    details: 'Claims consistently filed outside working hours',
    claimId: 'CLM-2026-189',
    severity: 'Low',
    confidence: 65,
    detectedAt: '12 hours ago',
    status: 'Open',
  },
  {
    id: 'FRD-2026-049',
    worker: 'Arjun Singh',
    workerId: 'W-028',
    issue: 'Device Fingerprint Mismatch',
    details: 'Claim submitted from multiple devices simultaneously',
    claimId: 'CLM-2026-195',
    severity: 'High',
    confidence: 92,
    detectedAt: '1 day ago',
    status: 'Open',
  },
  {
    id: 'FRD-2026-050',
    worker: 'Rohit Kumar',
    workerId: 'W-032',
    issue: 'Behavioral Pattern Change',
    details: 'Sudden change in claim submission behavior',
    claimId: 'CLM-2026-201',
    severity: 'Low',
    confidence: 62,
    detectedAt: '1 day ago',
    status: 'Under Review',
  },
];

const resolvedAlerts = [
  {
    id: 'FRD-2026-042',
    worker: 'Manoj Sharma',
    workerId: 'W-012',
    issue: 'GPS Location Mismatch',
    action: 'Claim Rejected',
    resolvedBy: 'Admin - Sarah',
    resolvedAt: '2026-03-07',
    outcome: 'Fraud Confirmed',
  },
  {
    id: 'FRD-2026-043',
    worker: 'Priya Verma',
    workerId: 'W-018',
    issue: 'Duplicate Submission',
    action: 'False Positive',
    resolvedBy: 'Admin - John',
    resolvedAt: '2026-03-06',
    outcome: 'No Action',
  },
  {
    id: 'FRD-2026-044',
    worker: 'Amit Desai',
    workerId: 'W-025',
    issue: 'Suspicious Pattern',
    action: 'Worker Suspended',
    resolvedBy: 'Admin - Mike',
    resolvedAt: '2026-03-05',
    outcome: 'Account Restricted',
  },
];

export default function AdminFraud() {
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'High':
        return <Badge className="bg-red-100 text-red-700">{severity}</Badge>;
      case 'Medium':
        return <Badge className="bg-orange-100 text-orange-700">{severity}</Badge>;
      case 'Low':
        return <Badge className="bg-yellow-100 text-yellow-700">{severity}</Badge>;
      default:
        return <Badge>{severity}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Open':
        return <Badge className="bg-red-100 text-red-700">{status}</Badge>;
      case 'Under Review':
        return <Badge className="bg-blue-100 text-blue-700">{status}</Badge>;
      case 'Resolved':
        return <Badge className="bg-green-100 text-green-700">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Fraud Detection</h1>
        <p className="text-gray-600">AI-powered fraud detection and prevention system</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeAlerts.length}</div>
            <p className="text-xs text-red-600 mt-1">Requires attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Prevented This Month</CardTitle>
            <Shield className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9</div>
            <p className="text-xs text-green-600 mt-1">-10% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Loss Avoided</CardTitle>
            <TrendingDown className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12,400</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Detection Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">90%</div>
            <p className="text-xs text-green-600 mt-1">+5% improvement</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Fraud Detection Trend</CardTitle>
            <CardDescription>Monthly fraud cases detected and prevented</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={fraudTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="detected"
                  stroke="#ef4444"
                  strokeWidth={2}
                  name="Detected"
                />
                <Line
                  type="monotone"
                  dataKey="prevented"
                  stroke="#22c55e"
                  strokeWidth={2}
                  name="Prevented"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fraud by Type</CardTitle>
            <CardDescription>Most common fraud patterns detected</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={fraudByType} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#888888" fontSize={12} />
                <YAxis dataKey="type" type="category" stroke="#888888" fontSize={12} width={120} />
                <Tooltip />
                <Bar dataKey="count" fill="#ef4444" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Fraud Alerts Tabs */}
      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Alerts ({activeAlerts.length})</TabsTrigger>
          <TabsTrigger value="resolved">Resolved ({resolvedAlerts.length})</TabsTrigger>
          <TabsTrigger value="patterns">Detection Patterns</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Fraud Alerts</CardTitle>
              <CardDescription>AI-detected suspicious activities requiring review</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeAlerts.map((alert) => (
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
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3 flex-1">
                      <AlertTriangle
                        className={`h-5 w-5 mt-0.5 ${
                          alert.severity === 'High'
                            ? 'text-red-600'
                            : alert.severity === 'Medium'
                            ? 'text-orange-600'
                            : 'text-yellow-600'
                        }`}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold">{alert.issue}</p>
                          {getSeverityBadge(alert.severity)}
                          {getStatusBadge(alert.status)}
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{alert.details}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3 text-gray-500" />
                            <span className="text-gray-600">{alert.worker}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FileCheck className="h-3 w-3 text-gray-500" />
                            <span className="text-gray-600">{alert.claimId}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Shield className="h-3 w-3 text-gray-500" />
                            <span className="text-gray-600">AI: {alert.confidence}%</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-gray-500" />
                            <span className="text-gray-600">{alert.detectedAt}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-3 border-t">
                    <Button size="sm" variant="default">
                      <Eye className="h-4 w-4 mr-2" />
                      Investigate
                    </Button>
                    <Button size="sm" variant="outline" className="text-green-600">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Mark Safe
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600">
                      <Ban className="h-4 w-4 mr-2" />
                      Block Worker
                    </Button>
                    <Button size="sm" variant="ghost">
                      Dismiss
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resolved" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resolved Alerts</CardTitle>
              <CardDescription>Previously investigated fraud cases</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {resolvedAlerts.map((alert) => (
                <div key={alert.id} className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold">{alert.issue}</p>
                        <Badge className="bg-green-100 text-green-700">Resolved</Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {alert.id} • {alert.worker} ({alert.workerId})
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm mt-3 pt-3 border-t">
                    <div>
                      <p className="text-gray-600">Action Taken</p>
                      <p className="font-medium">{alert.action}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Resolved By</p>
                      <p className="font-medium">{alert.resolvedBy}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Date</p>
                      <p className="font-medium">{alert.resolvedAt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="patterns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Detection Patterns</CardTitle>
              <CardDescription>Machine learning models and detection rules</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">GPS Location Verification</p>
                      <p className="text-sm text-gray-600">Validates claim location against GPS data</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Active</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm pt-3 border-t">
                  <div>
                    <p className="text-gray-600">Accuracy</p>
                    <p className="font-semibold">95%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Cases Detected</p>
                    <p className="font-semibold">28</p>
                  </div>
                  <div>
                    <p className="text-gray-600">False Positives</p>
                    <p className="font-semibold">5%</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <FileCheck className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Behavioral Pattern Analysis</p>
                      <p className="text-sm text-gray-600">Detects unusual claim patterns</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Active</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm pt-3 border-t">
                  <div>
                    <p className="text-gray-600">Accuracy</p>
                    <p className="font-semibold">88%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Cases Detected</p>
                    <p className="font-semibold">15</p>
                  </div>
                  <div>
                    <p className="text-gray-600">False Positives</p>
                    <p className="font-semibold">12%</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Duplicate Detection</p>
                      <p className="text-sm text-gray-600">Identifies duplicate claims</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Active</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm pt-3 border-t">
                  <div>
                    <p className="text-gray-600">Accuracy</p>
                    <p className="font-semibold">92%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Cases Detected</p>
                    <p className="font-semibold">18</p>
                  </div>
                  <div>
                    <p className="text-gray-600">False Positives</p>
                    <p className="font-semibold">8%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
