import React from 'react'
import { connect, useSelector } from 'react-redux'

import PreQuizForm from './components/PreQuizForm'
import Question from './components/Question'
import Result from './components/Result'
import Navbar from './components/Navbar'

// Dark Mode

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme/theme'
import { GlobalStyles } from './theme/global'
import { useDarkMode } from './theme/useDarkMode'

const App = (props) => {

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  

  const {formActive, questionActive, resultActive} = useSelector(state => state)
  
  let renderItem = null
  if(formActive)          renderItem =  <PreQuizForm />
  else if(questionActive) renderItem =  <Question />
  else if(resultActive)   renderItem =  <Result />
  
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Navbar checked={theme === 'dark'} clickHandler={toggleTheme}/>
      {renderItem}
    </ThemeProvider>
  )
}


export default connect()(App);
