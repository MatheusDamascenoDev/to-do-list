import { useContext } from 'react';
import { ContainerHeader } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import sun from '../../assets/sun.svg';
import monn from '../../assets/moon.svg'

type Props = {
  toggleTheme(): void;
}

export function Header({ toggleTheme }: Props) {
  const { colors, title } = useContext(ThemeContext)
  return (
    <ContainerHeader>
      <header className="header">
        <div className="main">
        <h1><span>To</span><span>Do</span></h1>
          <div className="toggle-container">
            <img src={sun} alt="" />
            <Switch
              className='switch'
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={25}
              width={60}
              handleDiameter={27}
              onColor='#273fad'
              offColor={shade(0.5, colors.blue)}
            >
            </Switch>
            <img src={monn} alt="" />
          </div>   
        </div>  
      </header>
    </ContainerHeader>
  )
}

