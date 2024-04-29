import * as React from 'react'; 
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
const ToysFilters= () => {
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
  const [achecked, setCheckedA] = React.useState([false, false,false,false]);

  const handleChange1a = (event) => {
    setCheckedA([event.target.checked, event.target.checked, event.target.checked, event.target.checked]);
  };

  const handleChange2a = (event) => {
    setCheckedA([event.target.checked, achecked[1], achecked[2]], achecked[3]);
  };

  const handleChange3a = (event) => {
    setCheckedA([achecked[0], event.target.checked, achecked[2], achecked[3]]);
  };

  const handleChange4a = (event) => {
    setCheckedA([achecked[0], achecked[1], event.target.checked, achecked[3]]);
  };

  const handleChange5a = (event) => {
    setCheckedA([achecked[0], achecked[1],achecked[2],event.target.checked]);
  };

  
    const seasons = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            label="Stuffed"
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <FormControlLabel
            label="Sports"
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
          <FormControlLabel
            label="Dolls"
            control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
          />
          <FormControlLabel
            label="Cars"
            control={<Checkbox checked={checked[3]} onChange={handleChange5} />}
          />
        </Box>
      );
      const ages = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            label="Infant"
            control={<Checkbox checked={achecked[0]} onChange={handleChange2a} />}
          />
          <FormControlLabel
            label="Toddler"
            control={<Checkbox checked={achecked[1]} onChange={handleChange3a} />}
          />
          <FormControlLabel
            label="Child"
            control={<Checkbox checked={achecked[2]} onChange={handleChange4a} />}
          />
          <FormControlLabel
            label="Teenager"
            control={<Checkbox checked={achecked[3]} onChange={handleChange5a} />}
          />
          
        </Box>
      );
      const [gchecked, setCheckedG] = React.useState([false, false]);

  const handleChange1g = (event) => {
    setCheckedG([event.target.checked, event.target.checked]);
  };

  const handleChange2g = (event) => {
    setCheckedG([event.target.checked, gchecked[1]]);
  };

  const handleChange3g = (event) => {
    setCheckedG([gchecked[0], event.target.checked]);
  };

  const genders = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Male"
        control={<Checkbox checked={gchecked[0]} onChange={handleChange2g} />}
      />
      <FormControlLabel
        label="Female"
        control={<Checkbox checked={gchecked[1]} onChange={handleChange3g} />}
      />
    </Box>
  );
    return ( 
        <>
        <MenuItem  style={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormControlLabel
                label="Toy Category"
                control={<Checkbox
                    checked={checked[0] && checked[1] && checked[2] && checked[3]}
                    indeterminate={checked[0] !== checked[1] !== checked[2] !== checked[3]}
                    onChange={handleChange1} />} />
            {seasons}
        </MenuItem>
        <Divider component="li" />
        <MenuItem  style={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormControlLabel
                    label="Age"
                    control={<Checkbox
                        checked={achecked[0] && achecked[1] && achecked[2] && achecked[3]}
                        indeterminate={achecked[0] !== achecked[1] !== achecked[2] !== achecked[3]}
                        onChange={handleChange1a} />} />
                {ages}
            </MenuItem>
            <Divider component="li" />

            <MenuItem  style={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormControlLabel
        label="Gender"
        control={
          <Checkbox
            checked= 'false'
            indeterminate='false'
            onChange={handleChange1g}
          />
        }
      />
      {genders}  
      </MenuItem>   
            </>
    );
}
 
export default ToysFilters;