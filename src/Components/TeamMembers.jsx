
import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material';

const members = [
  { name: 'Mehrez Belkadhi', role: 'SAMU' },
  { name: 'Hamida Mazraoui', role: 'CRT' },
  // Add more members as needed
];

const TeamMembers = () => (
  <Grid container spacing={3}>
    {members.map((member, index) => (
      <Grid item xs={12} md={6} key={index}>
        <Card>
          <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 2 }}>{member.name.charAt(0)}</Avatar>
            <div>
              <Typography variant="h6">{member.name}</Typography>
              <Typography color="textSecondary">{member.role}</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default TeamMembers;
