// components/DashboardComponents/Integrations.jsx
import { Grid, Paper, Typography, Box } from "@mui/material";

export default function Integrations() {
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
      {console.log("Rendering Integrations component")}

      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          maxWidth: "100%",
          backgroundColor: "rgba(0, 255, 0, 0.1)", // Debug: Green
        }}
      >
        {["API 1", "API 2", "API 3"].map((api, i) => (
          <Grid size={{ xs: 12, md: 4 }} key={i}>
            <Paper elevation={3} sx={{ p: 2, minHeight: 100 }}>
              <Typography variant="h6">{api}</Typography>
              <Typography variant="body1">Connected</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}