import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, lightTheme, darkTheme, Button } from './styles/style';
import { ThemeProvider } from 'styled-components';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Pandemic from './Pages/Pandemic';
import Header from './componets/Header/Header';


function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme ==='light' ? lightTheme : darkTheme}>
      <Container>
        <Header />
        <Button onClick={toggleTheme}><i class="bi bi-lightbulb"></i></Button>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pandemic' element={<Pandemic />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;