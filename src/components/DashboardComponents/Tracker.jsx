import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Stack,
  Typography,
} from '@mui/material';

import SettingsIcon from '@mui/icons-material/Settings';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import UpdateIcon from '@mui/icons-material/Update';

import { stepConnectorClasses } from '@mui/material/StepConnector';

// --- Custom Styled Components ---
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles?.('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const ColorConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 22 },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    backgroundImage: 'linear-gradient(to right, #00c6ff, #0072ff)',
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    backgroundImage: 'linear-gradient(to right, #00c6ff, #0072ff)',
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
}));

const StepIconRoot = styled('div')(({ ownerState }) => ({
  backgroundColor: '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage: 'linear-gradient(to right, #00c6ff, #0072ff)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage: 'linear-gradient(to right, #00c6ff, #0072ff)',
  }),
}));

function StepIconComponent(props) {
  const { active, completed, className, icon } = props;
  const icons = {
    1: <SettingsIcon />,
    2: <DesignServicesIcon />,
    3: <CodeIcon />,
    4: <BugReportIcon />,
    5: <RocketLaunchIcon />,
    6: <UpdateIcon />,
  };

  return (
    <StepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </StepIconRoot>
  );
}

export default function Dashboard() {
  const steps = [
    'Planning',
    'Design',
    'Development',
    'Testing',
    'Deployment',
    'Maintenance',
  ];

  // Stepper section only uses theme + media query
  const StepperSection = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
      <Box className="mb-4">
        <Typography variant="h5" gutterBottom>
          Website Development Steps
        </Typography>
        <Paper elevation={3} sx={{ p: { xs: 2, md: 3 }, mb: 3 }}>
          <Stack sx={{ width: '100%' }} spacing={4}>
            <Stepper
              alternativeLabel={!isSmallScreen}
              orientation={isSmallScreen ? 'vertical' : 'horizontal'}
              activeStep={2}
              connector={isSmallScreen ? null : <ColorConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={StepIconComponent}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </Paper>
      </Box>
    );
  };

  return (
    <Box>
      <StepperSection />

      {/* Tasks Section 
      <Box className="mb-4">
        <Paper elevation={3} sx={{ p: { xs: 2, md: 3 }, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Tasks
          </Typography>
          <Grid sx={{ width: '100%' }} spacing={4}></Grid>
        </Paper>
      </Box>
      */}
    </Box>
  );
}
