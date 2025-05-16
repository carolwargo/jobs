// src/components/DashboardComponents/Reports.jsx
import { styled } from "@mui/material/styles";
import { Grid, Paper, Typography, Box } from "@mui/material";

export default function Reports() {
  const GridWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
  }));

  return (
    <div>
      <GridWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>Reports</Typography>
          </Grid>

          <Grid item xs={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Sales Report</Typography>
              <Typography variant="body2">Q1 Sales: $150,000</Typography>
              <Typography variant="body2">Q2 Sales: $185,000</Typography>
              <Box sx={{ mt: 2, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body2">[Sales Chart Placeholder]</Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Traffic Report</Typography>
              <Typography variant="body2">Monthly Visitors: 45,000</Typography>
              <Typography variant="body2">Referral Sources: 60%</Typography>
              <Box sx={{ mt: 2, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body2">[Traffic Chart Placeholder]</Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Performance Summary</Typography>
              <Typography variant="body2">Conversion Rate: 3.5%</Typography>
              <Typography variant="body2">Avg. Revenue per User: $42</Typography>
              <Typography variant="body2">Campaign ROI: 120%</Typography>
            </Paper>
          </Grid>
        </Grid>
      </GridWrapper>
    </div>
  );
}
