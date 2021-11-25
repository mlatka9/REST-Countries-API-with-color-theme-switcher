import React, { useState, useEffect, useContext, useCallback } from 'react';

const CountryContext = React.createContext({});

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState(null);
  const [state, setState] = useState('loading');

  const findCountryByName = useCallback(
    (name) => {
      if (!countries) return;
      return countries.find((country) => country.name.common === name);
    },
    [countries]
  );

  const findByAltSpelling = (altSpelling) => {
    console.log('findByAltSpelling');
    if (!countries) return;
    return countries.find((country) => country.cca3 === altSpelling);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        console.log(data);
        const sorted = data.sort((a, b) => b.population - a.population);
        setCountries(sorted);
        setState('resolved');
      } catch (err) {
        setState('error');
        console.log(err);
      }
    })();
  }, []);

  return <CountryContext.Provider value={{ countries, findCountryByName, findByAltSpelling, state }}>{children}</CountryContext.Provider>;
};

const useCountries = () => {
  const { countries, findCountryByName, findByAltSpelling, state } = useContext(CountryContext);

  return {
    countries,
    findCountryByName,
    findByAltSpelling,
    state,
  };
};

export default useCountries;
