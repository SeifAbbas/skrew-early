import * as React from 'react'; 
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';
const SchoolSuppliesFilters= () => {
    const [checked, setChecked] = React.useState([false, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  
    const supplies = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            label="Books"
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <FormControlLabel
            label="Stationary"
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
        </Box>
      );
  
    return ( 
        <>
        <MenuItem  style={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormControlLabel
                label="School Supplies"
                control={<Checkbox
                    checked={checked[0] && checked[1]}
                    indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1} />} />
            {supplies}
        </MenuItem>
        <Divider component="li" />

            </>
    );
}
 
export default SchoolSuppliesFilters;