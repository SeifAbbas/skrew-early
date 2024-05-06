import * as React from 'react'; 
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';

const FoodFilters = ({foodChecked, setFoodChecked}) => {

    const handleChange = (index) => (event) => {
        const newChecked = [...foodChecked];
        newChecked[index] = event.target.checked;
        setFoodChecked(newChecked);
    };

    const mainCheckboxChecked = foodChecked.every((isChecked) => isChecked);
    const mainCheckboxIndeterminate = foodChecked.some((isChecked) => isChecked) && !mainCheckboxChecked;

    const foods = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml:9, mr:2 }}>
          <FormControlLabel
            label="Canned"
            control={<Checkbox checked={foodChecked[0]} onChange={handleChange(0)} />}
          />
          <FormControlLabel
            label="Baked"
            control={<Checkbox checked={foodChecked[1]} onChange={handleChange(1)} />}
          />
          <FormControlLabel
            label="Fruits"
            control={<Checkbox checked={foodChecked[2]} onChange={handleChange(2)} />}
          />
          <FormControlLabel
            label="Fresh"
            control={<Checkbox checked={foodChecked[3]} onChange={handleChange(3)} />}
          />
        </Box>
    );

    return ( 
        <>
        <div  style={{ display: 'flex', justifyContent: 'space-around', alignItems:'center' }}>
            <FormControlLabel
                label="Food"
                control={
                    <Checkbox
                        checked={mainCheckboxChecked}
                        indeterminate={mainCheckboxIndeterminate}
                        onChange={() => {
                            const allChecked = !mainCheckboxChecked;
                            setFoodChecked([allChecked, allChecked, allChecked, allChecked]);
                        }}
                    />
                }
            />
            {foods}
        </div>
        <Divider component="div" />
        </>
    );
};

export default FoodFilters;
