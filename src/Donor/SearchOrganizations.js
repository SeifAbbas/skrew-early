import {
  CardActionArea,
  CardActions,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Pagination,
  Select,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import dummyData from "../dummyData.json";
import SimpleMap from "../Utils/Maps";
import * as React from "react";

const SearchOrganizations = ({ isAdmin }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [type, setType] = React.useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [organizations, setOrganizations] = React.useState([
    {
      name: "Egyptian Food Bank",
      type: "Mosque",
      address:
        "1 El Khalifa El Maamoun St., Bab El Louk, Abdeen, Cairo Governorate",
      area: "Bab El Louk",
      governorate: "Cairo",
      location: { latitude: 30.046091, longitude: 31.235764 },
      phoneNumber: "+20 2 23932216", // Example phone number
    },
    {
      name: "Misr El Kheir Foundation",
      type: "Church",
      address:
        "5 El Obour Buildings - Salah Salem St., El Obour Buildings, Nasr City, Cairo Governorate",
      area: "Nasr City",
      governorate: "Cairo",
      location: { latitude: 30.056315, longitude: 31.326267 },
      phoneNumber: "+20 2 24040014", // Example phone number
    },
    {
      name: "Resala Charity Organization",
      type: "School",
      address:
        "31 Omar Ibn El Khattab St., Manshiyat Al Bakri, El Sayeda Zainab, Cairo Governorate",
      area: "Manshiyat Al Bakri",
      governorate: "Cairo",
      location: { latitude: 30.042087, longitude: 31.262544 },
      phoneNumber: "+20 2 23638949", // Example phone number
    },
    {
      name: "Life Makers Foundation",
      type: "School",
      address: "10 Mahmoud Sami St., Almaza, Heliopolis, Cairo Governorate",
      area: "Almaza",
      governorate: "Cairo",
      location: { latitude: 30.097455, longitude: 31.326282 },
      phoneNumber: "+20 2 24553846", // Example phone number
    },
    {
      name: "Basma Foundation for Comprehensive Development",
      type: "Hospital",
      address: "10 Mahmoud Sami St., Almaza, Heliopolis, Cairo Governorate",
      area: "Almaza",
      governorate: "Cairo",
      location: { latitude: 30.097455, longitude: 31.326282 },
      phoneNumber: "+20 2 24142124", // Example phone number
    },
    {
      name: "Al Orman Charity Association",
      type: "Non-profit",
      address: "40 Lebanon Square, Mohandessin, Giza Governorate",
      area: "Mohandessin",
      governorate: "Giza",
      location: { latitude: 30.060726, longitude: 31.203669 },
      phoneNumber: "+20 2 37491111", // Example phone number
    },
    {
      name: "Kahk El-Sudan Association",
      type: "Non-profit",
      address: "10 Nadi El Mohandseen St., Dokki, Giza Governorate",
      area: "Dokki",
      governorate: "Giza",
      location: { latitude: 30.044796, longitude: 31.212153 },
      phoneNumber: "+20 2 33388022", // Example phone number
    },
    {
      name: "Baitak Zaka Association",
      type: "Non-profit",
      address: "10 Abo Bakr El Siddeeq, Mit Akaba, Agouza, Giza Governorate",
      area: "Agouza",
      governorate: "Giza",
      location: { latitude: 30.044796, longitude: 31.212153 },
      phoneNumber: "+20 2 33388022", // Example phone number
    },
  ]);

  let filteredItems = organizations.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const governorates = [
    "Cairo",
    "Alexandria",
    "Giza",
    "Luxor",
    "Aswan",
    "Red Sea",
    "South Sinai",
    "Matrouh",
    "Suez",
    "Qena",
    "Faiyum",
    "Beheira",
    "Sharqia",
    "Damietta",
    "Sohag",
    "Beni Suef",
    "Minya",
    "New Valley",
    "North Sinai",
    "Kafr El Sheikh",
  ];
  const [governorate, setGovernorate] = React.useState([]);
  let govAreas = dummyData.egyptGovernorates.filter(
    (item) => item.name === governorate[0]
  );
  let areas = govAreas.length > 0 ? govAreas[0].areas : [];
  const [area, setArea] = React.useState([]);
  if (governorate.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      governorate.includes(item.governorate)
    );
  }
  if (area.length > 0) {
    filteredItems = filteredItems.filter((item) => area.includes(item.area));
  }
  const handleGovChange = (event) => {
    const {
      target: { value },
    } = event;
    setGovernorate(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setArea([]);
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
  const handleFilterChange = (event) => {
    const {
      target: { value },
    } = event;
    setType(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
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
  const types = ["Mosque", "Church", "Non-profit", "School", "Hospital"];
  if (type.length > 0) {
    filteredItems = filteredItems.filter((item) => type.includes(item.type));
  }
  const itemsPerPage = 9;
  const [page, setPage] = React.useState(0);
  let [noOfPages, setNoOfPages] = React.useState(1);

  React.useEffect(() => {
    setNoOfPages(Math.ceil(filteredItems.length / itemsPerPage));
  }, [filteredItems.length, itemsPerPage]);

  const handlePageChange = (event, value) => {
    setPage(value - 1);
  };

  const handleDeleteOrg = (name) => {
    setOrganizations(organizations.filter((item) => item.name !== name));
  };

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
            width: 200,
          }}
        />
        <FormControl
          sx={{
            m: 1,
            minWidth: 200,
            backgroundColor: "background.paper",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
          }}
        >
          <InputLabel id="demo-multiple-checkbox-label">Type</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={type}
            onChange={handleFilterChange}
            input={<OutlinedInput label="Type" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {types.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={type.includes(name)} />{" "}
                {/* Use includes to check if the type is selected */}
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{
            m: 1,
            minWidth: 150,
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
            {governorates.length > 0 &&
              governorates.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={governorate.includes(name)} />{" "}
                  {/* Use includes to check if the type is selected */}
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
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
            {areas.length > 0 &&
              areas.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={area.includes(name)} />{" "}
                  {/* Use includes to check if the type is selected */}
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            {areas.length === 0 && (
              <MenuItem disabled>Please Select a Governorate</MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid>
      <div className="list-container">
        {filteredItems.length === 0 && (
          <Typography
            variant="body1"
            align="center"
            sx={{ mt: 4, color: "text.secondary", ml: 10 }}
          >
            No items to display
          </Typography>
        )}
        <List
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {filteredItems
            .slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
            .map((item) => (
              <ListItem key={item.name} className="list-item">
                <CardActionArea
                  className="card-action-area"
                  sx={{
                    backgroundColor: "background.paper",
                    borderRadius: "15px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <SimpleMap
                    activeUser={"Donor"}
                    center={{
                      lat: item.location.latitude,
                      lng: item.location.longitude,
                    }}
                  />
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {item.type}
                          <br />
                          {item.phoneNumber}
                          <br />
                          {item.area}
                          <br />
                          {item.governorate}
                          <br />
                          {item.address}
                        </Typography>
                      </React.Fragment>
                    }
                    sx={{ padding: "16px" }}
                  />
                  {isAdmin && (
                    <CardActions sx={{ padding: "0 16px 16px 16px" }}>
                      <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        sx={{ display: "inline", marginLeft: -1 }}
                        onClick={() => handleDeleteOrg(item.name)}
                      >
                        Delete Organization
                      </Button>
                    </CardActions>
                  )}
                </CardActionArea>
              </ListItem>
            ))}
        </List>
        {filteredItems.length > 0 && (
          <Pagination
            count={noOfPages}
            page={page + 1}
            onChange={handlePageChange}
            color="primary"
            showFirstButton
            showLastButton
            sx={{ marginTop: "20px", marginBottom: "20px" }}
          />
        )}
      </div>
    </div>
  );
};

export default SearchOrganizations;
