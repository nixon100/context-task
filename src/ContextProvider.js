import React, { useContext, useState,useEffect } from 'react'
import Pro from './components/Products.json'

export const ThemeContext = React.createContext()
export const ThemeUpdateContext = React.createContext()

export function useTheme () {
  return useContext(ThemeContext)
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}
//////////////////////////////////////////////////
export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(Pro.products)
  const [Total,setTotal] = useState(0)
  const [arrive, setArrive] = useState(Pro.products)

//////////////////////////////////////
  const handleSaveForLater = (index) => {
    // Save for later logic
  };

  const handleRemove = (index) => {
    // Remove product logic
    const newItems = arrive.filter((_, i) => i!== index);
    setArrive(newItems);
  };
  const Calculate = () => {
    const prices = arrive.map((e) => e.price);
    const total = prices.reduce((acc, price) => acc + price, 0);
    setTotal(total);
  }

  const doll = (index) =>{
    return () => {
      const newItems = [...arrive];
      newItems[index].quantity += 1;
      newItems[index].price = newItems[index].quantity*darkTheme[index].price
      setArrive(newItems);
    };
  }
  const doll1 = (index) => {
    return () => {
      const newItems = [...arrive];
      if (newItems[index].quantity > 1) {
        newItems[index].quantity -= 1;
        newItems[index].price = newItems[index].quantity * darkTheme[index].price;
        setArrive(newItems);
      }
    };
  };

 
  console.log(arrive)
  return (
    <ThemeContext.Provider value={{darkTheme,handleRemove,Total,Calculate,doll,doll1,setArrive,arrive}}>
        {children}
    </ThemeContext.Provider>
  )
}