import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectMenu() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Materia:</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="Seleccio:">
            <option value={1}>Lenguaje</option>
            <option value={2}>Numeros</option>
            </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Nivel</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Seleccion:</ListSubheader>
          <MenuItem value={1}>Nivel 1</MenuItem>
          <MenuItem value={2}>Nivel 2</MenuItem>
          <MenuItem value={3}>Nivel 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export { SelectMenu };