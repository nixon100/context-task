import React from 'react'
import Result from './components/Result'
import { ThemeProvider } from './ContextProvider'
import './App.css'

export default function App() {
  return (
    <ThemeProvider>
      <Result/>
    </ThemeProvider>
  )
}