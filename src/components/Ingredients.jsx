import * as React from 'react';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { Box } from '@mui/material';

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1
    case "decrement":
      return state-1
    default:
      return state
    
  }
}
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
