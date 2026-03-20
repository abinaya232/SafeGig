import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Slider } from '../components/ui/slider';
import { Badge } from '../components/ui/badge';
import { Shield, TrendingDown, Zap, CheckCircle } from 'lucide-react';

export default function WorkerBuyInsurance() {
  const [coverage, setCoverage] = useState(5000);
  const [premium, setPremium] = useState(245);

  const handleCoverageChange = (value: number[]) => {
    const newCoverage = value[0];
    setCoverage(newCoverage);
    // AI-calculated premium (simplified calculation)
    setPremium(Math.round(newCoverage * 0.049));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Buy Weekly Insurance</h1>
        <p className="text-gray-600">Get protected against income loss from external disruptions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Configure Your Coverage</CardTitle>
              <CardDescription>Select your preferred coverage amount for the week</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-base">Coverage Amount</Label>
                  <p className="text-sm text-gray-500 mb-4">How much income do you want to protect?</p>
                  <div className="space-y-4">
                    <Slider
                      value={[coverage]}
                      onValueChange={handleCoverageChange}
                      min={2000}
                      max={10000}
                      step={500}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>₹2,000</span>
                      <span className="font-bold text-2xl text-blue-600">₹{coverage.toLocaleString()}</span>
                      <span>₹10,000</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Weekly Premium</p>
                    <p className="text-2xl font-bold text-blue-600">₹{premium}</p>
                    <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700">
                      <TrendingDown className="h-3 w-3 mr-1" />
                      12% AI Discount
                    </Badge>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Coverage Ratio</p>
                    <p className="text-2xl font-bold text-green-600">
                      {((coverage / premium) * 1).toFixed(0)}x
                    </p>
                    <p className="text-xs text-gray-500 mt-2">Excellent value</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3">Coverage Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Policy Period</p>
                    <p className="font-medium">March 15 - March 22, 2026</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Working Hours</p>
                    <p className="font-medium">Up to 48 hours/week</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Payout Method</p>
                    <p className="font-medium">UPI Transfer</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Claim Processing</p>
                    <p className="font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3">What's Covered</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Extreme Weather Events</p>
                      <p className="text-sm text-gray-500">Heavy rain, storms, floods causing delivery disruptions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Air Quality Index (AQI) Above 400</p>
                      <p className="text-sm text-gray-500">Severe pollution affecting work conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Area Curfews & Restrictions</p>
                      <p className="text-sm text-gray-500">Government-imposed restrictions on movement</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Purchase Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Coverage Amount</span>
                  <span className="font-semibold">₹{coverage.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Premium</span>
                  <span className="font-semibold">₹{Math.round(premium / 0.88)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>AI Discount (12%)</span>
                  <span>-₹{Math.round(premium / 0.88) - premium}</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg">
                  <span className="font-semibold">Total Premium</span>
                  <span className="font-bold text-blue-600">₹{premium}</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Shield className="h-4 w-4 mr-2" />
                Purchase Policy
              </Button>

              <div className="pt-4 border-t space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span>Instant activation upon payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>100% automated claims</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">AI Risk Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Your Risk Score</span>
                <Badge variant="secondary" className="bg-green-100 text-green-700">Low</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Disruption Probability</span>
                <span className="font-medium">18%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Region Risk Level</span>
                <span className="font-medium">Medium</span>
              </div>
              <p className="text-xs text-gray-500 pt-2 border-t">
                Based on your work patterns, location, and historical weather data
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
