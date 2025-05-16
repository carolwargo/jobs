//ICON IMPORTS
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import CalenderIcon from '@mui/icons-material/CalendarToday';
import LayersIcon from '@mui/icons-material/Layers';
import AssessmentIcon from '@mui/icons-material/Assessment';


const dashboardnavigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard',
  },
    {
    segment: 'overview',
    title: 'Overview',
    icon: <DashboardIcon />,

    path: '/overview',
  },
    {
    segment: 'roadmap',
    title: 'Roadmap',
    icon: <DashboardIcon />,
    path: '/roadmap',
  },

  {
    segment: 'tracker',
    title: 'Tracker',
    icon: <CalenderIcon />,
    path: '/tracker',
  },
  {
    segment: 'assessment',
    title: 'Assessment', 
    icon: <AssessmentIcon />,
    path: '/assessment',
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    path: '/reports',
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
        path: '/reports/sales',
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
        path: '/reports/traffic',
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
    path: '/integrations',
  },
  {
    segment: 'budget',
    title: 'Budget',
    icon: <ShoppingCartIcon />,
    path: '/budget',
  },
];

export default dashboardnavigation;
