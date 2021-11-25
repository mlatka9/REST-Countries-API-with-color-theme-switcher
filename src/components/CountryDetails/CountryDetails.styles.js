import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  padding: 50px;
  color: ${({ theme }) => theme.colors.white};
`;
export const InfoWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  img {
    width: 100%;
    align-self: center;
    justify-self: right;
    max-width: 600px;
  }
`;

export const Info = styled.div`
  max-width: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px auto auto auto;
  gap: 30px 30px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  h2 {
    grid-column: 1 / 3;
    margin: 0;
    align-self: flex-end;
    @media (max-width: 800px) {
      grid-column: 1 / 2;
    }
  }
  div:nth-of-type(1),
  div:nth-of-type(2) {
    align-self: baseline;
    @media (max-width: 800px) {
      grid-column: 1 / 2;
    }
  }

  div:nth-of-type(1) {
  }

  div:nth-of-type(1) {
  }
`;

export const StyledBorderCountries = styled.div`
  grid-column: 1 / 3;
  font-size: ${({ theme }) => theme.fontSize.s};
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const BorderCountryList = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 14px 35px;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  letter-spacing: 0.5px;
  text-decoration: none;
  margin-bottom: 50px;
`;
