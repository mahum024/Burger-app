import { ADD_TOMATOES } from "./ingredientsTypes"
import { REMOVE_TOMATOES } from "./ingredientsTypes"
import { ADD_CHEESE } from "./ingredientsTypes"
import { REMOVE_CHEESE } from "./ingredientsTypes"
import { ADD_LETTUSE } from "./ingredientsTypes"
import { REMOVE_LETTUSE } from "./ingredientsTypes"
import { ADD_MEAT } from "./ingredientsTypes"
import { REMOVE_MEAT } from "./ingredientsTypes"
const initialState = {
  numOfTomatoes: 0,
  numOfMeat: 0,
  numOfLettuse: 0,
  numOfCheese: 0, 
  totalPrice: 100
}
const TomatoesReducer = (state = initialState, action) => {
 switch (action.type) {

  case ADD_TOMATOES: return{
    ...state,
    numOfTomatoes: state.numOfTomatoes +1, 
    totalPrice: state.totalPrice + 10
  }
  
  case ADD_MEAT: return{
    ...state,
    numOfMeat: state.numOfMeat +1,
    totalPrice: state.totalPrice + 40
  }
 
  case ADD_LETTUSE: return{
    ...state,
    numOfLettuse: state.numOfLettuse +1,
    totalPrice: state.totalPrice + 20
  }
  
  case ADD_CHEESE: return{
    ...state,
    numOfCheese: state.numOfCheese +1,
    totalPrice: state.totalPrice + 30
  }

  case REMOVE_CHEESE: 
  if(state.numOfCheese > 0 ){
    return{
      ...state,
      numOfCheese: state.numOfCheese -1,
      totalPrice: state.totalPrice - 30
    }
  }else{
    return{
      ...state,
      numOfCheese: state.numOfCheese,
      totalPrice: state.totalPrice 
    }
  }
  
  case REMOVE_MEAT: 
  if(state.numOfMeat > 0 ){
    return{
      ...state,
      numOfMeat: state.numOfMeat -1,
      totalPrice: state.totalPrice - 40
    }
  }else{
    return{
      ...state,
      numOfMeat: state.numOfMeat ,
      totalPrice: state.totalPrice 
    }
  }

  case REMOVE_LETTUSE: 
  if(state.numOfLettuse > 0 ){
    return{
      ...state,
      numOfLettuse: state.numOfLettuse -1,
      totalPrice: state.totalPrice - 20
    }
  } else{
    return{
      ...state,
      numOfLettuse: state.numOfLettuse,
      totalPrice: state.totalPrice 
    }
  }

  case REMOVE_TOMATOES: 
  if(state.numOfTomatoes > 0 ){
    return{
      ...state,
      numOfTomatoes: state.numOfTomatoes -1,
      totalPrice: state.totalPrice - 10
    }
  } else{
    return{
      ...state,
      numOfTomatoes: state.numOfTomatoes ,
      totalPrice: state.totalPrice 
    }
  }
  default:
    return state
    
 }
}

export default TomatoesReducer;