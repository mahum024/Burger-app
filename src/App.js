import './App.css';
import top from '../src/assets/top.jpg'
import bottom from '../src/assets/bottom.jpg'
import Ingredients from './components/Ingredients';
import { Stack } from '@mui/system';
import React from 'react'
import BurgerFilling from './components/BurgerFilling';
import { useSelector, useDispatch } from 'react-redux'
import { add_tomatoes, remove_tomatoes, add_cheese, remove_cheese, add_meat, remove_meat, add_lettuse, remove_lettuse  } from './features/ingredients/ingredientsSlice'


function App(props) {
  const numOfTomatoes = useSelector(state => state.ingredient.numOfTomatoes)
  const numOfMeat = useSelector(state => state.ingredient.numOfMeat)
  const numOfLettuse = useSelector(state => state.ingredient.numOfLettuse)
  const numOfCheese = useSelector(state => state.ingredient.numOfCheese)
  const total = useSelector(state => state.ingredient.totalAmount)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
     <div className='BurgerContent' style={{overflowY:"scroll"}}>
        <Stack spacing={2}  >
          <img src=  {top}  alt=""/>

          <BurgerFilling  name= "Tomato"  count= {numOfTomatoes} /> 
          <BurgerFilling name= "Cheese"  count= {numOfCheese } />
          <BurgerFilling name= "Meat"  count= {numOfMeat} />
          <BurgerFilling name= "Lettuse"  count= {numOfLettuse } />
         
          <img src=  {bottom} alt=""/>
        </Stack>
      </div>
      <div className='AddIngredients'>
        <div className='Ingredients'>
            <div className='CurrentPrice'>
             Current Price: RS {total}
            </div>
            <Ingredients item="Tomatoes" add={() => dispatch(add_tomatoes()) } remove={() => dispatch(remove_tomatoes())}/>
            <Ingredients item="Cheese"  add={() => dispatch(add_cheese()) } remove={() => dispatch(remove_cheese())}/> 
            <Ingredients item="Meat" add={() => dispatch(add_meat()) } remove={() => dispatch(remove_meat())} />
            <Ingredients item="Lettuse" add={() => dispatch(add_lettuse()) } remove={() => dispatch(remove_lettuse())} />
        </div>
      </div>
    </div>
  );
}

export default App ;
