import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ElevatorIcon from '@mui/icons-material/Elevator';
import EngineeringIcon from '@mui/icons-material/Engineering';

const SidebarData = [
    {
        id: 1,
        title: 'Dashboard',
        href: '/',
        permission: true,
        icon: <DashboardIcon />,
    },
    {
        id: 6,
        title: 'Users',
        href: '/users',
        permission: true,
        icon: <PeopleIcon />,
    },
    {
        id: 3,
        title: 'Masters',
        href: '/masters',
        icon: <EngineeringIcon />,
        permission: true,
        children: [
            {
                id: 4,
                title: 'Roles',
                href: '/master/roles',
                permission: true,
                icon: <ElevatorIcon />,
            },
        ]
    },
    {
        id: 7,
        title: 'Login',
        href: '/auth/login',
        permission: true,
        icon: <PeopleIcon />,
    },
    {
        id: 8,
        title: 'Register',
        href: '/auth/register',
        permission: true,
        icon: <PeopleIcon />,
    },
];

export default SidebarData;
