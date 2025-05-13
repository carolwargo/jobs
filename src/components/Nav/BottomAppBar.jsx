import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  AppBar,
  Box,
  CssBaseline,
    Stack,
  Toolbar,
  Typography,
  Paper,
  Fab,
  IconButton,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Avatar,
  Dialog,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import MoreIcon from '@mui/icons-material/MoreVert';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import GirlCamera from '../../assets/images/GirlCamera.png';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

const messages = [
  {
    id: 1,
    primary: 'Hair Color Consultation',
    secondary: "Hey! Thinking of going auburn this fall—can I book a quick consult?",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: 'Birthday Glam Ideas',
    secondary: "Any suggestions for a bold birthday look? I want to go full glam with lashes!",
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: 'New Skincare Routine',
    secondary: 'Started the new Vitamin C serum today—will share results soon!',
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: 'Lash Extension Appointment',
    secondary: 'Yes! I’m booked for Friday at 3 PM. Can’t wait to try the hybrid set!',
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: 'Makeup Masterclass Invite',
    secondary: 'There’s a live demo on contouring this weekend. Want to join me?',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 6,
    primary: 'Product Restock Alert',
    secondary: 'Just got the email—your favorite setting spray is finally back in stock!',
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 7,
    primary: 'Salon Launch Party',
    secondary: 'We’re hosting a soft launch Friday night. Cocktails, demos, and giveaways!',
    person: '/static/images/avatar/1.jpg',
  },
];



const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  const [openModal, setOpenModal] = React.useState(false);
  const listRef = React.useRef(null); // Ref for scrolling

  const handleOpenModal = () => {
    console.log('Modal opened');
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);

  const handleScrollToNotifications = () => {
    listRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* Page Content */}
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom sx={{ p: 2, pb: 0 }}>
          Notifications
        </Typography>
        <List sx={{ mb: 2 }} ref={listRef}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.default' }}>
                  Today
                </ListSubheader>
              )}
              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.default' }}>
                  Yesterday
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
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="scroll to notifications" onClick={handleScrollToNotifications}>
              <MenuIcon />
            </IconButton>

            <StyledFab color="secondary" aria-label="add" onClick={handleOpenModal}>
              <AddIcon />
            </StyledFab>

            <Box sx={{ flexGrow: 1 }} />

            <IconButton color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Paper>

      {/* Modal with Card */}
      <Dialog open={openModal} onClose={handleCloseModal} sx={{ zIndex: 1300 }}>
  <Card sx={{ width: '100%', maxWidth: 500, mx: 'auto', p: 1 }}>
      <CardContent>
        <Typography variant="h6" sx={{fontWeight: 300, ml: 1}} gutterBottom>
  Post a Job, Fill a Job.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ ml: 1, mb: 2 }}>
        Find the perfect candidate.
</Typography>
<hr />
  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2, ml: 1 }}>
  <Avatar alt="Username" src={GirlCamera}  />
  <Typography variant="subtitle1" fontWeight="bold">
   Jocelyn Doe <br />
    <Typography variant="body2" color="text.secondary">
        @jocelyndoe 
        </Typography>
  </Typography>
</Stack>


        <TextField
  fullWidth
  label="Job Title"
  variant="outlined"
  sx={{ mb: 1 }}
  slotProps={{
    input: {
      sx: {
        fontSize: '0.7rem',

      },
    },
    label: {
      sx: {
        fontSize: '0.7rem',
      },
    },
  }}
/>

<TextField
  fullWidth
  label="Company Name"
  variant="outlined"
  sx={{ mb: 1 }}
  slotProps={{
    input: {
      sx: {
        fontSize: '0.7rem',

      },
    },
    label: {
      sx: {
        fontSize: '0.7rem',
      },
    },
  }}
/>

<TextField
  fullWidth
  label="Location"
  variant="outlined"
  sx={{ mb: 1 }}
  slotProps={{
    input: {
      sx: {
        fontSize: '0.7rem',
 
      },
    },
    label: {
      sx: {
        fontSize: '0.7rem',
      },
    },
  }}
/>

<TextField
  fullWidth
  label="Salary"
  variant="outlined"
  sx={{ mb: 1 }}
  slotProps={{
    input: {
      sx: {
        fontSize: '0.7rem',
      
      },
    },
    label: {
      sx: {
        fontSize: '0.7rem',
      },
    },
  }}
/>

<TextField
  fullWidth
  label="Job Description"
  multiline
  rows={4}
  variant="outlined"
  slotProps={{
    input: {
      sx: {
        fontSize: '0.7rem',
        py: 1,
      },
    },
    label: {
      sx: {
        fontSize: '0.7rem',
      },
    },
  }}
/>

      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button onClick={handleCloseModal}>Cancel</Button>
        <Button variant="contained" color="primary">
          Post
        </Button>
      </CardActions>
    </Card>
      </Dialog>
    </ThemeProvider>
  );
}
