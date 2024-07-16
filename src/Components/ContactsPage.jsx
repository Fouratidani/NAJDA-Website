
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Navbar from './Navbar';
const contacts = [
  { id: 1, name: 'John Doe', avatar: '/path/to/avatar1.jpg', lastMessage: 'Hello!', timestamp: '10:00 AM' },
  { id: 2, name: 'Jane Smith', avatar: '/path/to/avatar2.jpg', lastMessage: 'How are you?', timestamp: '9:45 AM' },
  { id: 3, name: 'Mike Johnson', avatar: '/path/to/avatar3.jpg', lastMessage: 'See you soon!', timestamp: '9:30 AM' },
  { id: 3, name: 'Mike Johnson', avatar: '/path/to/avatar3.jpg', lastMessage: 'See you soon!', timestamp: '9:30 AM' },
  { id: 3, name: 'Mike Johnson', avatar: '/path/to/avatar3.jpg', lastMessage: 'See you soon!', timestamp: '9:30 AM' },
  { id: 3, name: 'Mike Johnson', avatar: '/path/to/avatar3.jpg', lastMessage: 'See you soon!', timestamp: '9:30 AM' },
  { id: 3, name: 'Mike Johnson', avatar: '/path/to/avatar3.jpg', lastMessage: 'See you soon!', timestamp: '9:30 AM' },
  { id: 3, name: 'Mike Johnson', avatar: '/path/to/avatar3.jpg', lastMessage: 'See you soon!', timestamp: '9:30 AM' },
  { id: 3, name: 'Mike Johnson', avatar: '/path/to/avatar3.jpg', lastMessage: 'See you soon!', timestamp: '9:30 AM' },
  { id: 3, name: 'Mike Johnson', avatar: '/path/to/avatar3.jpg', lastMessage: 'See you soon!', timestamp: '9:30 AM' },
  // Add more contacts as needed
];

const ContactsPage = () => {
  return (
    <>
    <Navbar />
    <Box sx={{ p: 3 }} style={{backgroundColor: "#4e54c8"}}>
      <Grid container spacing={2} style={{backgroundColor: "white", borderRadius:'.5rem'}}>
        <Grid item xs={12}>
          <List>
            {contacts.map((contact) => (
              <ListItem button key={contact.id}>
                <Avatar alt={contact.name} src={contact.avatar} />
                <ListItemText
                  primary={contact.name}
                  secondary={`${contact.lastMessage} - ${contact.timestamp}`}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default ContactsPage;
