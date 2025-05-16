import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const DashboardContent: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Total Blogs</Typography>
            <Typography variant="h4">10</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4">25</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Recent Activity</Typography>
            <Typography variant="body2">3 new blogs added this week</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContent; 