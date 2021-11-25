import Card from 'components/Card/Card';

import Filters from 'components/Filters/Filters';
import { Wrapper, CardsList, StyledLoading } from './SearchPage.styles';
import useCountries from 'Providers/CountriesProvider';
import { useState } from 'react';
import { ReactComponent as Icon } from 'assets/loadingIcon.svg';

const SearchPage = () => {
  const { countries, state } = useCountries();
  const [selectedValue, setSelectedValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  function handleSelectedItemChange({ selectedItem }) {
    setSelectedValue(selectedItem);
  }

  let content;
  if (state === 'loading') {
    content = (
      <StyledLoading>
        <Icon />
        Loading...
      </StyledLoading>
    );
  } else if (state === 'resolved') {
    const list = countries
      .filter((country) => country.name.common.toLowerCase().includes(inputValue.toLowerCase()))
      .filter((country) => {
        return country.continents.some((continent) => continent.toLowerCase().includes(selectedValue.toLowerCase()));
      })
      .map((country) => <Card country={country} key={country.name.common} />);
    content = <CardsList>{list}</CardsList>;
  } else {
    content = <h2>Error...</h2>;
  }

  return (
    <Wrapper>
      <Filters
        selectedValue={selectedValue}
        handleSelectedItemChange={handleSelectedItemChange}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {content}
    </Wrapper>
  );
};

export default SearchPage;
