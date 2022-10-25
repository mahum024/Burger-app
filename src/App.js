import './App.css';
import top from '../src/assets/top.jpg'
import bottom from '../src/assets/bottom.jpg'
import Ingredients from './components/Ingredients';
import { Stack } from '@mui/system';
import React from 'react'
import { addTomatoes } from '../src/redux'
import { addCheese } from '../src/redux'
import { addLettuse } from '../src/redux'
import { addMeat } from '../src/redux'
import { removeTomatoes } from '../src/redux'
import { removeCheese } from '../src/redux'
import { removeLettuse } from '../src/redux'
import { removeMeat } from '../src/redux'
import { connect } from 'react-redux'
import BurgerFilling from './components/BurgerFilling';

function App(props) {
  
  return (
    <div className="App">
     <div className='BurgerContent' style={{overflowY:"scroll"}}>
        <Stack spacing={2}  >
          <img src=  {top}  alt=""/>

          <BurgerFilling  name= "Tomato"  count= {props.numOfTomatoes} /> 
          <BurgerFilling name= "Cheese"  count= {props.numOfCheese} />
          <BurgerFilling name= "Meat"  count= {props.numOfMeat} />
          <BurgerFilling name= "Lettuse"  count= {props.numOfLettuse} />

         
          <img src=  {bottom} alt=""/>
        </Stack>
      </div>

      <div className='AddIngredients'>
        <div className='Ingredients'>
            <div className='CurrentPrice'>
             Current Price: RS {props.totalPrice}
            </div>
            <Ingredients item="Tomatoes" add={props.addTomatoes} remove={props.removeTomatoes} />
            <Ingredients item="Cheese" add={props.addCheese} remove={props.removeCheese} />
            <Ingredients item="Meat" add={props.addMeat} remove={props.removeMeat} />
            <Ingredients item="Lettuse" add={props.addLettuse} remove={props.removeLettuse} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfTomatoes: state.numOfTomatoes ,
    numOfCheese: state.numOfCheese,
    numOfLettuse: state.numOfLettuse ,
    numOfMeat: state.numOfMeat, 
    totalPrice: state.totalPrice
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    addTomatoes: () => dispatch( addTomatoes()),
    addCheese: () => dispatch( addCheese()),
    addMeat: () => dispatch( addMeat()),
    addLettuse: () => dispatch( addLettuse()),

    removeTomatoes: () => dispatch( removeTomatoes()),
    removeCheese: () => dispatch( removeCheese()),
    removeMeat: () => dispatch( removeMeat()),
    removeLettuse: () => dispatch( removeLettuse()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
