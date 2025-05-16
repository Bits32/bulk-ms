import React from 'react';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  AppBar, 
  Toolbar, 
  Typography,
  ListItemButton
} from '@mui/material';
import { 
  Dashboard as DashboardIcon, 
  People as PeopleIcon, 
  Article as ArticleIcon, 
  Settings as SettingsIcon 
} from '@mui/icons-material';
import { useNavigate, Outlet } from 'react-router-dom';

const drawerWidth = 240;

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { 
      text: 'Dashboard', 
      icon: <DashboardIcon />, 
      path: '/admin/dashboard' 
    },
    { 
      text: 'Onboard Sections', 
      icon: <PeopleIcon />, 
      path: '/admin/onboard-sections' 
    },
    { 
      text: 'Blogs', 
      icon: <ArticleIcon />, 
      path: '/admin/blogs' 
    },
    { 
      text: 'Settings', 
      icon: <SettingsIcon />, 
      path: '/admin/settings' 
    }
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          width: `calc(100% - ${drawerWidth}px)`, 
          ml: `${drawerWidth}px` 
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text}>
              <ListItemButton onClick={() => navigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ 
          flexGrow: 1, 
          bgcolor: 'background.default', 
          p: 3,
          width: `calc(100% - ${drawerWidth}px)`,
          marginTop: '64px'
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminDashboard; 