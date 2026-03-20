import { createBrowserRouter, Navigate } from 'react-router';
import Login from './pages/Login';
import WorkerDashboard from './pages/WorkerDashboard';
import WorkerBuyInsurance from './pages/WorkerBuyInsurance';
import WorkerCoverage from './pages/WorkerCoverage';
import WorkerClaims from './pages/WorkerClaims';
import WorkerPayouts from './pages/WorkerPayouts';
import WorkerProfile from './pages/WorkerProfile';
import AdminDashboard from './pages/AdminDashboard';
import AdminWorkers from './pages/AdminWorkers';
import AdminPolicies from './pages/AdminPolicies';
import AdminClaims from './pages/AdminClaims';
import AdminFraud from './pages/AdminFraud';
import AdminAnalytics from './pages/AdminAnalytics';
import AdminDisruptions from './pages/AdminDisruptions';
import Placeholder from './pages/Placeholder';
import { DashboardLayout } from './components/DashboardLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/worker',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <WorkerDashboard />,
      },
      {
        path: 'buy-insurance',
        element: <WorkerBuyInsurance />,
      },
      {
        path: 'coverage',
        element: <WorkerCoverage />,
      },
      {
        path: 'claims',
        element: <WorkerClaims />,
      },
      {
        path: 'payouts',
        element: <WorkerPayouts />,
      },
      {
        path: 'profile',
        element: <WorkerProfile />,
      },
    ],
  },
  {
    path: '/admin',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: 'workers',
        element: <AdminWorkers />,
      },
      {
        path: 'policies',
        element: <AdminPolicies />,
      },
      {
        path: 'claims',
        element: <AdminClaims />,
      },
      {
        path: 'fraud',
        element: <AdminFraud />,
      },
      {
        path: 'analytics',
        element: <AdminAnalytics />,
      },
      {
        path: 'disruptions',
        element: <AdminDisruptions />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);