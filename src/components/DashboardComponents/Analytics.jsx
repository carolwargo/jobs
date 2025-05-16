// src/components/DashboardComponents/Analytics.jsx
import { styled } from "@mui/material/styles";
import { Grid, Paper, Typography, Box } from "@mui/material";

export default function Analytics() {
  const GridWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
  }));

  return (
    <div>
      <GridWrapper>
        <Grid container spacing={2} gap={2}>
          <Grid item xs={12}>
            <Typography variant="" gutterBottom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat, accusantium veniam illo culpa eos aperiam quam molestiae rem, eaque provident voluptatem corrupti laborum in quis nulla cupiditate asperiores saepe?</Typography>
          </Grid>

          <Grid item xs={3}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="subtitle1">Sessions</Typography>
              <Typography variant="h6">35,400</Typography>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="subtitle1">Users</Typography>
              <Typography variant="h6">28,600</Typography>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="subtitle1">Page Views</Typography>
              <Typography variant="h6">92,300</Typography>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="subtitle1">Bounce Rate</Typography>
              <Typography variant="h6">42%</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">User Engagement Chart</Typography>
              <Box sx={{ height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body2">[Chart placeholder]</Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Top Channels</Typography>
              <Typography variant="body2">Organic Search, Direct, Referral, Social</Typography>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Device Breakdown</Typography>
              <Typography variant="body2">Desktop: 60%, Mobile: 35%, Tablet: 5%</Typography>
            </Paper>
          </Grid>
        </Grid>
      </GridWrapper>
    </div>
  );
}
