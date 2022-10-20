import * as React from 'react';
import { useReducer} from 'react';
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

  const [count, dispatch] = useReducer(reducer, initialState)
 
  const Add = () => {
    dispatch("increment")
    props.total(props.price + props.totalPrice, props.item,  "add")
  }
  
  const Remove = () => {
    if(count > 0 ){

      dispatch("decrement")
      props.total( props.totalPrice - props.price , props.item, "remove")
    }
  }

  return (
    <div className='Ingredient'>
      <div className='item'>{props.item} </div> 
        <Box sx={{ display: 'flex', '& > *': { m: 1,  },  }} >
          <ButtonGroup orientation="vertical"
            aria-label="vertical outlined button group" >
            <Button variant="contained" onClick={Add}>ADD</Button>
          </ButtonGroup>
          <ButtonGroup orientation="vertical"
            aria-label="vertical outlined button group" >   
            <Button variant="contained" onClick={Remove} >Remove</Button>
          </ButtonGroup>
        </Box>
      <div>{count}</div>
    </div>
  );
}
