import React, { useContext, useState } from 'react'
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
//////////////////////////////////////
  function toggleTheme() {
    console.log(darkTheme);
    // setDarkTheme (prevDarkTheme => ! prevDarkTheme)
  }
  const handleDecrease = (index) => {
    return () => {
      const newItems = [...darkTheme];
      newItems[index].quantity -= 1;
      setDarkTheme(newItems);
    };
  };

  const handleToggleTheme = (index) => {
    return () => {
      const newItems = [...darkTheme];
      newItems[index].quantity += 1;
      setDarkTheme(newItems);
    };
  };

  const handleSaveForLater = (index) => {
    // Save for later logic
  };

  const handleRemove = (index) => {
    // Remove product logic
    const newItems = darkTheme.filter((_, i) => i!== index);
    setDarkTheme(newItems);
  };
  const Calculate = () => {
    const prices = darkTheme.map((e) => e.price);
    const total = prices.reduce((acc, price) => acc + price, 0);
    setTotal(total);
  }
 
  const setTotall =(val)=> {
    setTotal(val)
  }


  return (
    <ThemeContext.Provider value={{darkTheme,toggleTheme,handleDecrease,handleToggleTheme,handleRemove,Total,setTotall,Calculate}}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}