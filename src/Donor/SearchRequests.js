import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import dummyData from "../dummyData.json";

export default function AlignItemsList() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = dummyData.requests.filter(item =>
    item.Category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
    <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
    {filteredItems.map((item, index) => (
        <ListItem key={index}>
          <ListItemText
          primary={item.Name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {item.Category}
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
          <Divider variant="inset" component="li" />
        </ListItem>

      ))}
    </List>
    </div>
  );
}
