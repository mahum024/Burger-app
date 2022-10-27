import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numOfTomatoes: 0, 
  numOfMeat: 0, 
  numOfLettuse: 0, 
  numOfCheese: 0, 
  totalAmount: 100
}

const ingredientSlice = createSlice({
  name: 'ingredient',
  initialState,
  reducers: {
    add_tomatoes: state => {
      return{
        ...state,
        numOfTomatoes: state.numOfTomatoes + 1,
        totalAmount: state.totalAmount + 10
      }
    },
    remove_tomatoes: state => {
      if(state.numOfTomatoes >0){
        return{
          ...state,
        numOfTomatoes: state.numOfTomatoes -1 ,
        totalAmount: state.totalAmount -10
        }
      }
      else{
        return{
          ...state
        }
      }
    },

    add_meat: state => {

      return{
        ...state,
        numOfMeat: state.numOfMeat + 1,
        totalAmount: state.totalAmount + 40
      }
    },

    remove_meat: state => {
      if(state.numOfMeat > 0 ){
        return{
          ...state,
          numOfMeat: state.numOfMeat -1,
          totalAmount: state.totalAmount - 40
        }
      }
      else{
        return{
          ...state
        }
      }
    },

    add_cheese: state => {
      return{
        ...state,
        numOfCheese: state.numOfCheese + 1 ,
        totalAmount: state.totalAmount + 30
      }
    },

    remove_cheese: state => {
      if(state.numOfCheese > 0){
        return{
          ...state,
          numOfCheese: state.numOfCheese- 1 ,
          totalAmount: state.totalAmount -30
        }
      }
      else{
        return{
          ...state
        }
      }
    },

    add_lettuse: state => {
      return{
        ...state,
        numOfLettuse: state.numOfLettuse + 1, 
        totalAmount: state.totalAmount + 20
      }
    },

    remove_lettuse: state => {
      if(state.numOfLettuse >0 ){
        return{
          ...state,
          numOfLettuse: state.numOfLettuse- 1 ,
          totalAmount: state.totalAmount - 20
        }
      }
      else{
        return{
          ...state
        }
      }
    },
  }
})

export default ingredientSlice.reducer
export const { add_tomatoes, remove_tomatoes, add_cheese, remove_cheese, add_meat, remove_meat, add_lettuse, remove_lettuse } = ingredientSlice.actions
