import { NavLink } from 'react-router';
import {
  LayoutDashboard,
  ShieldCheck,
  FileCheck,
  Wallet,
  User,
  Users,
  FileText,
  AlertTriangle,
  BarChart3,
  Settings,
  Cloud,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { cn } from './ui/utils';

export function Sidebar() {
  const { user } = useAuth();

  const workerLinks = [
    { to: '/worker', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/worker/buy-insurance', icon: ShieldCheck, label: 'Buy Insurance' },
    { to: '/worker/coverage', icon: FileCheck, label: 'Active Coverage' },
    { to: '/worker/claims', icon: FileText, label: 'Claims' },
    { to: '/worker/payouts', icon: Wallet, label: 'Payouts' },
    { to: '/worker/profile', icon: User, label: 'Profile' },
  ];

  const adminLinks = [
    { to: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/workers', icon: Users, label: 'Workers' },
    { to: '/admin/policies', icon: FileCheck, label: 'Policies' },
    { to: '/admin/claims', icon: FileText, label: 'Claims' },
    { to: '/admin/fraud', icon: AlertTriangle, label: 'Fraud Detection' },
    { to: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
    { to: '/admin/disruptions', icon: Cloud, label: 'Disruptions' },
    { to: '/admin/settings', icon: Settings, label: 'Settings' },
  ];

  const links = user?.role === 'worker' ? workerLinks : adminLinks;

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4 hidden md:block">
      <nav className="space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/worker' || link.to === '/admin'}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              )
            }
          >
            {({ isActive }) => (
              <>
                <link.icon className={cn('h-5 w-5', isActive ? 'text-blue-700' : 'text-gray-500')} />
                <span>{link.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
