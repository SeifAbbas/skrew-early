import * as React from 'react'; 
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';
const MedicalSuppliesFilters= () => {
    const [checked, setChecked] = React.useState([false, false,false,false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked, event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1], checked[2]], checked[3]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked, checked[2], checked[3]]);
  };

  const handleChange4 = (event) => {
    setChecked([checked[0], checked[1], event.target.checked, checked[3]]);
  };

  const handleChange5 = (event) => {
    setChecked([checked[0], checked[1],checked[2],event.target.checked]);
  };
  
    const medicalSupplies = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, mr:1 }}>
          <FormControlLabel
            label="Class Is"
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <FormControlLabel
            label="Class IIa"
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
          <FormControlLabel
            label="Class IIb"
            control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
          />
          <FormControlLabel
            label="Class III"
            control={<Checkbox checked={checked[3]} onChange={handleChange5} />}
          />
        </Box>
      );
  
    return ( 
        <>
            <MenuItem  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
            <FormControlLabel
                label="Medical Devices"
                control={<Checkbox
                    checked={checked[0] && checked[1] && checked[2] && checked[3]}
                    indeterminate={checked[0] !== checked[1] !== checked[2] !== checked[3]}
                    onChange={handleChange1} />} />
            {medicalSupplies}
        </MenuItem>
        <Divider component="li" />

            </>
    );
}
 
export default MedicalSuppliesFilters;