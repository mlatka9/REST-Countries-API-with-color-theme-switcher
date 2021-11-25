import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme, lightTheme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Header/Header';
import SearchPage from 'components/SearchPage/SearchPage';
import styled from 'styled-components';
import CountryDetails from 'components/CountryDetails/CountryDetails';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CountriesProvider } from 'Providers/CountriesProvider';
import useDarkMode from 'hooks/useDarkMode';

const Content = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 90px 1fr;
`;

function App() {
  const { theme: currentTheme, toggleTheme } = useDarkMode();
  const isLight = currentTheme === 'light';

  return (
    <ThemeProvider theme={isLight ? lightTheme : theme}>
      <CountriesProvider>
        <GlobalStyle />
        <Content>
          <Header toggleTheme={toggleTheme} currentTheme={currentTheme} />
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="country/:name" element={<CountryDetails />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Content>
      </CountriesProvider>
    </ThemeProvider>
  );
}

export default App;
