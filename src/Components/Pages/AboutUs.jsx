import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import AppNavbar from '../AppNavbar';
const AboutUs = () => {

  const teamMembers = [
    {
      name: 'Fourat Idani',
      role: 'Co-founder of NAJDA',
      bio: 'Web Developer/Graphic designer, 2nd year computer science student at ISITCOM, an IEEE Volunteer and a musician.',
      image: 'fourat1.jpg', 
    },
    {
      name: 'Hamza Trabelsi',
      role: 'Co-founder of NAJDA',
      bio: 'Programmer, 1st year engineering student at [University], passionate about AI.',
      image: 'hamza1.jpeg', 
    },
  ];

  return (
    <>
    <AppNavbar />
    <Box sx={{ background: '#4e54c8', color: 'white', paddingTop: '10rem', paddingBottom: '5rem', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'inherit', boxShadow: 'none' }}>
              <CardMedia
                component="img"
                image="logo.svg"
                alt="najda-logo"
                sx={{
                  width: '100%',
                  maxWidth: '15rem',
                  height: 'auto',
                  borderRadius: '10px',
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card sx={{ backgroundColor: 'inherit', boxShadow: 'none', marginBottom: '2rem' }}>
              <CardContent>
                <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant="body1" sx={{ color: 'white' }}>
                  We are a small team of dedicated students who have identified significant challenges within the security measures in Tunisia. Our passion for our country drives us to take action and work tirelessly to enhance its safety and security. With a commitment to innovation and community, we are ready to make a meaningful impact and contribute to a safer future for all Tunisians.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Team Members Section */}
        <Typography variant="h4" gutterBottom sx={{ color: 'white', marginTop: '2rem', textAlign: 'center' }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ backgroundColor: 'inherit', boxShadow: 'none', color: 'white' }}>
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{ height: 300, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </>
  );
};

export default AboutUs;
