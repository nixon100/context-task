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
  const [QuantityV, setQuantityV] = useState([])
  const [Prices,setPrices] = useState(5)
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

  // const handleToggleTheme = (index) => {
  //   return () => {
  //     const newItems = [...darkTheme];
  //     newItems[index].quantity += 1;
  //     setDarkTheme(newItems);
  //     const newItem1 = [...darkTheme];
  //     newItem1[index]["perPrice"] = "gshgjg"
  //     // newItem1[index].perPrice = newItem1[index].quantity*newItem1[index].price
  //     // setDarkTheme(newItem1)
  //     console.log(darkTheme)
  //   };
  // };
  const handleToggleTheme = (index) => {
    return () => {
      setDarkTheme((prevDarkTheme) => {
        const newItems = [...prevDarkTheme];
        newItems[index] = {
          ...newItems[index],
          quantity: newItems[index].quantity + 1,
          perPrice: "gshgjg" // or newItems[index].quantity * newItems[index].price
        };
        return newItems;
      });
      console.log(darkTheme)
    };
  };
  console.log(darkTheme)
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
  // const QuaV =()=>{
  //     const a = darkTheme.map((item, index) => (item.price * darkTheme[index].quantity));
  //     console.log(a)
  //     setQuantityV(a)
  // }
  // useEffect(() => {
  //   const a = darkTheme.map((item, index) => (item.price * darkTheme[index].quantity));
  //   console.log(a);
  //   setQuantityV(a);
  //   console.log(QuantityV)
  // }, [darkTheme]);
  // useEffect(() => {
  //   console.log(QuantityV);
  // });
 
  return (
    <ThemeContext.Provider value={{darkTheme,toggleTheme,handleDecrease,handleToggleTheme,handleRemove,Total,setTotall,Calculate,Prices}}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}