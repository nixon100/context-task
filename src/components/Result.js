import React, { useContext } from 'react'
import { useTheme, useThemeUpdate,ThemeContext } from '../ContextProvider'
import Item from './Item';

export default function FunctionContextComponent() {
  const darkTheme22 = useContext(ThemeContext)
  const {darkTheme, toggleTheme,handleDecrease ,handleToggleTheme ,handleRemove} = darkTheme22
  // const toggleTheme = useThemeUpdate()
console.log(darkTheme);


  return (
    <div className="CartContainer">
    <div className="Header">
       <h3 className="Heading">Shopping Cart</h3>
       <h5 className="Action">Remove all</h5>
   </div>  
 {darkTheme.map((item, index) => (
   <Item
     key={item.id}
     item={item}
     onDecrease={handleDecrease(index)}
      onToggleTheme={handleToggleTheme(index)}
    //  onSaveForLater={() => handleSaveForLater(index)}
    onRemove={() => handleRemove(index)}
   />
 ))}
    <hr/> 
      <div className="checkout">
      <div className="total">
        <div>
          <div className="Subtotal">Sub-Total</div>
          <div className="items">2 items</div>
        </div>
        <div className="total-amount">$6.18</div>
      </div>
      <button className="button" >Checkout</button>
      </div>
      <div className="App"> 
        </div>
    </div>

  )
}