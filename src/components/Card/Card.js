import { Wrapper } from './Card.styles';
import { StyledLink } from './Card.styles';

const Card = ({ country }) => {
  const {
    name: { common },
    capital,
    continents: [continet],
    population,
    flags: { png },
  } = country;

  return (
    <Wrapper>
      <StyledLink to={`country/${common}`}>
        <img src={png} alt={common} />
        <div>
          <h3>{common}</h3>
          <p>
            <span>Population:</span> {population}
          </p>
          <p>
            <span>Region:</span> {continet}
          </p>
          <p>
            <span>Capital:</span> {capital}
          </p>
        </div>
      </StyledLink>
    </Wrapper>
  );
};

export default Card;
