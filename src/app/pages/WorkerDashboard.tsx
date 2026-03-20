import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Shield,
  TrendingUp,
  FileCheck,
  Wallet,
  CloudRain,
  Wind,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const earningsData = [
  { day: 'Mon', protected: 450, actual: 480 },
  { day: 'Tue', protected: 500, actual: 520 },
  { day: 'Wed', protected: 480, actual: 350 },
  { day: 'Thu', protected: 520, actual: 540 },
  { day: 'Fri', protected: 550, actual: 380 },
  { day: 'Sat', protected: 600, actual: 620 },
  { day: 'Sun', protected: 580, actual: 600 },
];

const mockClaims = [
  { id: 'CLM-001', date: '2026-03-05', type: 'Heavy Rain', amount: 450, status: 'Paid' },
  { id: 'CLM-002', date: '2026-03-07', type: 'Poor AQI', amount: 320, status: 'Approved' },
  { id: 'CLM-003', date: '2026-03-08', type: 'Area Curfew', amount: 280, status: 'Pending' },
];

const disruptions = [
  { type: 'Weather', message: 'Heavy rainfall expected in South Delhi', severity: 'high', time: '2 hours ago' },
  { type: 'Pollution', message: 'AQI above 400 in Noida area', severity: 'medium', time: '4 hours ago' },
  { type: 'Alert', message: 'Traffic restrictions in Central area', severity: 'low', time: '1 day ago' },
];

export default function WorkerDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-blue-100 mb-4">Your weekly insurance is active and protecting your earnings</p>
        <div className="flex items-center gap-2">
          <Badge className="bg-green-500 hover:bg-green-600">
            <CheckCircle className="h-3 w-3 mr-1" />
            Active Coverage
          </Badge>
          <span className="text-sm">Valid until March 15, 2026</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Weekly Premium</CardTitle>
            <Shield className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹245</div>
            <p className="text-xs text-gray-500 mt-1">AI-optimized rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Earnings Protected</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹3,680</div>
            <p className="text-xs text-gray-500 mt-1">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Claims Triggered</CardTitle>
            <FileCheck className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Payouts</CardTitle>
            <Wallet className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹1,050</div>
            <p className="text-xs text-gray-500 mt-1">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Coverage */}
          <Card>
            <CardHeader>
              <CardTitle>Active Coverage</CardTitle>
              <CardDescription>Your current insurance policy details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Policy Period</p>
                  <p className="font-semibold">March 8 - March 15, 2026</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Coverage Amount</p>
                  <p className="font-semibold">₹5,000 / week</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Working Hours</p>
                  <p className="font-semibold">48 hours / week</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Premium Paid</p>
                  <p className="font-semibold">₹245</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Coverage utilization</span>
                  <span className="font-medium">28%</span>
                </div>
                <Progress value={28} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Earnings Protection Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Earnings Protection Summary</CardTitle>
              <CardDescription>Protected vs actual earnings this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={earningsData}>
                  <defs>
                    <linearGradient id="colorProtected" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid key="grid" strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis key="xaxis" dataKey="day" stroke="#888888" fontSize={12} />
                  <YAxis key="yaxis" stroke="#888888" fontSize={12} />
                  <Tooltip key="tooltip" />
                  <Area
                    key="area-protected"
                    type="monotone"
                    dataKey="protected"
                    stroke="#3b82f6"
                    fill="url(#colorProtected)"
                    name="Protected"
                  />
                  <Area
                    key="area-actual"
                    type="monotone"
                    dataKey="actual"
                    stroke="#22c55e"
                    fill="url(#colorActual)"
                    name="Actual"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Claims History */}
          <Card>
            <CardHeader>
              <CardTitle>Claims History</CardTitle>
              <CardDescription>Your recent insurance claims</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockClaims.map((claim) => (
                  <div key={claim.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <FileCheck className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{claim.type}</p>
                        <p className="text-sm text-gray-500">{claim.id} • {claim.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{claim.amount}</p>
                      <Badge
                        variant={claim.status === 'Paid' ? 'default' : claim.status === 'Approved' ? 'secondary' : 'outline'}
                        className={
                          claim.status === 'Paid'
                            ? 'bg-green-100 text-green-700'
                            : claim.status === 'Approved'
                            ? 'bg-blue-100 text-blue-700'
                            : ''
                        }
                      >
                        {claim.status === 'Paid' && <CheckCircle className="h-3 w-3 mr-1" />}
                        {claim.status === 'Pending' && <Clock className="h-3 w-3 mr-1" />}
                        {claim.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Buy Insurance */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle>Renew Coverage</CardTitle>
              <CardDescription>Get protected for next week</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Coverage Amount</Label>
                <Select defaultValue="5000">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3000">₹3,000 / week</SelectItem>
                    <SelectItem value="5000">₹5,000 / week</SelectItem>
                    <SelectItem value="7000">₹7,000 / week</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Premium</span>
                  <span className="font-semibold">₹245</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>AI-optimized rate</span>
                  <span className="text-green-600">-12% discount</span>
                </div>
              </div>
              <Button className="w-full">
                <Shield className="h-4 w-4 mr-2" />
                Purchase Policy
              </Button>
            </CardContent>
          </Card>

          {/* Disruption Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>Disruption Alerts</CardTitle>
              <CardDescription>Real-time notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {disruptions.map((alert, index) => (
                <div key={index} className="flex gap-3 p-3 border rounded-lg">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      alert.severity === 'high'
                        ? 'bg-red-100'
                        : alert.severity === 'medium'
                        ? 'bg-orange-100'
                        : 'bg-yellow-100'
                    }`}
                  >
                    {alert.type === 'Weather' ? (
                      <CloudRain
                        className={`h-5 w-5 ${
                          alert.severity === 'high'
                            ? 'text-red-600'
                            : alert.severity === 'medium'
                            ? 'text-orange-600'
                            : 'text-yellow-600'
                        }`}
                      />
                    ) : alert.type === 'Pollution' ? (
                      <Wind
                        className={`h-5 w-5 ${
                          alert.severity === 'high'
                            ? 'text-red-600'
                            : alert.severity === 'medium'
                            ? 'text-orange-600'
                            : 'text-yellow-600'
                        }`}
                      />
                    ) : (
                      <AlertTriangle
                        className={`h-5 w-5 ${
                          alert.severity === 'high'
                            ? 'text-red-600'
                            : alert.severity === 'medium'
                            ? 'text-orange-600'
                            : 'text-yellow-600'
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <p className="text-xs text-gray-500">{alert.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Payouts */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Payouts</CardTitle>
              <CardDescription>UPI transfer history</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">₹450</p>
                    <p className="text-xs text-gray-500">March 5, 2026</p>
                  </div>
                </div>
                <Badge className="bg-green-500">Paid</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">₹320</p>
                    <p className="text-xs text-gray-500">March 7, 2026</p>
                  </div>
                </div>
                <Badge variant="secondary">Processing</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Label({ children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className="text-sm font-medium" {...props}>
      {children}
    </label>
  );
}

function Select({ children, defaultValue, value, onValueChange }: any) {
  return <div className="relative">{children}</div>;
}

function SelectTrigger({ children }: any) {
  return (
    <button className="w-full px-3 py-2 border rounded-lg text-left bg-white hover:bg-gray-50">
      {children}
    </button>
  );
}

function SelectValue() {
  return <span>₹5,000 / week</span>;
}

function SelectContent({ children }: any) {
  return null;
}

function SelectItem({ children, value }: any) {
  return null;
}
