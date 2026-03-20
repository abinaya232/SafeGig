import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Shield, Calendar, Clock, DollarSign, CheckCircle, FileCheck } from 'lucide-react';

const policyHistory = [
  {
    id: 'POL-2026-001',
    startDate: '2026-03-08',
    endDate: '2026-03-15',
    coverage: 5000,
    premium: 245,
    claimsUsed: 2,
    payoutReceived: 770,
    status: 'Active',
  },
  {
    id: 'POL-2026-002',
    startDate: '2026-03-01',
    endDate: '2026-03-08',
    coverage: 5000,
    premium: 245,
    claimsUsed: 1,
    payoutReceived: 450,
    status: 'Completed',
  },
  {
    id: 'POL-2025-012',
    startDate: '2026-02-22',
    endDate: '2026-03-01',
    coverage: 4500,
    premium: 221,
    claimsUsed: 3,
    payoutReceived: 1100,
    status: 'Completed',
  },
  {
    id: 'POL-2025-011',
    startDate: '2026-02-15',
    endDate: '2026-02-22',
    coverage: 4000,
    premium: 196,
    claimsUsed: 2,
    payoutReceived: 680,
    status: 'Completed',
  },
];

export default function WorkerCoverage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Active Coverage</h1>
        <p className="text-gray-600">Your current insurance policy details</p>
      </div>

      <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Active Policy</CardTitle>
              <CardDescription>Policy ID: POL-2026-03-001</CardDescription>
            </div>
            <Badge className="bg-green-500 hover:bg-green-600 text-white">
              <CheckCircle className="h-3 w-3 mr-1" />
              Active
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-blue-600" />
                <p className="text-sm text-gray-600">Coverage Amount</p>
              </div>
              <p className="text-xl font-bold">₹5,000</p>
            </div>
            <div className="p-4 bg-white rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-green-600" />
                <p className="text-sm text-gray-600">Premium Paid</p>
              </div>
              <p className="text-xl font-bold">₹245</p>
            </div>
            <div className="p-4 bg-white rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-purple-600" />
                <p className="text-sm text-gray-600">Days Left</p>
              </div>
              <p className="text-xl font-bold">7 days</p>
            </div>
            <div className="p-4 bg-white rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-orange-600" />
                <p className="text-sm text-gray-600">Hours Covered</p>
              </div>
              <p className="text-xl font-bold">48 hrs</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Coverage Utilization</span>
              <span className="font-medium">28% (₹1,400 / ₹5,000)</span>
            </div>
            <Progress value={28} className="h-3" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Policy Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Coverage Period</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Start Date</span>
                  <span className="font-medium">March 8, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">End Date</span>
                  <span className="font-medium">March 15, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Renewal Date</span>
                  <span className="font-medium">March 15, 2026</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Coverage Limits</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Weekly Payout</span>
                  <span className="font-medium">₹5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Per Event Limit</span>
                  <span className="font-medium">₹500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Events/Week</span>
                  <span className="font-medium">10 events</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Covered Events</CardTitle>
          <CardDescription>Types of disruptions covered under your policy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Weather Events</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Heavy rainfall (&gt;50mm/hr)</li>
                <li>• Storms and cyclones</li>
                <li>• Floods</li>
                <li>• Extreme heat (&gt;45°C)</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Pollution</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AQI &gt; 400 (Severe)</li>
                <li>• AQI 300-400 (Very Poor)</li>
                <li>• Smog conditions</li>
                <li>• Air quality alerts</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Restrictions</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Area curfews</li>
                <li>• Traffic bans</li>
                <li>• Movement restrictions</li>
                <li>• Emergency closures</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Policy History</CardTitle>
          <CardDescription>Your past insurance policies and their performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {policyHistory.map((policy) => (
              <div
                key={policy.id}
                className={`p-4 border rounded-lg ${
                  policy.status === 'Active' ? 'border-green-200 bg-green-50' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{policy.id}</p>
                      <Badge
                        variant={policy.status === 'Active' ? 'default' : 'outline'}
                        className={policy.status === 'Active' ? 'bg-green-100 text-green-700' : ''}
                      >
                        {policy.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {policy.startDate} to {policy.endDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Coverage</p>
                    <p className="font-semibold">₹{policy.coverage.toLocaleString()}</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3 text-sm pt-3 border-t">
                  <div>
                    <p className="text-gray-600">Premium</p>
                    <p className="font-medium">₹{policy.premium}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Claims</p>
                    <p className="font-medium">{policy.claimsUsed}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Payout</p>
                    <p className="font-medium text-green-600">₹{policy.payoutReceived}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">ROI</p>
                    <p className="font-medium text-blue-600">
                      {Math.round((policy.payoutReceived / policy.premium) * 100)}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <FileCheck className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900">Policy Performance Summary</p>
                <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
                  <div>
                    <p className="text-blue-700">Total Policies</p>
                    <p className="text-lg font-bold text-blue-900">{policyHistory.length}</p>
                  </div>
                  <div>
                    <p className="text-blue-700">Total Claims</p>
                    <p className="text-lg font-bold text-blue-900">
                      {policyHistory.reduce((sum, p) => sum + p.claimsUsed, 0)}
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-700">Total Received</p>
                    <p className="text-lg font-bold text-blue-900">
                      ₹{policyHistory.reduce((sum, p) => sum + p.payoutReceived, 0).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}