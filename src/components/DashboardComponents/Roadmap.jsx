// components/DashboardComponents/Tracker.jsx
import { Grid, Paper, Typography, Box } from "@mui/material";

export default function Tracker() {
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
      {console.log("Rendering Tracker component")}

      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          maxWidth: "100%",
          backgroundColor: "rgba(0, 255, 0, 0.1)", // Debug: Green
        }}
      >
        {[1, 2, 3].map((item) => (
          <Grid size={{ xs: 12, md: 12 }} key={item}>
            <Paper elevation={3} sx={{ p: 2, minHeight: 100 }}>
              <Typography variant="h6">Milestone {item}</Typography>
              <Typography variant="body1">Track progress here.</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}