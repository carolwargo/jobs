// components/DashboardComponents/Assessment.jsx
import { Grid, Paper, Typography, Box } from "@mui/material";

export default function Assessment() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        p: { xs: 1, md: 2 },
        overflow: "visible",
        boxSizing: "border-box",
      }}
    >
      {console.log("Rendering Assessment component")}

      <Grid
        container
        spacing={2}
      
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} sx={{ p: 2, minHeight: 150 }}>
            <Typography variant="h6">Performance</Typography>
            <Typography variant="body1">Score: 85%</Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} sx={{ p: 2, minHeight: 150 }}>
            <Typography variant="h6">Risk Assessment</Typography>
            <Typography variant="body1">Low risk</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}