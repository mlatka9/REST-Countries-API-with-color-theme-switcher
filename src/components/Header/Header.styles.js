import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  z-index: 10;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  @media (max-width: 1000px) {
    padding: 0 50px;
  }
  @media (max-width: 500px) {
    padding: 0 20px;
  }
  h1 {
    margin: 0;
    font-size: 20px;
    cursor: pointer;
  }
  button {
    background-color: ${({ theme }) => theme.colors.darkBlue};
    border: none;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    display: flex;
    align-items: center;
    letter-spacing: 0.7px;
    svg {
      width: 18px !important;
      height: auto;
      margin-right: 10px;
    }
  }
`;
