import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Switch } from '../components/ui/switch';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Shield,
  Bell,
  CreditCard,
  Lock,
  CheckCircle,
  Edit,
  Camera,
  Smartphone,
  Building,
  Calendar,
  TrendingUp,
  Award,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function WorkerProfile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    address: 'Sector 62, Noida, Uttar Pradesh',
    pincode: '201301',
    dateOfBirth: '1995-06-15',
    platform: 'Swiggy',
    vehicleNumber: 'DL-8C-AB-1234',
    vehicleType: 'Motorcycle',
    emergencyContact: '+91 98765 43211',
  });

  const [notifications, setNotifications] = useState({
    claimUpdates: true,
    payoutAlerts: true,
    weatherAlerts: true,
    policyRenewal: true,
    smsNotifications: false,
    emailNotifications: true,
  });

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Profile</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar - Profile Summary */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <Avatar className="w-24 h-24">
                    <AvatarFallback className="bg-blue-600 text-white text-3xl">
                      {profileData.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Camera className="h-4 w-4 text-white" />
                  </button>
                </div>
                <h2 className="text-xl font-bold mt-4">{profileData.name}</h2>
                <p className="text-sm text-gray-500">{profileData.email}</p>
                <Badge className="mt-3 bg-green-100 text-green-700">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified Account
                </Badge>
              </div>

              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Member Since</span>
                  <span className="font-medium">Jan 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Active Policies</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Claims</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Risk Score</span>
                  <Badge variant="outline" className="border-green-500 text-green-700">
                    Low
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Award className="h-4 w-4 text-yellow-600" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Insured Pro</p>
                  <p className="text-xs text-gray-500">10+ policies purchased</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Early Adopter</p>
                  <p className="text-xs text-gray-500">Joined in first month</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Verified User</p>
                  <p className="text-xs text-gray-500">All documents verified</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="personal" className="space-y-4">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="work">Work Info</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Personal Information */}
            <TabsContent value="personal">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </div>
                  <Button
                    variant={isEditing ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Save Changes
                      </>
                    ) : (
                      <>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Profile
                      </>
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-500" />
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        disabled={!isEditing}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        disabled={!isEditing}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        disabled={!isEditing}
                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dob" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        Date of Birth
                      </Label>
                      <Input
                        id="dob"
                        type="date"
                        value={profileData.dateOfBirth}
                        disabled={!isEditing}
                        onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        Address
                      </Label>
                      <Input
                        id="address"
                        value={profileData.address}
                        disabled={!isEditing}
                        onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pincode">PIN Code</Label>
                      <Input
                        id="pincode"
                        value={profileData.pincode}
                        disabled={!isEditing}
                        onChange={(e) => setProfileData({ ...profileData, pincode: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="emergency">Emergency Contact</Label>
                      <Input
                        id="emergency"
                        value={profileData.emergencyContact}
                        disabled={!isEditing}
                        onChange={(e) => setProfileData({ ...profileData, emergencyContact: e.target.value })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Work Information */}
            <TabsContent value="work">
              <Card>
                <CardHeader>
                  <CardTitle>Work Information</CardTitle>
                  <CardDescription>Your delivery platform and vehicle details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="platform" className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-gray-500" />
                        Delivery Platform
                      </Label>
                      <Input id="platform" value={profileData.platform} disabled={!isEditing} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="vehicle-type">Vehicle Type</Label>
                      <Input id="vehicle-type" value={profileData.vehicleType} disabled={!isEditing} />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="vehicle-number">Vehicle Registration Number</Label>
                      <Input id="vehicle-number" value={profileData.vehicleNumber} disabled={!isEditing} />
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-semibold mb-3">Work Statistics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Avg Hours/Week</p>
                        <p className="text-2xl font-bold text-blue-600">42</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Primary Zone</p>
                        <p className="text-lg font-bold text-green-600">Noida</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Active Days</p>
                        <p className="text-2xl font-bold text-purple-600">6/7</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Documents</CardTitle>
                  <CardDescription>Verification and compliance documents</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Aadhaar Card</p>
                        <p className="text-sm text-gray-500">Verified on Jan 15, 2024</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Verified</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Driving License</p>
                        <p className="text-sm text-gray-500">Verified on Jan 15, 2024</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Verified</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Vehicle Registration</p>
                        <p className="text-sm text-gray-500">Verified on Jan 15, 2024</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Verified</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payment Methods */}
            <TabsContent value="payment">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Manage your payout preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border-2 border-blue-200 bg-blue-50 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Smartphone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">UPI (Primary)</p>
                          <p className="text-sm text-gray-600">rajesh@paytm</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        Set as Default
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Building className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-semibold">Bank Account</p>
                          <p className="text-sm text-gray-600">HDFC Bank •••• 6789</p>
                        </div>
                      </div>
                      <Badge variant="outline">Backup</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Payout Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Auto-accept payouts</p>
                      <p className="text-sm text-gray-500">Automatically accept approved claims</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Instant payouts</p>
                      <p className="text-sm text-gray-500">Receive money within 1 hour (extra fee applies)</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings */}
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notifications
                  </CardTitle>
                  <CardDescription>Manage your notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Claim Updates</p>
                      <p className="text-sm text-gray-500">Get notified about claim status changes</p>
                    </div>
                    <Switch
                      checked={notifications.claimUpdates}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, claimUpdates: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Payout Alerts</p>
                      <p className="text-sm text-gray-500">Notifications for successful payouts</p>
                    </div>
                    <Switch
                      checked={notifications.payoutAlerts}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, payoutAlerts: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Weather Alerts</p>
                      <p className="text-sm text-gray-500">Real-time disruption notifications</p>
                    </div>
                    <Switch
                      checked={notifications.weatherAlerts}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, weatherAlerts: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Policy Renewal</p>
                      <p className="text-sm text-gray-500">Reminders for policy expiration</p>
                    </div>
                    <Switch
                      checked={notifications.policyRenewal}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, policyRenewal: checked })
                      }
                    />
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-4">Notification Channels</h4>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-gray-500">Receive updates via email</p>
                      </div>
                      <Switch
                        checked={notifications.emailNotifications}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, emailNotifications: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">SMS Notifications</p>
                        <p className="text-sm text-gray-500">Receive updates via SMS</p>
                      </div>
                      <Switch
                        checked={notifications.smsNotifications}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, smsNotifications: checked })
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Security
                  </CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Password</p>
                      <p className="text-sm text-gray-500">Last changed 2 months ago</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change Password
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500">Add an extra layer of security</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enable
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Active Sessions</p>
                      <p className="text-sm text-gray-500">Manage your active login sessions</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600">Danger Zone</CardTitle>
                  <CardDescription>Irreversible account actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-4 border border-red-200 bg-red-50 rounded-lg">
                    <div>
                      <p className="font-medium text-red-900">Deactivate Account</p>
                      <p className="text-sm text-red-700">Temporarily disable your account</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-red-300 text-red-700">
                      Deactivate
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-red-200 bg-red-50 rounded-lg">
                    <div>
                      <p className="font-medium text-red-900">Delete Account</p>
                      <p className="text-sm text-red-700">Permanently delete your account and data</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-red-300 text-red-700">
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
