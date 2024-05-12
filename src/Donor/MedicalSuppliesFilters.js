import * as React from 'react'; 
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
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
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1, mr:1.5 }}>
          <FormControlLabel
            label="Medical Devices"
            control={<Checkbox checked={medSuppliesChecked[0]} onChange={handleChange(0)} />}
          />
          <FormControlLabel
            label="Medical Equipment"
            control={<Checkbox checked={medSuppliesChecked[1]} onChange={handleChange(1)} />}
          />
          <FormControlLabel
            label="Medication"
            control={<Checkbox checked={medSuppliesChecked[2]} onChange={handleChange(2)} />}
          />
          
        </Box>
    );

    return ( 
        <>
            <div  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
                <FormControlLabel
                    label="Medical Supplies"
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
            </div>
            <Divider component="div" />
        </>
    );
};

export default MedicalSuppliesFilters;
