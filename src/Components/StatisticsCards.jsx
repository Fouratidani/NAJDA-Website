
import { Grid, Card, CardContent, Typography } from '@mui/material';

const StatisticCard = ({ title, value }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" component="div">
        {title}
      </Typography>
      <Typography variant="h4" component="div">
        {value}
      </Typography>
    </CardContent>
  </Card>
);

const StatisticsCards = () => (
  <Grid container spacing={3} justifyContent="center" alignItems="center">
    <Grid item xs={12} sm={6} md={3}>
      <StatisticCard title="Tutorials" value="4" />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <StatisticCard title="Points" value="500" />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <StatisticCard title="Rank" value="300" />
    </Grid>
    
  </Grid>
);

export default StatisticsCards;
