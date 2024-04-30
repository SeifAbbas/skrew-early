import * as React from 'react'; 
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

const MedicalSuppliesFilters = ({medSuppliesChecked, setMedSuppliesChecked}) => {

    const handleChange = (index) => (event) => {
        const newChecked = [...medSuppliesChecked];
        newChecked[index] = event.target.checked;
        setMedSuppliesChecked(newChecked);
    };

    const mainCheckboxChecked = medSuppliesChecked.every((isChecked) => isChecked);
    const mainCheckboxIndeterminate = medSuppliesChecked.some((isChecked) => isChecked) && !mainCheckboxChecked;

    const medicalSupplies = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, mr:1 }}>
          <FormControlLabel
            label="Class Is"
            control={<Checkbox checked={medSuppliesChecked[0]} onChange={handleChange(0)} />}
          />
          <FormControlLabel
            label="Class IIa"
            control={<Checkbox checked={medSuppliesChecked[1]} onChange={handleChange(1)} />}
          />
          <FormControlLabel
            label="Class IIb"
            control={<Checkbox checked={medSuppliesChecked[2]} onChange={handleChange(2)} />}
          />
          <FormControlLabel
            label="Class III"
            control={<Checkbox checked={medSuppliesChecked[3]} onChange={handleChange(3)} />}
          />
        </Box>
    );

    return ( 
        <>
            <MenuItem  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
                <FormControlLabel
                    label="Medical Devices"
                    control={
                        <Checkbox
                            checked={mainCheckboxChecked}
                            indeterminate={mainCheckboxIndeterminate}
                            onChange={() => {
                                const allChecked = !mainCheckboxChecked;
                                setMedSuppliesChecked([allChecked, allChecked, allChecked, allChecked]);
                            }}
                        />
                    }
                />
                {medicalSupplies}
            </MenuItem>
            <Divider component="li" />
        </>
    );
};

export default MedicalSuppliesFilters;
