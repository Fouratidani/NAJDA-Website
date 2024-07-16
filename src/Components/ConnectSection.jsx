
import { Container, Box, Button, Typography, Card, CardContent, CardMedia } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const ConnectSection = () => {
  return (
    <Box sx={{ background: '#4e54c8', color: 'white', padding: '2rem 0' }}>
      <Container maxWidth="lg">
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, backgroundColor: 'inherit', boxShadow: 'none' }}>
          <CardMedia
            component="img"
            image="community.png"
            alt="Community"
            sx={{
              width: { xs: '100%', md: '50%' },
              height: { xs: 'auto', md: '100%' },
              borderRadius: '10px',
            }}
          />
          <CardContent sx={{ flex: 1, textAlign: 'center', color: 'white' }}>
            <Typography variant="h4" gutterBottom>
              Join the Community
            </Typography>
            <Typography variant="body1" paragraph>
              Become a part of our vibrant community where people from all over Tunisia come together to share their stories and the latest happenings in their neighborhoods.
              Whether it’s a local event, a personal experience, or important news, our platform is here to connect you with others who care about making our country a better place.
              Join us today and be a voice in our growing community.
            </Typography>
            <Box>
              <Button
                href="https://www.facebook.com/groups/your-facebook-group"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FacebookIcon />}
                variant="contained"
                color="primary"
                sx={{ marginRight: 2 }}
              >
                Facebook Group
              </Button>
              <Button
                href="https://www.instagram.com/your-instagram-account"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<InstagramIcon />}
                variant="contained"
                color="secondary"
              >
                Instagram
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ConnectSection;
