import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Navbar from './Navbar';
const ProfilePage = () => {
  const [name, setName] = useState('John Doe'); // Initial name state
  const [email, setEmail] = useState('johndoe@example.com'); // Initial email state
  const [phone, setPhone] = useState('123-456-7890'); // Initial phone state
  const [bio, setBio] = useState('This is my bio...'); // Initial bio state
  const [profilePic, setProfilePic] = useState(null); // State for profile picture

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleBioChange = (event) => setBio(event.target.value);
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., save changes to backend)
    console.log('Profile updated:', { name, email, phone, bio, profilePic });
  };

  return (
    <>
    <Navbar />
    <Box sx={{ p: 3 }} style={{backgroundColor:'#4e54c8'}}>
      <Typography variant="h4" gutterBottom>
        Edit Profile
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar
          alt={name}
          src={profilePic}
          sx={{ width: 100, height: 100, mr: 2 }}
        />
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="icon-button-file"
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
        <Typography variant="body1" color="textSecondary">
          Upload Profile Picture
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={handleNameChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          value={phone}
          onChange={handlePhoneChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Bio"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={bio}
          onChange={handleBioChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Save Changes
        </Button>
      </form>
    </Box>
    </>
  );
};

export default ProfilePage;
