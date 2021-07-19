import { TaskList } from './components/TaskList/TaskList'
import  { Header }  from "./components/Header/Header";
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { useState } from 'react';

export function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
 
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <GlobalStyle />
          <Header toggleTheme={toggleTheme}/>
          <TaskList />  
      </div>
    </ThemeProvider>
  )
}