import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/contact';
import Blog from './pages/Blog';
import About from './pages/About';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/Styles/GlobalStyles';

const theme = {
  colors: {
    white: '#fff',
    darkgray: '#333',
    blue: '#5c00ff',
    bg: '#189AB4',
    green: 'rgb(96, 234, 96)',
    limegreen: '#81B622',
    tan: 'rgb(200, 180, 140)',
    black: 'rgb(0, 0, 0)',
    red: "#ff0000",
    darkgreen: "#008000"
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/blog/:id' component={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/About' element={<About />} />
          
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
