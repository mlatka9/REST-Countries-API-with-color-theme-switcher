import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  padding: 50px 100px;
  @media (max-width: 1000px) {
    padding: 50px;
  }
  @media (max-width: 500px) {
    padding: 20px;
  }
`;

export const CardsList = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, 320px);
  justify-content: space-evenly;
  margin: 0 auto;
  gap: 80px 30px;
  @media (max-width: 500px) {
    gap: 40px 30px;
  }
`;

const jump = keyframes`
  0%{
    transform: rotate(0)
  }100%{
    transform: rotate(360deg)
  }
 
`;

export const StyledLoading = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  height: 400px;
  letter-spacing: 1px;
  svg {
    width: 40px;
    height: auto;
    margin-right: 25px;
    animation: ${jump} 2.5s linear infinite;
  }
  path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;
