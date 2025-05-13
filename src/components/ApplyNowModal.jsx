// components/ApplyNowModal.jsx
import { useState, useCallback, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  DialogActions,
  Box,
  Typography,
} from '@mui/material';
import { useDropzone } from 'react-dropzone';

const ApplyNowModal = ({ open, onClose }) => {
  const [resumeFile, setResumeFile] = useState(null);
  const [portfolioFile, setPortfolioFile] = useState(null);

  const onResumeDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setResumeFile(acceptedFiles[0]);
    }
  }, []);

  const onPortfolioDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setPortfolioFile(acceptedFiles[0]);
    }
  }, []);

  const {
    getRootProps: getResumeRootProps,
    getInputProps: getResumeInputProps,
    isDragActive: isResumeDragActive,
  } = useDropzone({
    onDrop: onResumeDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc', '.docx'],
    },
    multiple: false,
  });

  const {
    getRootProps: getPortfolioRootProps,
    getInputProps: getPortfolioInputProps,
    isDragActive: isPortfolioDragActive,
  } = useDropzone({
    onDrop: onPortfolioDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc', '.docx'],
    },
    multiple: false,
  });

  // Effect to manage inert attribute on modal open
  useEffect(() => {
    if (open) {
      // Add inert to the root or other content elements behind the modal
      document.getElementById('root').setAttribute('inert', 'true');
    } else {
      // Remove inert when modal is closed
      document.getElementById('root').removeAttribute('inert');
    }

    return () => {
      document.getElementById('root').removeAttribute('inert');
    };
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Application submitted!
Resume: ${resumeFile?.name || 'None'}
Portfolio: ${portfolioFile?.name || 'None'}`);

    setResumeFile(null);
    setPortfolioFile(null);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      aria-labelledby="apply-now-title"
      aria-describedby="apply-now-description"
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle id="apply-now-title">Apply Now</DialogTitle>
        <DialogContent
          id="apply-now-description"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            px: 2,
          }}
        >
          <TextField
            label="Full Name"
            fullWidth
            required
            size="small"
            autoFocus
            sx={{ '& .MuiInputBase-input': { py: 1 } }}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            size="small"
            sx={{ '& .MuiInputBase-input': { py: 1 } }}
          />
          <TextField
            label="Phone"
            type="tel"
            fullWidth
            required
            size="small"
            sx={{ '& .MuiInputBase-input': { py: 1 } }}
          />

          {/* Resume Upload */}
          <Box
            {...getResumeRootProps()}
            sx={{
              border: '2px dashed #ccc',
              borderRadius: 2,
              padding: 2,
              textAlign: 'center',
              cursor: 'pointer',
              backgroundColor: isResumeDragActive ? '#f0f0f0' : '#fafafa',
            }}
          >
            <input {...getResumeInputProps()} />
            {resumeFile ? (
              <Typography variant="body2">
                Resume Uploaded: <strong>{resumeFile.name}</strong>
              </Typography>
            ) : (
              <Typography variant="body2" color="textSecondary">
                Drag & drop your <strong>Resume</strong> here, or click to select (PDF, DOC, DOCX)
              </Typography>
            )}
          </Box>

          {/* Portfolio Upload */}
          <Box
            {...getPortfolioRootProps()}
            sx={{
              border: '2px dashed #ccc',
              borderRadius: 2,
              padding: 2,
              textAlign: 'center',
              cursor: 'pointer',
              backgroundColor: isPortfolioDragActive ? '#f0f0f0' : '#fafafa',
            }}
          >
            <input {...getPortfolioInputProps()} />
            {portfolioFile ? (
              <Typography variant="body2">
                Portfolio Uploaded: <strong>{portfolioFile.name}</strong>
              </Typography>
            ) : (
              <Typography variant="body2" color="textSecondary">
                Drag & drop your <strong>Portfolio</strong> here, or click to select (PDF, DOC, DOCX)
              </Typography>
            )}
          </Box>

          <TextField
            label="Message"
            multiline
            rows={3}
            fullWidth
            size="small"
            sx={{ fontSize: '0.875rem', '& .MuiInputBase-input': { fontSize: '0.875rem' } }}
          />
        </DialogContent>

        <DialogActions sx={{ py: 0, px: 3, mb: 2 }}>
          <Button onClick={onClose} variant="outlined" autoFocus>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!resumeFile}
          >
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ApplyNowModal;

// components/ApplyNowModal.jsx