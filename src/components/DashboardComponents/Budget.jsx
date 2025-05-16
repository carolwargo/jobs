// components/DashboardComponents/Budget.jsx
import { Grid, Paper, Typography, Box } from "@mui/material";

export default function Budget() {
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
      {console.log("Rendering Budget component")}

      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          maxWidth: "100%",
          backgroundColor: "rgba(0, 255, 0, 0.1)", // Debug: Green
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} sx={{ p: 2, minHeight: 150 }}>
            <Typography variant="h6">Budget Allocation</Typography>
            <Typography variant="body1">$100,000</Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} sx={{ p: 2, minHeight: 150 }}>
            <Typography variant="h6">Expenses</Typography>
            <Typography variant="body1">$75,000</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}



/** 
       <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={150} />
            </Grid>

            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>

            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
          */