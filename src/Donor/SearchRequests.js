import * as React from "react";
import {
  CardActions,
  CardActionArea,
  CardMedia,
  Button,
  Grid,
  List,
  ListItem,
  Menu,
  IconButton,
  Divider,
  ListItemText,
  Typography,
  TextField,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Drawer,
  Select,
  Checkbox,
  Pagination,
} from "@mui/material";

import FilterListIcon from "@mui/icons-material/FilterList";
import dummyData from "../dummyData.json";
import ClothesFilters from "./ClothesFilters";
import ToysFilters from "./ToysFilters";
import FoodFilters from "./FoodFilters";
import MedicationFilters from "./MedicationFilters";
import SchoolSuppliesFilters from "./SchoolSuppliesFilters";
import MedicalSuppliesFilters from "./MedicalSuppliesFilters";
import { Link } from "react-router-dom";

export default function AlignItemsList() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [category, setCategory] = React.useState([]);
  const [seasonChecked, setSeasonChecked] = React.useState([
    false,
    false,
    false,
    false,
  ]);
  const [ageChecked, setAgeChecked] = React.useState([
    false,
    false,
    false,
    false,
  ]);
  const [genderChecked, setGenderChecked] = React.useState([false, false]);
  const [foodChecked, setFoodChecked] = React.useState([
    false,
    false,
    false,
    false,
  ]);
  const [medSuppliesChecked, setMedSuppliesChecked] = React.useState([
    false,
    false,
    false,
    false,
  ]);
  const [medicationChecked, setMedicationChecked] = React.useState([
    false,
    false,
    false,
    false,
  ]);
  const [schoolSuppliesChecked, setSchoolSuppliesChecked] = React.useState([
    false,
    false,
  ]);
  const [toyCategoryChecked, setToyCategoryChecked] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [toyAgeChecked, setToyAgeChecked] = React.useState([
    false,
    false,
    false,
    false,
  ]);
  const [toyGenderChecked, setToyGenderChecked] = React.useState([
    false,
    false,
  ]);
  const seasons = ["Winter", "Spring", "Summer", "Fall"];
  const ages = ["Infant", "Child", "Teenager", "Adult"];
  const genders = ["Male", "Female"];
  const toyCategories = [
    "Stuffed",
    "Sports",
    "Dolls",
    "Outdoor",
    "Board Games",
  ];
  const foods = ["Canned", "Baked", "Fruits", "Fresh"];
  const medSupplies = ["Class Is", "Class IIa", "Class IIb", "Class III"];
  const medications = ["Anti Biotic", "Vaccine", "Pain Reliever", "Prescribed"];
  const schoolSupplies = ["Books", "Stationary"];
  const filters = [
    ["Clothes", "Age", ages, ageChecked],
    ["Clothes", "Season", seasons, seasonChecked],
    ["Clothes", "Gender", genders, genderChecked],
    ["Toys", "Age", ages, toyAgeChecked],
    ["Toys", "Type", toyCategories, toyCategoryChecked],
    ["Toys", "Gender", genders, genderChecked],
    ["Food", "Type", foods, foodChecked],
    ["School Supplies", "Type", schoolSupplies, schoolSuppliesChecked],
    ["Medication", "Type", medications, medicationChecked],
    ["Medical Supplies", "Type", medSupplies, medSuppliesChecked],
  ];
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
  const categories = [
    "Clothes",
    "Toys",
    "Books",
    "Medication",
    "Medical Supplies",
    "School Supplies",
    "Food",
    "Blood Donations",
    "Teaching Classes",
    "Doctor Visits",
  ];
  const vCategories = ["Blood Donations",
  "Teaching Classes",
  "Doctor Visits",]
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const [drawerOpen, setDrawerOpen] = React.useState(false); // State for drawer

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const handleFilterChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    if((category.includes('Teaching Classes') || category.includes('Doctor Visits') || category.includes('Blood Donations'))){
      setGovernorate([]);
      setArea([]);
    }
  };

  let filteredItems = dummyData.requests.filter((item) =>
    item.Category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (category.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      category.includes(item.Category)
    );
  }
  filters.forEach((filtering) => {
    if (category.includes(filtering[0])) {
      filteredItems = filteredItems.filter((item) => {
        return filtering[3].every((isChecked, index) => {
          if (isChecked) {
            const cat = filtering[1];
            console.log(cat);
            return item[cat] === filtering[2][index];
          }
          return true;
        });
      });
    }
  });
  const governorates = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan", "Red Sea", "South Sinai", "Matrouh", "Suez", "Qena", "Faiyum", "Beheira", "Sharqia", "Damietta", "Sohag", "Beni Suef", "Minya", "New Valley", "North Sinai", "Kafr El Sheikh"];
  const [governorate, setGovernorate] = React.useState([]);
  let govAreas = dummyData.egyptGovernorates.filter((item) =>
    item.name === governorate[0]
  );
  let areas = (govAreas.length>0) ?govAreas[0].areas: [];
  const [area, setArea] = React.useState([]);
  if (governorate.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      governorate.includes(item.Governorate)  || (!vCategories.includes(item.Category) && category.includes(item.Category))
    );
  }
  if (area.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      area.includes(item.Area) || (!vCategories.includes(item.Category) && category.includes(item.Category))
  );
  }
  const handleGovChange = (event) => {
    const {
      target: { value },
    } = event;
    setGovernorate(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setArea([])
  };
  const handleAreaChange = (event) => {
    const {
      target: { value },
    } = event;
    setArea(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const itemsPerPage = 10;
  const [page, setPage] = React.useState(0);
  const [noOfPages] = React.useState(
    Math.ceil(filteredItems.length / itemsPerPage)
  );

  const handlePageChange = (event, value) => {
    setPage(value - 1);
  };
  const id = dummyData.requests.id;
  return (
    <div>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          marginTop: "10px",
          marginBottom: "10px",
          marginLeft: "10px",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            backgroundColor: "background.paper",
          }}
        />
        <FormControl
          sx={{
            m: 1,
            width: 200,
            backgroundColor: "background.paper",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
          }}
        >
          <InputLabel id="demo-multiple-checkbox-label">Category</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={category}
            onChange={handleFilterChange}
            input={<OutlinedInput label="Category" />}
            renderValue={(selected) => selected.join(", ")}
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
        {(category.includes('Teaching Classes') || category.includes('Doctor Visits') || category.includes('Blood Donations'))
         && (<FormControl
          sx={{
            m: 1,
            width: 200,
            backgroundColor: "background.paper",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
          }}
        >
          <InputLabel id="demo-multiple-checkbox-label">Governorate</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            value={governorate}
            onChange={handleGovChange}
            input={<OutlinedInput label="Governorate" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {(governorates.length>0) && governorates.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={governorate.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>) 
}
        {(category.includes('Teaching Classes') || category.includes('Doctor Visits') || category.includes('Blood Donations'))
        && (<FormControl
          sx={{
            m: 1,
            width: 200,
            backgroundColor: "background.paper",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
          }}
        >
          <InputLabel id="demo-multiple-checkbox-label">Area</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={area}
            onChange={handleAreaChange}
            input={<OutlinedInput label="Area" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {(areas.length>0) && areas.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={area.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
            {areas.length===0 && (
              <MenuItem disabled>Please Select a Governorate</MenuItem>
          )}
          </Select>
        </FormControl>)}
        <IconButton
          onClick={() => handleDrawerOpen(category[0])}
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        >
          {" "}
          {/* IconButton component */}
          <FilterListIcon
            sx={{
              color: "blue",
              fontSize: "2rem",
            }}
          />
          
        </IconButton>
      </Grid>

          <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          top: "100px",
          zIndex: 1300,
          width: 300,
          }}
      >
         {category.length === 0 && (
                <MenuItem disabled>Please Select a Category</MenuItem>
              )}
              {category.includes("Clothes") && (
                <ClothesFilters
                  seasonChecked={seasonChecked}
                  setSeasonChecked={setSeasonChecked}
                  ageChecked={ageChecked}
                  setAgeChecked={setAgeChecked}
                  genderChecked={genderChecked}
                  setGenderChecked={setGenderChecked}
                />
              )}
              {category.includes("Toys") && (
                <ToysFilters
                  toyCategoryChecked={toyCategoryChecked}
                  setToyCategoryChecked={setToyCategoryChecked}
                  toyAgeChecked={toyAgeChecked}
                  setToyAgeChecked={setToyAgeChecked}
                  toyGenderChecked={toyGenderChecked}
                  setToyGenderChecked={setToyGenderChecked}
                />
              )}
              {category.includes("Medication") && (
                <MedicationFilters
                  medicationChecked={medicationChecked}
                  setMedicationChecked={setMedicationChecked}
                />
              )}
              {category.includes("Medical Supplies") && (
                <MedicalSuppliesFilters
                  medSuppliesChecked={medSuppliesChecked}
                  setMedSuppliesChecked={setMedSuppliesChecked}
                />
              )}
              {(category.includes("Books") ||
                category.includes("School Supplies")) && (
                <SchoolSuppliesFilters
                  schoolSuppliesChecked={schoolSuppliesChecked}
                  setSchoolSuppliesChecked={setSchoolSuppliesChecked}
                />
              )}
              {category.includes("Food") && (
                <FoodFilters
                  foodChecked={foodChecked}
                  setFoodChecked={setFoodChecked}
                />
              )}
      </Drawer>

      <div className="list-container">
        <List
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {filteredItems
            .slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
            .map((item, index) => (
              <ListItem key={index} className="list-item">
                {/* <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }} alt="" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar> */}
                <CardActionArea className="card-action-area">
                  <CardMedia
                    component="img"
                    image={item.ImageSrc}
                    alt="green iguana"
                    sx={{
                      height: 200, // Set a fixed height for the image
                      objectFit: "contain",
                      backgroundColor: "background.paper",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                    className="card-media"
                  />
                  <ListItemText
                    primary={item.Name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
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
                    <Link to={`/Home/Requests/LearnMore/${item.ID}`}>
                      <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        sx={{ display: "inline", marginLeft: -1 }}
                        className="learn-more-button"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardActions>
                  <Divider component="li" />
                </CardActionArea>
              </ListItem>
            ))}
        </List>
        <Pagination
          count={noOfPages}
          page={page + 1}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        />
      </div>
    </div>
  );
}
