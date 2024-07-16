import { Box, Container, Grid, Typography, Card, CardMedia, Button } from '@mui/material';


const DownloadSection = () => {
  return (
    <Box sx={{ color: 'white', background: '#4e54c8', paddingTop: '5rem', paddingBottom: '4rem' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h3" gutterBottom sx={{ marginTop: { xs: '0', md: '-5rem' }, marginBottom: '2rem' }} style={{marginTop:'2rem'}}>
              Download Our App Now
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
              Discover the ultimate solution for staying informed and connected within your community. The Najda App is designed to enhance your security and keep you updated on the latest happenings in your neighborhood. Whether you need to send an SOS call, chat with neighbors, follow aid instructions, or navigate with our integrated map, Najda has got you covered. Our user-friendly interface and powerful features make it easy to stay safe and connected. Download the Najda App now and join a community dedicated to making Tunisia safer and more secure.
            </Typography>
            <Box>
              <Button href="/" target="_blank" rel="noopener noreferrer" sx={{ mr: 2 }} style={{marginLeft:'-0.7rem' ,height:'2rem'}}>
                <img className="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play Store Badge" style={{ width: '150px' }} />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }} sx={{ textAlign: 'center' }}>
            <Card sx={{ backgroundColor: 'inherit', boxShadow: 'none', display: 'flex', justifyContent: 'center' }}>
              <CardMedia
                component="img"
                image="Loading Screen.png"
                alt="Responsive"
                sx={{
                  width: '100%',
                  maxWidth: '15rem',
                  height: 'auto',
                  borderRadius: '10px',
                  marginTop: { xs: '2rem', md: '5rem' },
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DownloadSection;
