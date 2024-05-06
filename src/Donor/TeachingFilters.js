import * as React from 'react'; 
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';

const TeachingFilters = ({teachingChecked, setTeachingChecked}) => {

    const handleChange = (index) => (event) => {
        const newChecked = [...teachingChecked];
        newChecked[index] = event.target.checked;
        setTeachingChecked(newChecked);
    };

    const mainCheckboxChecked = teachingChecked.every((isChecked) => isChecked);
    const mainCheckboxIndeterminate = teachingChecked.some((isChecked) => isChecked) && !mainCheckboxChecked;

    const Subjects = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1, mr:1.5 }}>
          <FormControlLabel
            label="English"
            control={<Checkbox checked={teachingChecked[0]} onChange={handleChange(0)} />}
          />
          <FormControlLabel
            label="Math"
            control={<Checkbox checked={teachingChecked[1]} onChange={handleChange(1)} />}
          />
          <FormControlLabel
            label="Science"
            control={<Checkbox checked={teachingChecked[2]} onChange={handleChange(2)} />}
          />
          <FormControlLabel
            label="Art"
            control={<Checkbox checked={teachingChecked[3]} onChange={handleChange(3)} />}
          />
        </Box>
    );

    return ( 
        <>
            <div  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
                <FormControlLabel
                    label="Subjects"
                    control={
                        <Checkbox
                            checked={mainCheckboxChecked}
                            indeterminate={mainCheckboxIndeterminate}
                            onChange={() => {
                                const allChecked = !mainCheckboxChecked;
                                setTeachingChecked([allChecked, allChecked, allChecked, allChecked]);
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

export default TeachingFilters;
