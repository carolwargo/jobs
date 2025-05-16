import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CardActions,
  CssBaseline,
  Dialog,
  DialogContent,
  Fab,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Paper,
  Stack,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  styled,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";
import MoreIcon from "@mui/icons-material/MoreVert";
import Badge from "@mui/material/Badge";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";


import GirlCamera from "../../assets/images/GirlCamera.png";


import messages from '../../data/messages'; // Import messages from a separate file

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#1976d2" },
    secondary: { main: "#ff4081" },
  },
});



const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function BottomAppBar() {
  const [open, setOpen] = React.useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    handleCloseModal();
  };
  const fabRef = React.useRef(null);
  const listRef = React.useRef(null);

  const handleScrollToNotifications = () => {
    listRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={darkTheme} className="shadow">
      <CssBaseline />
      <Paper square sx={{ pb: "50px" }}>
        <Typography variant="h5" sx={{ p: 2, pb: 0 }}>
          Notifications
        </Typography>

        <List ref={listRef} sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {(id === 1 || id === 3) && (
                <ListSubheader sx={{ bgcolor: "background.default" }}>
                  {id === 1 ? "Today" : "Yesterday"}
                </ListSubheader>
              )}
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItemButton>
            </React.Fragment>
          ))}
        </List>

        {/* Bottom App Bar */}
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar>


<IconButton color="inherit" onClick={handleScrollToNotifications}>
  <Badge badgeContent={3} color="error">
    <NotificationsIcon />
  </Badge>
</IconButton>



            <StyledFab
              ref={fabRef}
              color="secondary"
              aria-label="add"
              onClick={handleOpenModal}
            >
              <AddIcon />
            </StyledFab>

            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Paper>

      {/* Modal Dialog */}
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
        aria-labelledby="post-position-title"
        aria-describedby="post-position-description"
      >
        <form onSubmit={handleSubmit}>
          <DialogContent
            id="post-position-description"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              px: 2,
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ mb: 2, ml: 1 }}
            >
              <Avatar alt="Username" src={GirlCamera} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Jocelyn Doe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  @jocelyndoe
                </Typography>
              </Box>
            </Stack>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ ml: 1, mb: 2 }}
            >
              Find the perfect candidate.
            </Typography>
            <TextField
              label="Job Title"
              type="text"
              fullWidth
              required
              size="small"
              sx={{ "& .MuiInputBase-input": { py: 1 } }}
            />
            <TextField
              label="Company Name"
              type="text"
              fullWidth
              required
              size="small"
              sx={{ "& .MuiInputBase-input": { py: 1 } }}
            />
            <TextField
              label="Location"
              type="text"
              fullWidth
              required
              size="small"
              sx={{ "& .MuiInputBase-input": { py: 1 } }}
            />
            <TextField
              label="Salary"
              type="text"
              fullWidth
              required
              size="small"
              sx={{ "& .MuiInputBase-input": { py: 1 } }}
            />
            <TextField
              label="Job Description"
              type="text"
              fullWidth
              required
              size="small"
              multiline
              rows={4}
              sx={{ "& .MuiInputBase-input": { py: 1 } }}
            />
          </DialogContent>

          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button onClick={handleCloseModal} autoFocus>
              Cancel
            </Button>
            <Button variant="contained" color="primary">
              Post
            </Button>
          </CardActions>
        </form>
      </Dialog>
    </ThemeProvider>
  );
}

/**Now can you separate data to go into ./src/constants/BottomAppBar.jsx?  */
