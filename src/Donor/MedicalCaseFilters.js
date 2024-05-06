import * as React from 'react'; 
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';

const MedicalCaseFilters = ({caseChecked, setCaseChecked}) => {

    const handleChange = (index) => (event) => {
        const newChecked = [...caseChecked];
        newChecked[index] = event.target.checked;
        setCaseChecked(newChecked);
    };

    const mainCheckboxChecked = caseChecked.every((isChecked) => isChecked);
    const mainCheckboxIndeterminate = caseChecked.some((isChecked) => isChecked) && !mainCheckboxChecked;

    const Subjects = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1, mr:1.5 }}>
          <FormControlLabel
            label="General"
            control={<Checkbox checked={caseChecked[0]} onChange={handleChange(0)} />}
          />
          <FormControlLabel
            label="Dentist"
            control={<Checkbox checked={caseChecked[1]} onChange={handleChange(1)} />}
          />
          <FormControlLabel
            label="Pediatrician"
            control={<Checkbox checked={caseChecked[2]} onChange={handleChange(2)} />}
          />
          <FormControlLabel
            label="Cardiologist"
            control={<Checkbox checked={caseChecked[3]} onChange={handleChange(3)} />}
          />
           <FormControlLabel
            label="Surgeon"
            control={<Checkbox checked={caseChecked[4]} onChange={handleChange(4)} />}
          />
        </Box>
    );

    return ( 
        <>
            <div  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
                <FormControlLabel
                    label="Medical Specialty"
                    control={
                        <Checkbox
                            checked={mainCheckboxChecked}
                            indeterminate={mainCheckboxIndeterminate}
                            onChange={() => {
                                const allChecked = !mainCheckboxChecked;
                                setCaseChecked([allChecked, allChecked, allChecked, allChecked]);
                            }}
                        />
                    }
                />
                {Subjects}
            </div>
            <Divider component="div" />
        </>
    );
};

export default MedicalCaseFilters;
