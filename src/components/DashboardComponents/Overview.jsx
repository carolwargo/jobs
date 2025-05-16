// components/OverviewComponents/Overview.jsx
import { Grid, Paper, Typography, Box } from "@mui/material";

export default function Overview() {
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
      {console.log("Rendering Overview component")}

      {/* Row 1: Two 50% columns */}
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          maxWidth: "100%",
          mb: 2,
          flexWrap: "wrap",
          backgroundColor: "rgba(0, 255, 0, 0.1)", // Debug: Green
          "& > .MuiGrid-item": {
            border: "1px dashed red",
            boxSizing: "border-box",
          },
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} sx={{ p: 2, height: "100%", minHeight: 100 }}>
            <Typography variant="h6">Traffic</Typography>
            <Typography variant="body1">15,000 monthly visitors</Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} sx={{ p: 2, height: "100%", minHeight: 100 }}>
            <Typography variant="h6">Engagement</Typography>
            <Typography variant="body1">Avg. session: 2m 30s</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Row 2: One 100% column */}
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          maxWidth: "100%",
          mb: 2,
          flexWrap: "wrap",
          backgroundColor: "rgba(0, 0, 255, 0.1)", // Debug: Blue
          "& > .MuiGrid-item": {
            border: "1px dashed red",
            boxSizing: "border-box",
          },
        }}
      >
        <Grid size={{ xs: 12, md: 12 }}>
          <Paper elevation={3} sx={{ p: 2, minHeight: 200 }}>
            <Typography variant="h6">Visitor Trends</Typography>
            <Box
              sx={{
                height: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2">[Chart goes here]</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Row 3: Four 25% columns */}
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          maxWidth: "100%",
          flexWrap: "wrap",
          backgroundColor: "rgba(255, 0, 0, 0.1)", // Debug: Red
          "& > .MuiGrid-item": {
            border: "1px dashed red",
            boxSizing: "border-box",
          },
        }}
      >
        {["Bounce Rate", "Conversion", "Top Page", "Load Time"].map((title, i) => (
          <Grid size={{ xs: 12, md: 3 }} key={i}>
            <Paper elevation={3} sx={{ p: 2, height: "100%", minHeight: 100 }}>
              <Typography variant="subtitle1">{title}</Typography>
              <Typography variant="h6">Value {i + 1}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}