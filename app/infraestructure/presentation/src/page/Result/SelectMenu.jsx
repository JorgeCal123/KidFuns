import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function SelectMenu2({ Menu, List }) {
  const listItems = List.map((d) => <MenuItem value={d.Item}>{d.Item}</MenuItem>);
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">{ Menu }</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Seleccion:</ListSubheader>
          { listItems }
        </Select>
      </FormControl>
    </div>
  );
}

export { SelectMenu2 };