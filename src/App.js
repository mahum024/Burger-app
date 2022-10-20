import './App.css';
import top from '../src/assets/top.jpg'
import bottom from '../src/assets/bottom.jpg'
import Ingredients from './components/Ingredients';
import { useState, useReducer } from 'react';
import { Stack } from '@mui/system';
import BurgerFilling from './components/BurgerFilling';

const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    default :
     break;
  }
}

function App() {

  const [tomatoCount, dispatchTomato] = useReducer(reducer, initialState)
  const [meatCount, dispatchMeat] = useReducer(reducer, initialState)
  const [lettuseCount, dispatchLettuse] = useReducer(reducer, initialState)
  const [cheeseCount, dispatchCheese] = useReducer(reducer, initialState)
 
  const [totalAmount, setTotal] = useState(100)
 
  const Total = (price, item , method) => {
    
    setTotal(price)
    switch (method) {
      case "add":
        switch (item) {
          case "Meat":
            dispatchMeat("increment")
            break;
          case "Lettuse":
            dispatchLettuse("increment")
            break;
          case "Cheese":
            dispatchCheese("increment")
            break;
          case "Tomato":
            dispatchTomato("increment")
            break;
        
          default:
            break;
        }
        break;
      case "remove":
        switch (item) {
          case "Meat":
            dispatchMeat("decrement")
            break;
          case "Lettuse":
            dispatchLettuse("decrement")
            break;
          case "Cheese":
            dispatchCheese("decrement")
            break;
          case "Tomato":
            dispatchTomato("decrement")
            break;
        
          default:
            break;
        }
      break;
      default:
        break;
    }
   
  }


 return (
    
    <div className="App">
     <div className='BurgerContent' style={{overflowY:"scroll"}}>
        <Stack spacing={2}  >
          <img src=  {top}  alt=""/>

          <BurgerFilling  name= "Tomato"  count= {tomatoCount} /> 
          <BurgerFilling name= "Cheese"  count= {cheeseCount} />
          <BurgerFilling name= "Meat"  count= {meatCount} />
          <BurgerFilling name= "Lettuse"  count= {lettuseCount} />
         
          <img src=  {bottom} alt=""/>
        </Stack>
      </div>

      <div className='AddIngredients'>
        <div className='Ingredients'>
            <div className='CurrentPrice'>
             Current Price: RS {totalAmount}
            </div>
            <Ingredients item="Tomato" price={10} total={Total} totalPrice={totalAmount}/>
            <Ingredients item="Lettuse" price={20} total={Total} totalPrice={totalAmount}/>
            <Ingredients item="Cheese" price={30} total={Total} totalPrice={totalAmount}/>
            <Ingredients item="Meat" price={40} total={Total} totalPrice={totalAmount} />
           

        </div>
      </div>
    </div>
  );
}

export default App;
