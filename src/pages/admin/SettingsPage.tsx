import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button, 
  Grid,
  Paper
} from '@mui/material';

const SettingsPage = () => {
  const [appName, setAppName] = useState('Onboard Bulk Mail');
  const [adminEmail, setAdminEmail] = useState('admin@example.com');

  const handleSaveSettings = () => {
    console.log('Saving settings:', { appName, adminEmail });
    // Add real save logic here
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Application Settings
      </Typography>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Application Name"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Admin Email"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              variant="outlined"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveSettings}
            >
              Save Settings
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SettingsPage;
