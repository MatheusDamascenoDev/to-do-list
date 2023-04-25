import  { Header }  from "./components/Header/Header";
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { useState } from 'react';
import { AppRoutes } from "./routes";
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
 
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
            <Header toggleTheme={toggleTheme}/>
            <AppRoutes />
            <ToastContainer autoClose={2000}/>
            <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}