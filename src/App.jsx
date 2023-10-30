import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, lightTheme, darkTheme } from './styles/style';
import { ThemeProvider } from 'styled-components';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Pandemic from './Pages/Pandemic';
import Button from './componets/Buttons/Button';


function App() {
  const [theme,setTheme]= useState('light')
  const mudarTheme = () => {
    setTheme(mudar => mudar === 'light'? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme ==='light' ? lightTheme : darkTheme}>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pandemic' element={<Pandemic />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Container>
      <Button onClick={mudarTheme}/>
    </ThemeProvider>
  );
}

export default App;