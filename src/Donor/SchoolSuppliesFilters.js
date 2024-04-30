import * as React from 'react'; 
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

const SchoolSuppliesFilters = ({schoolSuppliesChecked, setSchoolSuppliesChecked}) => {
    const handleChange = (index) => (event) => {
        const newChecked = [...schoolSuppliesChecked];
        newChecked[index] = event.target.checked;
        setSchoolSuppliesChecked(newChecked);
    };

    const mainCheckboxChecked = schoolSuppliesChecked.every((isChecked) => isChecked);
    const mainCheckboxIndeterminate = schoolSuppliesChecked.some((isChecked) => isChecked) && !mainCheckboxChecked;

    const supplies = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            label="Books"
            control={<Checkbox checked={schoolSuppliesChecked[0]} onChange={handleChange(0)} />}
          />
          <FormControlLabel
            label="Stationary"
            control={<Checkbox checked={schoolSuppliesChecked[1]} onChange={handleChange(1)} />}
          />
        </Box>
      );
  
    return ( 
        <>
            <MenuItem  style={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormControlLabel
                    label="School Supplies"
                    control={<Checkbox
                        checked={mainCheckboxChecked}
                        indeterminate={mainCheckboxIndeterminate}
                        onChange={() => {
                            const allChecked = !mainCheckboxChecked;
                            setSchoolSuppliesChecked([allChecked, allChecked]);
                        }}
                    />}
                />
                {supplies}
            </MenuItem>
            <Divider component="li" />
        </>
    );
}
 
export default SchoolSuppliesFilters;
