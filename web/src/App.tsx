import  { Header }  from "./components/Header/Header";
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { useState } from 'react';
import { AppRoutes } from "./routes";
import { BrowserRouter } from 'react-router-dom'

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
            <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}