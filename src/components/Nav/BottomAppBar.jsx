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

import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import MoreIcon from "@mui/icons-material/MoreVert";

import GirlCamera from "../../assets/images/GirlCamera.png";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#1976d2" },
    secondary: { main: "#ff4081" },
  },
});

const messages = [
  {
    id: 1,
    primary: "Hair Color Consultation",
    secondary:
      "Hey! Thinking of going auburn this fall—can I book a quick consult?",
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 2,
    primary: "Birthday Glam Ideas",
    secondary:
      "Any suggestions for a bold birthday look? I want to go full glam with lashes!",
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 3,
    primary: "New Skincare Routine",
    secondary: "Started the new Vitamin C serum today—will share results soon!",
    person: "/static/images/avatar/2.jpg",
  },
  {
    id: 4,
    primary: "Lash Extension Appointment",
    secondary:
      "Yes! I’m booked for Friday at 3 PM. Can’t wait to try the hybrid set!",
    person: "/static/images/avatar/3.jpg",
  },
  {
    id: 5,
    primary: "Makeup Masterclass Invite",
    secondary:
      "There’s a live demo on contouring this weekend. Want to join me?",
    person: "/static/images/avatar/4.jpg",
  },
  {
    id: 6,
    primary: "Product Restock Alert",
    secondary:
      "Just got the email—your favorite setting spray is finally back in stock!",
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 7,
    primary: "Salon Launch Party",
    secondary:
      "We’re hosting a soft launch Friday night. Cocktails, demos, and giveaways!",
    person: "/static/images/avatar/1.jpg",
  },
];

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
    <ThemeProvider theme={darkTheme}>
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
              <MenuIcon />
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
