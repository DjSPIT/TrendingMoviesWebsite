import React from 'react';

// Routing
import { BrowserRouter as Bw, Routes, Route } from "react-router-dom";


// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';

// Context
import ContextProvider from './context';

//Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Bw>
    <ContextProvider>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>}></Route> 
          <Route path='/:movieId' element={<Movie />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      <GlobalStyle />
    </ContextProvider>
  </Bw>
);


export default App;
