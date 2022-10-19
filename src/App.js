import './App.css';
import top from '../src/assets/top.jpg'
import bottom from '../src/assets/bottom.jpg'
import Ingredients from './components/Ingredients';
import { useState, useEffect } from 'react';
import { Stack } from '@mui/system';
import BurgerFilling from './components/BurgerFilling';

function App() {
  const [totalAmount, setTotal] = useState(100)
  const [tomatoCount, setTomatoCount] = useState(0)
  const [meatCount, setMeatCount] = useState(0)
  const [lettuseount, setLettuseCount] = useState(0)
  const [cheeseCount, setCheeseount] = useState(0)
  
  useEffect(()=>{
    setTomatoCount(prev => prev)
    setCheeseount(prev => prev)
    setMeatCount(prev => prev)
    setLettuseCount(prev => prev)
 
  }, [tomatoCount,cheeseCount, meatCount,lettuseount ])
   const Total = (price, item , method) => {
    
    setTotal(price)
    
    switch (method) {
      case "add":
        switch (item) {
          case "Meat":
            setMeatCount(prev => prev +1)
            break;
          case "Lettuse":
            setLettuseCount(prev => prev +1)
            break;
          case "Cheese":
            setCheeseount(prev => prev +1)
            break;
          case "Tomato":
            setTomatoCount(prev => prev +1)
            break;
        
          default:
            break;
        }
        break;

        case "remove":
          switch (item) {
            case "Meat":
              setMeatCount(prev => prev -1)
              break;
            case "Lettuse":
              setLettuseCount(prev => prev -1)
              break;
            case "Cheese":
              setCheeseount(prev => prev -1)
              break;
            case "Tomato":
              setTomatoCount(prev => prev -1)
              break;
          
            default:
              break;
          }
    
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
          <BurgerFilling name= "Lettuse"  count= {lettuseount} />
         
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
