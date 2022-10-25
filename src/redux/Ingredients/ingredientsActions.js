import { ADD_TOMATOES } from "./ingredientsTypes"
import { REMOVE_TOMATOES } from "./ingredientsTypes"
import { ADD_CHEESE } from "./ingredientsTypes"
import { REMOVE_CHEESE } from "./ingredientsTypes"
import { ADD_LETTUSE } from "./ingredientsTypes"
import { REMOVE_LETTUSE } from "./ingredientsTypes"
import { ADD_MEAT } from "./ingredientsTypes"
import { REMOVE_MEAT } from "./ingredientsTypes"

export const addTomatoes = () =>{
  return {
    type: ADD_TOMATOES
  }
}

export const removeTomatoes = () =>{
  return {
    type: REMOVE_TOMATOES
  }
}

export const addMeat = () =>{
  return {
    type: ADD_MEAT
  }
}

export const removeMeat = () =>{
  return {
    type: REMOVE_MEAT
  }
}

export const addLettuse = () =>{
  return {
    type: ADD_LETTUSE
  }
}

export const removeLettuse = () =>{
  return {
    type: REMOVE_LETTUSE
  }
}

export const addCheese = () =>{
  return {
    type: ADD_CHEESE
  }
}

export const removeCheese = () =>{
  return {
    type: REMOVE_CHEESE
  }
}