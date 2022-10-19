import React, { useEffect } from 'react'
import { useState} from 'react'
import tomato from '../assets/tomato.jpg'
import meat from '../assets/meat.jpg'
import lettuse from '../assets/lettuse.jpg'
import cheese from '../assets/cheese.jpg'

let TomatoContentLength = [];
let CheeseContentLength = [];
let LettuseContentLength = [];
let MeatContentLength = [];

const display = (itemName, itemCount) => {
  
    if(itemName == "Lettuse"){
      if(LettuseContentLength.length < itemCount){
        LettuseContentLength.push(<img src={lettuse} key={"lettuse"+LettuseContentLength.length} alt="" />);
      }else if(LettuseContentLength.length > itemCount){
        LettuseContentLength.pop()
      }
      return LettuseContentLength ;
    }
    else if(itemName == "Cheese"){
      if(CheeseContentLength.length < itemCount){
        CheeseContentLength.push(<img src={cheese} key={"cheese"+CheeseContentLength.length} alt="" />);
      }else if(CheeseContentLength.length > itemCount){
        CheeseContentLength.pop()
      }
      return CheeseContentLength ;
    }
    else if(itemName == "Tomato"){
      if(TomatoContentLength.length < itemCount){
        TomatoContentLength.push(<img src={tomato} key={"tomato"+TomatoContentLength.length} alt="" />);
      }else if(TomatoContentLength.length > itemCount){
        TomatoContentLength.pop()
      }
      return TomatoContentLength ;
    }
    else if(itemName == "Meat"){
      if(MeatContentLength.length < itemCount){
        MeatContentLength.push(<img src={meat} key={"meat"+MeatContentLength.length} alt="" />);
      }else if(MeatContentLength.length > itemCount){
        MeatContentLength.pop()
      }
      return MeatContentLength ;
    }
  
}

function BurgerFilling(props) {
 
   const [itemCount, setItemCount] = useState(0)
    useEffect(()=>{
    setItemCount(props.count)
  },[props.count] )
  
  return (
    display(props.name, itemCount)
  )

}


export default BurgerFilling