// src/components/DashboardComponents/reports/Traffic.jsx
import { styled } from "@mui/material/styles";
import { Grid, Paper, Typography, Box } from "@mui/material";

export default function Traffic() {
  const GridWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
  }));

  return (
    <div>
        <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        p: { xs: 1, md: 2 },
        overflow: "visible",
        boxSizing: "border-box",
      }}
    >
      {console.log("Rendering Sales component")}

    </Box>
      <GridWrapper>

      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          maxWidth: "100%",
          backgroundColor: "rgba(0, 255, 0, 0.1)", // Debug: Green
        }}
      >
        <Grid size={{ xs: 12, md: 12 }}>
          <Paper elevation={3} sx={{ p: 2, minHeight: 200 }}>
            <Typography variant="h6">Sales Report</Typography>
            <Typography variant="body1">Total Revenue: $50,000</Typography>
            <Typography variant="body1">Units Sold: 1,200</Typography>
          </Paper>
        </Grid>
      </Grid>
      </GridWrapper>
    </div>
  );
}



