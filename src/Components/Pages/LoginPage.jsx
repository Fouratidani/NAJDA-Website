import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link as MuiLink
} from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AppNavbar from '../AppNavbar'; // Replace with actual path
import SocialsSection from '../SocialsSection'; // Replace with actual path
import '../../assets/LoginStyle.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Example navigation to dashboard after form submission
    // Replace with your actual navigation logic
    // history.push('/dashboard');
  };

  return (
    <>
      <AppNavbar />
      <div className="login-page">
        <Container component="main" maxWidth="xs" className="card-container">
          <Typography component="h1" variant="h5" align="center">
            Sign in
          </Typography>
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit-button"
              component={Link} // Use Link component from react-router-dom
              to="/dashboard" // Specify the target route
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <MuiLink href="#" variant="body2">
                  Forgot password?
                </MuiLink>
              </Grid>
              <Grid item>
                <MuiLink href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </MuiLink>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
      <SocialsSection />
    </>
  );
};

export default LoginPage;
