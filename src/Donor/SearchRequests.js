import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { blue } from '@mui/material/colors';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
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
    <div className="list-container">
    <List sx={{ maxwidth: "20%", bgcolor: 'background.paper', display: 'flex', justifyContent: "space-between", flexWrap: 'wrap'  }}>
    {filteredItems.map((item, index) => (
        <ListItem key={index} className="list-item">
          {/* <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }} alt="" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar> */}
        <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            fit:'crop',
            auto:'format',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
          image={item.ImageSrc}
          alt="green iguana"
        />
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
            </React.Fragment>
          }
        />
         <CardActions>
         <Button size="small" color="primary" variant='contained' sx={{ display: 'inline' }} className="learn-more-button">
          Learn More
        </Button>
      </CardActions>
          <Divider variant="inset" component="li" />
        </CardActionArea>
        </ListItem>

      ))}
    </List>
    </div>
    </div>
  );
}



// export default function MediaCard() {
//   return (
//     {filteredItems.map((item, index) => (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {item.Name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
        
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   )
// )
//     });
// }
