import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  CloudRain,
  Wind,
  AlertTriangle,
  Sun,
  MapPin,
  Clock,
  Users,
  FileCheck,
  TrendingUp,
  Eye,
  Bell,
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

const realtimeDisruptions = [
  {
    id: 'DIS-001',
    type: 'Heavy Rain',
    severity: 'High',
    location: 'South Delhi',
    intensity: '68mm/hr',
    startTime: '14:30',
    duration: '2h 30m',
    affectedWorkers: 142,
    triggeredClaims: 28,
    status: 'Active',
    forecast: 'Continuing for 3 more hours',
  },
  {
    id: 'DIS-002',
    type: 'Poor AQI',
    severity: 'Severe',
    location: 'Noida Sector 62',
    intensity: 'AQI 425',
    startTime: '09:00',
    duration: '6h 15m',
    affectedWorkers: 185,
    triggeredClaims: 42,
    status: 'Active',
    forecast: 'Expected to improve by evening',
  },
  {
    id: 'DIS-003',
    type: 'Area Curfew',
    severity: 'Medium',
    location: 'Central Delhi',
    intensity: 'Traffic Ban',
    startTime: '08:00',
    duration: '4h',
    affectedWorkers: 68,
    triggeredClaims: 15,
    status: 'Active',
    forecast: 'Lifting at 18:00',
  },
  {
    id: 'DIS-004',
    type: 'Extreme Heat',
    severity: 'Low',
    location: 'Gurgaon',
    intensity: '44°C',
    startTime: '12:00',
    duration: '3h',
    affectedWorkers: 95,
    triggeredClaims: 8,
    status: 'Monitoring',
    forecast: 'Temperature dropping after sunset',
  },
];

const historicalDisruptions = [
  {
    id: 'DIS-H-098',
    type: 'Heavy Rain',
    location: 'West Delhi',
    date: '2026-03-07',
    intensity: '72mm/hr',
    duration: '4h',
    affectedWorkers: 128,
    triggeredClaims: 32,
    totalPayout: 14400,
  },
  {
    id: 'DIS-H-099',
    type: 'Poor AQI',
    location: 'Noida',
    date: '2026-03-05',
    intensity: 'AQI 445',
    duration: '8h',
    affectedWorkers: 195,
    triggeredClaims: 48,
    totalPayout: 18240,
  },
  {
    id: 'DIS-H-100',
    type: 'Area Curfew',
    location: 'South Delhi',
    date: '2026-03-03',
    intensity: 'Full Restriction',
    duration: '12h',
    affectedWorkers: 156,
    triggeredClaims: 38,
    totalPayout: 13300,
  },
];

const disruptionTrendData = [
  { month: 'Oct', weather: 18, pollution: 24, curfew: 8, heat: 12 },
  { month: 'Nov', weather: 22, pollution: 28, curfew: 6, heat: 8 },
  { month: 'Dec', weather: 28, pollution: 32, curfew: 10, heat: 5 },
  { month: 'Jan', weather: 24, pollution: 35, curfew: 8, heat: 6 },
  { month: 'Feb', weather: 26, pollution: 38, curfew: 7, heat: 10 },
  { month: 'Mar', weather: 20, pollution: 30, curfew: 9, heat: 15 },
];

const regionalHotspots = [
  { region: 'Noida', events: 52, severity: 'High', topType: 'Poor AQI' },
  { region: 'South Delhi', events: 45, severity: 'High', topType: 'Heavy Rain' },
  { region: 'Gurgaon', events: 41, severity: 'Medium', topType: 'Heavy Rain' },
  { region: 'East Delhi', events: 29, severity: 'Medium', topType: 'Poor AQI' },
  { region: 'West Delhi', events: 33, severity: 'Medium', topType: 'Heavy Rain' },
  { region: 'North Delhi', events: 38, severity: 'Medium', topType: 'Area Curfew' },
];

const weatherForecast = [
  {
    day: 'Today',
    condition: 'Heavy Rain',
    temp: '28°C',
    aqi: 185,
    risk: 'High',
    expectedClaims: 45,
  },
  {
    day: 'Tomorrow',
    condition: 'Cloudy',
    temp: '30°C',
    aqi: 220,
    risk: 'Medium',
    expectedClaims: 25,
  },
  {
    day: 'Tuesday',
    condition: 'Partly Cloudy',
    temp: '32°C',
    aqi: 280,
    risk: 'Medium',
    expectedClaims: 30,
  },
  {
    day: 'Wednesday',
    condition: 'Clear',
    temp: '35°C',
    aqi: 195,
    risk: 'Low',
    expectedClaims: 12,
  },
  {
    day: 'Thursday',
    condition: 'Clear',
    temp: '36°C',
    aqi: 175,
    risk: 'Low',
    expectedClaims: 8,
  },
];

