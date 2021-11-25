import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from './Header.styles';
import { useNavigate } from 'react-router';

const Header = ({ toggleTheme, currentTheme }) => {
  let navigate = useNavigate();
  const isLight = currentTheme === 'light';

  const gotoHome = () => {
    navigate('/');
  };
  return (
    <Wrapper>
      <h1 onClick={gotoHome}>Where in the world?</h1>
      <button onClick={toggleTheme}>
        <FontAwesomeIcon icon={isLight ? faSun : faMoon} />
        <span>{isLight ? 'Light' : 'Dark'} Mode</span>
      </button>
    </Wrapper>
  );
};

export default Header;
