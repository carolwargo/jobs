// components/OverviewComponents/Overview.jsx
import { createTheme } from "@mui/material/styles";
import {
  Grid,
  Paper,
  Typography,
  Box,
  ThemeProvider,
} from "@mui/material";

const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: "class",
  },

});

export default function Dashboard() {

  return (
    <ThemeProvider theme={demoTheme}>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>

{/**col-6 */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">Traffic</Typography>
              <Typography variant="body1">15,000 monthly visitors</Typography>
            </Paper>
          </Grid>

{/**col-6 */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">Engagement</Typography>
              <Typography variant="body1">Avg. session: 2m 30s</Typography>
            </Paper>
          </Grid>

{/**col-12 */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2 }}>
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

          {["Bounce Rate", "Conversion", "Top Page", "Load Time"].map(
            (title, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="subtitle1">{title}</Typography>
                  <Typography variant="h6">Value {i + 1}</Typography>
                </Paper>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
