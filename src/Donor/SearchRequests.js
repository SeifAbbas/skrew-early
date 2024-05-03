import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import FilterListIcon from '@mui/icons-material/FilterList';
import FormControlLabel from '@mui/material/FormControlLabel';
import Menu from '@mui/material/Menu';
import IconButton  from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import dummyData from "../dummyData.json";
import ClothesFilters from './ClothesFilters';
import ToysFilters from './ToysFilters';
import FoodFilters from './FoodFilters';
import MedicationFilters from './MedicationFilters';
import SchoolSuppliesFilters from './SchoolSuppliesFilters';
import MedicalSuppliesFilters from './MedicalSuppliesFilters';
import { Pagination, TablePagination } from '@mui/material';
import { Link } from 'react-router-dom';



export default function AlignItemsList() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [category, setCategory] = React.useState([]);
  const [seasonChecked, setSeasonChecked] = React.useState([false, false, false, false]);
  const [ageChecked, setAgeChecked] = React.useState([false, false, false, false]);
  const [genderChecked, setGenderChecked] = React.useState([false, false]);
  const [foodChecked, setFoodChecked] = React.useState([false, false, false, false]);
  const [medSuppliesChecked, setMedSuppliesChecked] = React.useState([false, false, false, false]);
  const [medicationChecked, setMedicationChecked] = React.useState([false, false, false, false]);
  const [schoolSuppliesChecked, setSchoolSuppliesChecked] = React.useState([false, false]);
  const [toyCategoryChecked, setToyCategoryChecked] = React.useState([false, false, false, false]);
  const [toyAgeChecked, setToyAgeChecked] = React.useState([false, false, false, false]);
  const [toyGenderChecked, setToyGenderChecked] = React.useState([false, false]);
  const seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
  const ages = ['Infant', 'Child', 'Teenager', 'Adult'];
  const genders = ['Male', 'Female'];
  const toyCategories = ['Stuffed','Sports','Dolls','Outdoor'];
  const foods = ['Canned','Baked','Fruits','Fresh'];
  const medSupplies = ['Class Is','Class IIa','Class IIb','Class III'];
  const medications = ['Anti Biotic','Vaccine','Pain Reliever','Prescribed'];
  const schoolSupplies = ['Books', 'Stationary'];
  const filters = [['Clothes', 'Age', ages, ageChecked],['Clothes','Season', seasons, seasonChecked],['Clothes', 'Gender', genders, genderChecked],['Toys', 'Age', ages, toyAgeChecked],['Toys' ,'Type', toyCategories, toyCategoryChecked],['Toys', 'Gender', genders,genderChecked],['Food', 'Type', foods, foodChecked],['School Supplies', 'Type', schoolSupplies, schoolSuppliesChecked],['Medication', 'Type', medications, medicationChecked],['Medical Supplies', 'Type', medSupplies, medSuppliesChecked]]
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
    keepMounted: true, // Keep the menu open while interacting with checkboxes
  };
  const categories = ['Clothes', 'Toys', 'Books','Medication','Medical Supplies','School Supplies','Food','Blood Donations', 'Teaching Classes', 'Doctor Visits'];
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleFilterChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleFilterIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleCloseMenu);

    return () => {
      document.removeEventListener('mousedown', handleCloseMenu);
    };
  }, []);

  let filteredItems = dummyData.requests.filter(item =>
    item.Category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (category.length > 0) {
    filteredItems = filteredItems.filter(item =>
      category.includes(item.Category)
    );
  }
  filters.forEach((filtering) => {
    if (category.includes(filtering[0])) {
        filteredItems = filteredItems.filter(item => {
            return filtering[3].every((isChecked, index) => {
                if (isChecked) {
                    const cat = filtering[1];
                    console.log(cat);
                    return (item[cat] === filtering[2][index]);
                }
                return true;
            });
        });
    }
});

  const itemsPerPage = 10;
  const [page, setPage] = React.useState(0);
  const [noOfPages] = React.useState(
    Math.ceil(filteredItems.length / itemsPerPage)
  );

  const handlePageChange = (event, value) => {
    setPage(value-1);
  };
    const id = dummyData.requests.id;
  return (
    <div>
    <Grid item xs={12} sm={6} sx ={{
          marginTop:'10px',
          marginBottom:'10px',
          marginLeft: '10px',
          display: 'flex', justifyContent: 'left', alignItems: 'center', flexDirection: 'row'
        }}>
    <TextField
        label= "Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        sx ={{
          marginTop:'10px',
          marginBottom:'10px',
          marginLeft: '10px',
          backgroundColor:'background.paper',
        }}
      />
      <FormControl sx={{ m: 1, width: 200, backgroundColor:'background.paper', marginTop:'10px',
          marginBottom:'10px',
          marginLeft: '10px', }}>
        <InputLabel id="demo-multiple-checkbox-label">Category</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={category}
          onChange={handleFilterChange}
          input={<OutlinedInput label="Category" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {categories.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={category.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>  
      <IconButton onClick={handleFilterIconClick} sx={{ marginTop: '20px', marginBottom: '20px' }}> {/* IconButton component */}
          <FilterListIcon
            sx={{
              color: "blue",
              fontSize: '2rem',
            }}
          />
        <div className='filtersmenu'>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          MenuProps={MenuProps}
        >
        {category.length===0 && (<MenuItem disabled>Please Select a Category</MenuItem>)}
        {category.includes('Clothes') && (<ClothesFilters
         seasonChecked={seasonChecked}
          setSeasonChecked= {setSeasonChecked}
          ageChecked = {ageChecked}
          setAgeChecked={setAgeChecked}
          genderChecked={genderChecked}
          setGenderChecked={setGenderChecked}
  
          />)}
        {category.includes('Toys') && (<ToysFilters 
        toyCategoryChecked={toyCategoryChecked}
        setToyCategoryChecked={setToyCategoryChecked}
        toyAgeChecked={toyAgeChecked}
        setToyAgeChecked={setToyAgeChecked}
        toyGenderChecked = {toyGenderChecked}
        setToyGenderChecked={setToyGenderChecked}
        />)}
        {category.includes('Medication') && (<MedicationFilters 
        medicationChecked = {medicationChecked}
        setMedicationChecked={setMedicationChecked}
        />)}
        {category.includes('Medical Supplies') && (<MedicalSuppliesFilters 
        medSuppliesChecked={medSuppliesChecked}
        setMedSuppliesChecked={setMedSuppliesChecked}
        />)}
        {(category.includes('Books') || category.includes('School Supplies')) && (<SchoolSuppliesFilters 
        schoolSuppliesChecked={schoolSuppliesChecked}
        setSchoolSuppliesChecked={setSchoolSuppliesChecked}
        />)}
        {category.includes('Food') && (<FoodFilters
        foodChecked = {foodChecked}
        setFoodChecked = {setFoodChecked}
        />)}

      </Menu>
      </div>
       </IconButton>
      </Grid>      
    <div className="list-container">
    <List sx={{ maxwidth: "20%", display: 'flex', justifyContent: "flex-start", flexWrap: 'wrap'  }}>
    {filteredItems.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage).map((item, index) => (
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
        {dummyData.requests.id === item.id}
         <CardActions>
          <Link to={`/Home/Requests/LearnMore/${dummyData.requests.id}`}>
         <Button size="small" color="primary" variant='contained' sx={{ display: 'inline', marginLeft: -1 }} className="learn-more-button">
        Learn More
        </Button>
        </Link>
      </CardActions>
          <Divider component="li" />
        </CardActionArea>
        </ListItem>

      ))}
    </List>
    <Pagination count={noOfPages} page={page+1} onChange={handlePageChange}  color="primary"
          showFirstButton
          showLastButton
           sx={{ marginTop: '20px', marginBottom: '20px' }}
            />

    </div>
    </div>
  );
}
