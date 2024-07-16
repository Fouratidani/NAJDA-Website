
import { LinearProgress, Typography, Box, Paper } from '@mui/material';

const ProgressTracker = () => (
  <Paper sx={{ p: 2 }}>
    <Typography variant="h6">Courses</Typography>
    <Box sx={{ mt: 2 }}>
      <Typography variant="body1">CPR</Typography>
      <LinearProgress variant="determinate" value={50} sx={{ mb: 2 }} />
      <Typography variant="body1">Accident Aid</Typography>
      <LinearProgress variant="determinate" value={80} />
    </Box>
  </Paper>
);

export default ProgressTracker;
