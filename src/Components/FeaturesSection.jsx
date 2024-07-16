import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChatIcon from '@mui/icons-material/Chat';
import PhoneIcon from '@mui/icons-material/Phone';
import BookIcon from '@mui/icons-material/Book';

const FeaturesSection = () => {
  const FeatureCard = styled(Card)(({ theme }) => ({
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  }));

  const FeatureIcon = styled(Box)(({ theme }) => ({
    '& svg': {
      fontSize: '3rem',
      color: '#0d6efd',
      marginBottom: theme.spacing(2),
    },
  }));

  const features = [
    {
      icon: <LocationOnIcon />,
      title: 'Map',
      text: 'Go out protected from potential dangers.',
    },
    {
      icon: <ChatIcon />,
      title: 'Chat',
      text: 'Connect with others seamlessly.',
    },
    {
      icon: <PhoneIcon />,
      title: 'SOS Calls',
      text: 'Access emergency assistance easily.',
    },
    {
      icon: <BookIcon />,
      title: 'Aid Instruction',
      text: 'Learn how to provide aid effectively.',
    },
  ];

  return (
    <Container
      maxWidth="x2"
      sx={{
        backgroundColor: '#4e54c8',
        paddingTop: '13rem',
        paddingBottom: '10rem',
      }}
    >
      <Typography variant="h2" align="center" gutterBottom sx={{ color: 'white', marginBottom: '3rem' }}>
        App Features
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <FeatureCard>
              <CardContent>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <Typography variant="h5" component="div">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem' }}>
                  {feature.text}
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturesSection;
