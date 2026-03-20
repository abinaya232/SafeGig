import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth, UserRole } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Shield, TrendingUp, CloudRain, Bike } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('worker');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(email, password, role);
      navigate(role === 'worker' ? '/worker' : '/admin');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Illustration & Info */}
        <div className="hidden md:block space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">SafeGig</h1>
                <p className="text-sm text-gray-600">AI-Powered Parametric Insurance</p>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Protect Your Income from External Disruptions
            </h2>
            <p className="text-lg text-gray-600">
              Automatic payouts when extreme weather, pollution, or curfews impact your delivery earnings
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <CloudRain className="h-8 w-8 text-blue-600 mb-2" />
              <h3 className="font-semibold mb-1">Weather Protection</h3>
              <p className="text-sm text-gray-600">Auto-triggered during extreme weather</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
              <h3 className="font-semibold mb-1">Instant Payouts</h3>
              <p className="text-sm text-gray-600">Receive claims within 24 hours</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <Bike className="h-8 w-8 text-purple-600 mb-2" />
              <h3 className="font-semibold mb-1">For Gig Workers</h3>
              <p className="text-sm text-gray-600">Designed for delivery partners</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <Shield className="h-8 w-8 text-orange-600 mb-2" />
              <h3 className="font-semibold mb-1">Low Premiums</h3>
              <p className="text-sm text-gray-600">AI-calculated affordable rates</p>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>Login to access your insurance dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Login As</Label>
                <Select value={role} onValueChange={(value) => setRole(value as UserRole)}>
                  <SelectTrigger id="role">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="worker">Delivery Worker</SelectItem>
                    <SelectItem value="admin">Admin (Insurance Provider)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>

              <div className="flex items-center justify-between text-sm">
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot password?
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  Sign up
                </a>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t">
              <p className="text-xs text-gray-500 text-center">
                Demo credentials: Use any email/password with your selected role
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
