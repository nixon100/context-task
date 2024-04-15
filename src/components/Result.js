import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../ContextProvider';
import Item from './Item';

export default function FunctionContextComponent() {
  const darkTheme22 = useContext(ThemeContext);
  const { darkTheme, handleRemove, Total, Calculate, doll, doll1, setArrive, arrive } = darkTheme22;

  useEffect(() => {
    setArrive((pre) => (pre.map((e) => ({ ...e, quantity: 1 }))));
  }, []);



  return (
    <div className="CartContainer">
      <div className="Header">
        <h3 className="Heading">Shopping Cart</h3>
        <h5 className="Action">Remove all</h5>
      </div>
      {Calculate()}
      {arrive.map((item, index) => (
        <>
          {/* Call the Calculate function with the item as an argument */}
          <Item
            key={item.id}
            item={item}
            onToggleTheme={darkTheme}
            ind={index}
            pri={doll(index)}
            pri1={doll1(index)}
            //  onSaveForLater={() => handleSaveForLater(index)}
            onRemove={() => handleRemove(index)}
          />
        </>
      ))}
      <hr />
      <div className="checkout">
        <div className="total">
          <div>
            <div className="Subtotal">Sub-Total</div>
            <div className="items">{arrive.length > 1 ? `${arrive.length} items` : `${arrive.length} item`}</div>
          </div>
          <div className="total-amount">{Total}</div>
        </div>
        <button className="button">Checkout</button>
      </div>
    </div>
  );
}