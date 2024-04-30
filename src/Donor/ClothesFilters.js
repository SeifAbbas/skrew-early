import * as React from 'react'; 
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';

const ClothesFilters = ({ seasonChecked, setSeasonChecked, ageChecked, setAgeChecked, genderChecked, setGenderChecked }) => {


    const handleChangeSeason = (index) => (event) => {
        const newChecked = [...seasonChecked];
        newChecked[index] = event.target.checked;
        setSeasonChecked(newChecked);
    };

    const handleChangeAge = (index) => (event) => {
        const newChecked = [...ageChecked];
        newChecked[index] = event.target.checked;
        setAgeChecked(newChecked);
    };

    const handleChangeGender = (index) => (event) => {
        const newChecked = [...genderChecked];
        newChecked[index] = event.target.checked;
        setGenderChecked(newChecked);
    };

    const mainSeasonCheckboxChecked = seasonChecked.every((isChecked) => isChecked);
    const mainSeasonCheckboxIndeterminate = seasonChecked.some((isChecked) => isChecked) && !mainSeasonCheckboxChecked;

    const mainAgeCheckboxChecked = ageChecked.every((isChecked) => isChecked);
    const mainAgeCheckboxIndeterminate = ageChecked.some((isChecked) => isChecked) && !mainAgeCheckboxChecked;

    return ( 
        <>
            <MenuItem style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
                <FormControlLabel
                    label="Season"
                    control={
                        <Checkbox
                            checked={mainSeasonCheckboxChecked}
                            indeterminate={mainSeasonCheckboxIndeterminate}
                            onChange={() => {
                                const allChecked = !mainSeasonCheckboxChecked;
                                setSeasonChecked([allChecked, allChecked, allChecked, allChecked]);
                            }}
                        />
                    }
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, mr: 1.6 }}>
                    {['Winter', 'Spring', 'Summer', 'Fall'].map((label, index) => (
                        <FormControlLabel
                            key={index}
                            label={label}
                            control={<Checkbox checked={seasonChecked[index]} onChange={handleChangeSeason(index)} />}
                        />
                    ))}
                </Box>
            </MenuItem>
            <Divider component="li" />
            <MenuItem style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
                <FormControlLabel
                    label="Age"
                    control={
                        <Checkbox
                            checked={mainAgeCheckboxChecked}
                            indeterminate={mainAgeCheckboxIndeterminate}
                            onChange={() => {
                                const allChecked = !mainAgeCheckboxChecked;
                                setAgeChecked([allChecked, allChecked, allChecked, allChecked]);
                            }}
                        />
                    }
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, mr: 0.7 }}>
                    {['Infant', 'Child', 'Teenager', 'Adult'].map((label, index) => (
                        <FormControlLabel
                            key={index}
                            label={label}
                            control={<Checkbox checked={ageChecked[index]} onChange={handleChangeAge(index)} />}
                        />
                    ))}
                </Box>
            </MenuItem>
            <Divider component="li" />
            <MenuItem style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
                <FormControlLabel
                    label="Gender"
                    control={
                        <Checkbox
                            checked={genderChecked[0]}
                            indeterminate={genderChecked[1]}
                            onChange={handleChangeGender(0)}
                        />
                    }
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, mr: 2.3 }}>
                    <FormControlLabel
                        label="Male"
                        control={<Checkbox checked={genderChecked[0]} onChange={handleChangeGender(0)} />}
                    />
                    <FormControlLabel
                        label="Female"
                        control={<Checkbox checked={genderChecked[1]} onChange={handleChangeGender(1)} />}
                    />
                </Box>
            </MenuItem>
            <Divider component="li" />
        </>
    );
}
 
export default ClothesFilters;
