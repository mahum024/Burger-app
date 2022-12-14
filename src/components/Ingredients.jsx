import * as React from 'react';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { Box } from '@mui/material';

export default function Ingredients(props){
 
 return (
    <div className='Ingredient'>
      <div className='item'>{props.item} </div> 
        <Box sx={{ display: 'flex', '& > *': { m: 1,  },  }} >
          <ButtonGroup orientation="vertical"
            aria-label="vertical outlined button group" >
            <Button variant="contained" onClick={props.add}>ADD</Button>
          </ButtonGroup>
          <ButtonGroup orientation="vertical"
            aria-label="vertical outlined button group" >   
            <Button variant="contained" onClick={props.remove} >Remove</Button>
          </ButtonGroup>
        </Box>
    
    </div>
  );
}
