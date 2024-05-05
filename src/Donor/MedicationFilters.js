import * as React from 'react'; 
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';

const MedicationFilters = ({medicationChecked, setMedicationChecked}) => {

    const handleChange = (index) => (event) => {
        const newChecked = [...medicationChecked];
        newChecked[index] = event.target.checked;
        setMedicationChecked(newChecked);
    };

    const mainCheckboxChecked = medicationChecked.every((isChecked) => isChecked);
    const mainCheckboxIndeterminate = medicationChecked.some((isChecked) => isChecked) && !mainCheckboxChecked;

    const medications = (
        <Box sx={{ display: 'flex', flexDirection: 'column', mr:-2}}>
          <FormControlLabel
            label="Anti Biotic"
            control={<Checkbox checked={medicationChecked[0]} onChange={handleChange(0)} />}
          />
          <FormControlLabel
            label="Vaccine"
            control={<Checkbox checked={medicationChecked[1]} onChange={handleChange(1)} />}
          />
          <FormControlLabel
            label="Pain Reliever"
            control={<Checkbox checked={medicationChecked[2]} onChange={handleChange(2)} />}
          />
          <FormControlLabel
            label="Prescribed"
            control={<Checkbox checked={medicationChecked[3]} onChange={handleChange(3)} />}
          />
        </Box>
      );
  
    return ( 
        <>
            <div  style={{ display: 'flex', justifyContent: 'space-between ', alignItems: 'center' }}>
                <FormControlLabel
                    label="Medication"
                    control={<Checkbox
                        checked={mainCheckboxChecked}
                        indeterminate={mainCheckboxIndeterminate}
                        onChange={() => {
                            const allChecked = !mainCheckboxChecked;
                            setMedicationChecked([allChecked, allChecked, allChecked, allChecked]);
                        }}
                    />}
                />
                {medications}
            </div>
            <Divider component="li" />
        </>
    );
}
 
export default MedicationFilters;
