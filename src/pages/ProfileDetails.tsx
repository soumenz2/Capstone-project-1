import React from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';

interface ProfileDetailsProps {
  name: string;
  email: string;
  username: string;
  mobile: string;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ name, email, username, mobile }) => {
  return (
    <Box sx={{ width: 250, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Profile Details
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Name" secondary={name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Username" secondary={username} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Mobile" secondary={mobile} />
        </ListItem>
      </List>
    </Box>
  );
};

export default ProfileDetails;