export default function AdminDisruptions() {
  const [selectedTab, setSelectedTab] = useState('realtime');

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'High':
      case 'Severe':
        return <Badge className="bg-red-100 text-red-700">{severity}</Badge>;
      case 'Medium':
        return <Badge className="bg-orange-100 text-orange-700">{severity}</Badge>;
      case 'Low':
        return <Badge className="bg-yellow-100 text-yellow-700">{severity}</Badge>;
      default:
        return <Badge>{severity}</Badge>;
    }
  };

  const getDisruptionIcon = (type: string) => {
    switch (type) {
      case 'Heavy Rain':
        return <CloudRain className="h-5 w-5 text-blue-600" />;
      case 'Poor AQI':
        return <Wind className="h-5 w-5 text-orange-600" />;
      case 'Area Curfew':
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case 'Extreme Heat':
        return <Sun className="h-5 w-5 text-yellow-600" />;
      default:
        return <AlertTriangle className="h-5 w-5" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge className="bg-red-100 text-red-700 animate-pulse">{status}</Badge>;
      case 'Monitoring':
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
        <h1 className="text-3xl font-bold mb-2">Disruption Monitoring</h1>
        <p className="text-gray-600">Real-time monitoring of weather, pollution, and restriction events</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Disruptions</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {realtimeDisruptions.filter((d) => d.status === 'Active').length}
            </div>
            <p className="text-xs text-gray-500 mt-1">Currently affecting workers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Affected Workers</CardTitle>
            <Users className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {realtimeDisruptions.reduce((sum, d) => sum + d.affectedWorkers, 0)}
            </div>
            <p className="text-xs text-gray-500 mt-1">In affected areas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Claims Triggered</CardTitle>
            <FileCheck className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {realtimeDisruptions.reduce((sum, d) => sum + d.triggeredClaims, 0)}
            </div>
            <p className="text-xs text-gray-500 mt-1">Auto-processed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">This Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">238</div>
            <p className="text-xs text-gray-500 mt-1">Total events</p>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Monitoring */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="realtime">
            Real-time ({realtimeDisruptions.length})
          </TabsTrigger>
          <TabsTrigger value="forecast">Forecast</TabsTrigger>
          <TabsTrigger value="historical">Historical</TabsTrigger>
          <TabsTrigger value="hotspots">Regional Hotspots</TabsTrigger>
        </TabsList>

        <TabsContent value="realtime" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Disruptions</CardTitle>
              <CardDescription>Currently ongoing events affecting delivery operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {realtimeDisruptions.map((disruption) => (
                <div
                  key={disruption.id}
                  className={`p-4 border-l-4 rounded-lg ${
                    disruption.severity === 'High' || disruption.severity === 'Severe'
                      ? 'border-red-500 bg-red-50'
                      : disruption.severity === 'Medium'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-yellow-500 bg-yellow-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        {getDisruptionIcon(disruption.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{disruption.type}</h3>
                          {getSeverityBadge(disruption.severity)}
                          {getStatusBadge(disruption.status)}
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{disruption.forecast}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-gray-500" />
                            <span className="text-gray-600">{disruption.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3 text-gray-500" />
                            <span className="text-gray-600">
                              {disruption.startTime} ({disruption.duration})
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3 text-gray-500" />
                            <span className="text-gray-600">{disruption.affectedWorkers} workers</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FileCheck className="h-3 w-3 text-gray-500" />
                            <span className="text-gray-600">{disruption.triggeredClaims} claims</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Intensity:</span>
                      <Badge variant="outline">{disruption.intensity}</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Bell className="h-4 w-4 mr-2" />
                        Send Alert
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecast" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>5-Day Weather & AQI Forecast</CardTitle>
              <CardDescription>Predicted disruptions and expected claim volume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {weatherForecast.map((day) => (
                  <div
                    key={day.day}
                    className={`p-4 border rounded-lg ${
                      day.risk === 'High'
                        ? 'bg-red-50 border-red-200'
                        : day.risk === 'Medium'
                        ? 'bg-orange-50 border-orange-200'
                        : 'bg-green-50 border-green-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="font-semibold">{day.day}</p>
                          <p className="text-sm text-gray-600">{day.condition}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Temp</p>
                            <p className="font-semibold">{day.temp}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">AQI</p>
                            <p className="font-semibold">{day.aqi}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Risk</p>
                            <div>{getSeverityBadge(day.risk)}</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Expected Claims</p>
                        <p className="text-2xl font-bold text-blue-600">{day.expectedClaims}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="historical" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Historical Disruptions</CardTitle>
              <CardDescription>Past events and their impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Event ID</th>
                      <th className="text-left py-3 px-2">Type</th>
                      <th className="text-left py-3 px-2">Location</th>
                      <th className="text-left py-3 px-2">Date</th>
                      <th className="text-left py-3 px-2">Intensity</th>
                      <th className="text-right py-3 px-2">Duration</th>
                      <th className="text-right py-3 px-2">Workers</th>
                      <th className="text-right py-3 px-2">Claims</th>
                      <th className="text-right py-3 px-2">Payout</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historicalDisruptions.map((event) => (
                      <tr key={event.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-2 font-medium">{event.id}</td>
                        <td className="py-3 px-2">
                          <Badge variant="outline">{event.type}</Badge>
                        </td>
                        <td className="py-3 px-2">{event.location}</td>
                        <td className="py-3 px-2">{event.date}</td>
                        <td className="py-3 px-2 text-sm">{event.intensity}</td>
                        <td className="text-right py-3 px-2">{event.duration}</td>
                        <td className="text-right py-3 px-2">{event.affectedWorkers}</td>
                        <td className="text-right py-3 px-2">{event.triggeredClaims}</td>
                        <td className="text-right py-3 px-2 text-green-600 font-semibold">
                          ₹{event.totalPayout.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disruption Trends</CardTitle>
              <CardDescription>Monthly breakdown by disruption type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={disruptionTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#888888" fontSize={12} />
                  <YAxis stroke="#888888" fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="weather" fill="#3b82f6" name="Weather" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="pollution" fill="#f59e0b" name="Pollution" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="curfew" fill="#ef4444" name="Curfew" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="heat" fill="#eab308" name="Heat" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hotspots" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Regional Hotspots</CardTitle>
              <CardDescription>Areas with highest disruption frequency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {regionalHotspots.map((region) => (
                  <div key={region.region} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold">{region.region}</h3>
                      </div>
                      {getSeverityBadge(region.severity)}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Events</span>
                        <span className="font-semibold">{region.events}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Most Common</span>
                        <Badge variant="outline" className="text-xs">
                          {region.topType}
                        </Badge>
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
