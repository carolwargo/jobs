// src/components/DashboardComponents/Insights.jsx
import { styled } from "@mui/material/styles";
import { Grid, Paper, Typography, Box } from "@mui/material";

export default function Insights() {
  const GridWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
  }));

  return (
 
      <GridWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>Insights</Typography>
          </Grid>

          <Grid item xs={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">User Demographics</Typography>
              <Typography variant="body2">Age 25-34: 45%</Typography>
              <Typography variant="body2">Location: USA (60%)</Typography>
              <Box sx={{ mt: 2, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body2">[Demographics Chart]</Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Behavior Trends</Typography>
              <Typography variant="body2">Return Users: 65%</Typography>
              <Typography variant="body2">Click-Through Rate: 3.2%</Typography>
              <Box sx={{ mt: 2, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body2">[Behavior Graph]</Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Device Usage</Typography>
              <Typography variant="body2">Mobile: 70%</Typography>
              <Typography variant="body2">Desktop: 25%</Typography>
              <Typography variant="body2">Tablet: 5%</Typography>
              <Box sx={{ mt: 2, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body2">[Device Pie Chart]</Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Key Takeaways</Typography>
              <Typography variant="body2">
                Engagement is highest among mobile users aged 25-34. Targeted mobile campaigns could boost conversions by up to 20%.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </GridWrapper>
 
  );
}
