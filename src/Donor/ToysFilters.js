import * as React from 'react'; 
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';

const ToysFilters = ({toyCategoryChecked, setToyCategoryChecked, toyAgeChecked, setToyAgeChecked, toyGenderChecked, setToyGenderChecked}) => {
    const handleCategoryChange = (index) => (event) => {
        const newChecked = [...toyCategoryChecked];
        newChecked[index] = event.target.checked;
        setToyCategoryChecked(newChecked);
    };


    const handleToyAgeChange = (index) => (event) => {
        const newChecked = [...toyAgeChecked];
        newChecked[index] = event.target.checked;
        setToyAgeChecked(newChecked);
    };


    const handleToyGenderChange = (index) => (event) => {
        const newChecked = [...toyGenderChecked];
        newChecked[index] = event.target.checked;
        setToyGenderChecked(newChecked);
    };

    const categories = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, mr: 2.7 }}>
            <FormControlLabel
                label="Stuffed"
                control={<Checkbox checked={toyCategoryChecked[0]} onChange={handleCategoryChange(0)} />}
            />
            <FormControlLabel
                label="Sports"
                control={<Checkbox checked={toyCategoryChecked[1]} onChange={handleCategoryChange(1)} />}
            />
            <FormControlLabel
                label="Dolls"
                control={<Checkbox checked={toyCategoryChecked[2]} onChange={handleCategoryChange(2)} />}
            />
            <FormControlLabel
                label="Cars"
                control={<Checkbox checked={toyCategoryChecked[3]} onChange={handleCategoryChange(3)} />}
            />
        </Box>
    );

    const toyAges = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, mr: 0.7 }}>
            <FormControlLabel
                label="Infant"
                control={<Checkbox checked={toyAgeChecked[0]} onChange={handleToyAgeChange(0)} />}
            />
            <FormControlLabel
                label="Toddler"
                control={<Checkbox checked={toyAgeChecked[1]} onChange={handleToyAgeChange(1)} />}
            />
            <FormControlLabel
                label="Child"
                control={<Checkbox checked={toyAgeChecked[2]} onChange={handleToyAgeChange(2)} />}
            />
            <FormControlLabel
                label="Teenager"
                control={<Checkbox checked={toyAgeChecked[3]} onChange={handleToyAgeChange(3)} />}
            />
        </Box>
    );

    const toyGenders = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, mr: 2.3 }}>
            <FormControlLabel
                label="Male"
                control={<Checkbox checked={toyGenderChecked[0]} onChange={handleToyGenderChange(0)} />}
            />
            <FormControlLabel
                label="Female"
                control={<Checkbox checked={toyGenderChecked[1]} onChange={handleToyGenderChange(1)} />}
            />
        </Box>
    );

    return ( 
        <>
            <MenuItem style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
                <FormControlLabel
                    label="Toy Category"
                    control={
                        <Checkbox
                            checked={toyCategoryChecked.every((isChecked) => isChecked)}
                            indeterminate={toyCategoryChecked.some((isChecked) => isChecked) && !toyCategoryChecked.every((isChecked) => isChecked)}
                            onChange={() => {
                                const allChecked = !toyCategoryChecked.every((isChecked) => isChecked);
                                setToyCategoryChecked([allChecked, allChecked, allChecked, allChecked]);
                            }}
                        />
                    }
                />
                {categories}
            </MenuItem>
            <Divider component="li" />
            <MenuItem style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
                <FormControlLabel
                    label="Toy Age"
                    control={
                        <Checkbox
                            checked={toyAgeChecked.every((isChecked) => isChecked)}
                            indeterminate={toyAgeChecked.some((isChecked) => isChecked) && !toyAgeChecked.every((isChecked) => isChecked)}
                            onChange={() => {
                                const allChecked = !toyAgeChecked.every((isChecked) => isChecked);
                                setToyAgeChecked([allChecked, allChecked, allChecked, allChecked]);
                            }}
                        />
                    }
                />
                {toyAges}
            </MenuItem>
            <Divider component="li" />
            <MenuItem style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
                <FormControlLabel
                    label="Toy Gender"
                    control={
                        <Checkbox
                            checked={toyGenderChecked[0] && toyGenderChecked[1]}
                            indeterminate={toyGenderChecked[0] !== toyGenderChecked[1]}
                            onChange={() => {
                                const allChecked = !(toyGenderChecked[0] && toyGenderChecked[1]);
                                setToyGenderChecked([allChecked, allChecked]);
                            }}
                        />
                    }
                />
                {toyGenders}
            </MenuItem>
            <Divider component="li" />
        </>
    );
}
 
export default ToysFilters;
