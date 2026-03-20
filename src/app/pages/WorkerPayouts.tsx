import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Progress } from '../components/ui/progress';
import {
  Wallet,
  DollarSign,
  TrendingUp,
  CheckCircle,
  Clock,
  Download,
  CreditCard,
  Calendar,
  ArrowUpRight,
  Smartphone,
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const payoutHistory = [
  {
    id: 'PAY-001',
    claimId: 'CLM-001',
    date: '2026-03-08',
    time: '16:45',
    amount: 450,
    method: 'UPI',
    upiId: 'rajesh@paytm',
    upiRef: 'UPI-450-08MAR',
    status: 'Completed',
    processingTime: '2 hours',
  },
  {
    id: 'PAY-002',
    claimId: 'CLM-004',
    date: '2026-03-05',
    time: '18:30',
    amount: 380,
    method: 'UPI',
    upiId: 'rajesh@paytm',
    upiRef: 'UPI-380-05MAR',
    status: 'Completed',
    processingTime: '1.5 hours',
  },
  {
    id: 'PAY-003',
    claimId: 'CLM-005',
    date: '2026-03-03',
    time: '15:20',
    amount: 400,
    method: 'UPI',
    upiId: 'rajesh@paytm',
    upiRef: 'UPI-400-03MAR',
    status: 'Completed',
    processingTime: '3 hours',
  },
  {
    id: 'PAY-004',
    claimId: 'CLM-006',
    date: '2026-02-28',
    time: '14:10',
    amount: 520,
    method: 'UPI',
    upiId: 'rajesh@paytm',
    upiRef: 'UPI-520-28FEB',
    status: 'Completed',
    processingTime: '2.5 hours',
  },
  {
    id: 'PAY-005',
    claimId: 'CLM-008',
    date: '2026-02-22',
    time: '16:00',
    amount: 480,
    method: 'UPI',
    upiId: 'rajesh@paytm',
    upiRef: 'UPI-480-22FEB',
    status: 'Completed',
    processingTime: '4 hours',
  },
  {
    id: 'PAY-006',
    claimId: 'CLM-009',
    date: '2026-02-18',
    time: '13:45',
    amount: 350,
    method: 'Bank Transfer',
    bankAccount: '****6789',
    refNumber: 'BNK-350-18FEB',
    status: 'Completed',
    processingTime: '24 hours',
  },
  {
    id: 'PAY-007',
    claimId: 'CLM-010',
    date: '2026-02-15',
    time: '11:30',
    amount: 420,
    method: 'UPI',
    upiId: 'rajesh@paytm',
    upiRef: 'UPI-420-15FEB',
    status: 'Completed',
    processingTime: '1 hour',
  },
  {
    id: 'PAY-008',
    claimId: 'CLM-002',
    date: '2026-03-07',
    time: 'Pending',
    amount: 320,
    method: 'UPI',
    upiId: 'rajesh@paytm',
    upiRef: 'Processing',
    status: 'Processing',
    processingTime: 'In progress',
  },
];

const monthlyData = [
  { month: 'Oct', payouts: 1250 },
  { month: 'Nov', payouts: 980 },
  { month: 'Dec', payouts: 1450 },
  { month: 'Jan', payouts: 1120 },
  { month: 'Feb', payouts: 1770 },
  { month: 'Mar', payouts: 1230 },
];

const weeklyTrend = [
  { week: 'Week 1', amount: 450 },
  { week: 'Week 2', amount: 0 },
  { week: 'Week 3', amount: 520 },
  { week: 'Week 4', amount: 800 },
];

export default function WorkerPayouts() {
  const completedPayouts = payoutHistory.filter((p) => p.status === 'Completed');
  const processingPayouts = payoutHistory.filter((p) => p.status === 'Processing');
  const totalReceived = completedPayouts.reduce((sum, p) => sum + p.amount, 0);
  const avgPayout = Math.round(totalReceived / completedPayouts.length);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Payouts</h1>
        <p className="text-gray-600">Track your insurance claim payouts and transfer history</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Received</CardTitle>
            <Wallet className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalReceived.toLocaleString()}</div>
            <p className="text-xs text-gray-500 mt-1">Lifetime earnings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">This Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹1,230</div>
            <p className="text-xs text-green-600 mt-1">+8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Payout</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{avgPayout}</div>
            <p className="text-xs text-gray-500 mt-1">Per claim</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Processing</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{processingPayouts.length}</div>
            <p className="text-xs text-gray-500 mt-1">₹{processingPayouts.reduce((s, p) => s + p.amount, 0)} pending</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Monthly Trend Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Payout Trends</CardTitle>
              <CardDescription>Monthly payout history over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#888888" fontSize={12} />
                  <YAxis stroke="#888888" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="payouts" fill="#22c55e" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Payout History */}
          <Card>
            <CardHeader>
              <CardTitle>Payout History</CardTitle>
              <CardDescription>Complete record of all your payouts</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All ({payoutHistory.length})</TabsTrigger>
                  <TabsTrigger value="completed">Completed ({completedPayouts.length})</TabsTrigger>
                  <TabsTrigger value="processing">Processing ({processingPayouts.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-3 mt-4">
                  {payoutHistory.map((payout) => (
                    <div
                      key={payout.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            payout.status === 'Completed' ? 'bg-green-100' : 'bg-orange-100'
                          }`}
                        >
                          {payout.method === 'UPI' ? (
                            <Smartphone
                              className={`h-6 w-6 ${
                                payout.status === 'Completed' ? 'text-green-600' : 'text-orange-600'
                              }`}
                            />
                          ) : (
                            <CreditCard
                              className={`h-6 w-6 ${
                                payout.status === 'Completed' ? 'text-green-600' : 'text-orange-600'
                              }`}
                            />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold">₹{payout.amount}</p>
                          <p className="text-sm text-gray-500">
                            {payout.id} • Claim {payout.claimId}
                          </p>
                          <p className="text-xs text-gray-400">
                            {payout.date} {payout.time !== 'Pending' && `at ${payout.time}`}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={payout.status === 'Completed' ? 'default' : 'secondary'}
                          className={payout.status === 'Completed' ? 'bg-green-100 text-green-700' : ''}
                        >
                          {payout.status === 'Completed' ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <Clock className="h-3 w-3 mr-1" />
                          )}
                          {payout.status}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{payout.method}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="completed" className="space-y-3 mt-4">
                  {completedPayouts.map((payout) => (
                    <div
                      key={payout.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          {payout.method === 'UPI' ? (
                            <Smartphone className="h-6 w-6 text-green-600" />
                          ) : (
                            <CreditCard className="h-6 w-6 text-green-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold">₹{payout.amount}</p>
                          <p className="text-sm text-gray-500">
                            {payout.method === 'UPI' ? payout.upiId : `A/C ${payout.bankAccount}`}
                          </p>
                          <p className="text-xs text-gray-400">
                            {payout.date} at {payout.time}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">
                          {payout.method === 'UPI' ? payout.upiRef : payout.refNumber}
                        </p>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="processing" className="space-y-3 mt-4">
                  {processingPayouts.length > 0 ? (
                    processingPayouts.map((payout) => (
                      <div
                        key={payout.id}
                        className="flex items-center justify-between p-4 border rounded-lg bg-orange-50"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <Smartphone className="h-6 w-6 text-orange-600" />
                          </div>
                          <div>
                            <p className="font-semibold">₹{payout.amount}</p>
                            <p className="text-sm text-gray-500">{payout.upiId}</p>
                            <p className="text-xs text-gray-400">Expected within 24 hours</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">
                            <Clock className="h-3 w-3 mr-1" />
                            Processing
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">Claim {payout.claimId}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Clock className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                      <p>No payouts currently processing</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* UPI Details */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-blue-600" />
                UPI Details
              </CardTitle>
              <CardDescription>Your registered payment method</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-white rounded-lg border">
                <p className="text-sm text-gray-600 mb-1">Primary UPI ID</p>
                <p className="font-semibold text-lg">rajesh@paytm</p>
                <Badge className="mt-2 bg-green-100 text-green-700">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <Button variant="outline" className="w-full">
                Update UPI Details
              </Button>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Fastest Payout</span>
                  <span className="font-semibold">1 hour</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Average Time</span>
                  <span className="font-semibold">2.5 hours</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              <div className="pt-4 border-t">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Success Rate</span>
                  <span className="font-semibold text-green-600">100%</span>
                </div>
                <p className="text-xs text-gray-500">All payouts processed successfully</p>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>This Month</CardTitle>
              <CardDescription>Weekly breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={150}>
                <LineChart data={weeklyTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="week" stroke="#888888" fontSize={10} />
                  <YAxis stroke="#888888" fontSize={10} />
                  <Tooltip />
                  <Line type="monotone" dataKey="amount" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Download Statement */}
          <Card>
            <CardHeader>
              <CardTitle>Statements</CardTitle>
              <CardDescription>Download payout records</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-between">
                <span>March 2026</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>February 2026</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>January 2026</span>
                <Download className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
