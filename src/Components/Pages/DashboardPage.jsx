
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from '../Navbar';
import StatisticsCards from '../StatisticsCards';
import HelpGivenChart from '../HelpGivenChart';
import HelpProvidedChart from '../HeplProvidedChart';

import TeamMembers from '../TeamMembers';

import ProgressTracker from '../ProgressTracker';

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ p: 3 }} style={{backgroundColor: "#4e54c8"}}>
        {/* ------------- Stats section ---------------- */}
        <Grid container spacing={3} mt={1} mb={3}>
          <Grid item xs={12} lg={12}>
            <StatisticsCards />
          </Grid>
        </Grid>

        
        {/* ------------- Chart section ---------------- */}
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={7} lg={8} zIndex={1}>
            <HelpGivenChart />
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <HelpProvidedChart />
          </Grid>
        </Grid>
        {/* ------------- Team section ---------------- */}
        <Grid container spacing={3} mb={3}>
                  <Grid item xs={12} md={12} xl={4}>
                    <TeamMembers />
                  </Grid>
                  
                  <Grid item xs={12} md={6} xl={4}>
                    <ProgressTracker />
                  </Grid>
                </Grid>

        

        
      </Box>
    </>
  );
};

export default DashboardPage;
