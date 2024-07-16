
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const PageHeader = ({ children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      {children}
    </Typography>
  </Box>
);

export default PageHeader;
