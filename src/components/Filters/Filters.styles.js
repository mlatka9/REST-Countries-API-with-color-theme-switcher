import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
  gap: 10px 30px;
`;

export const InputField = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  max-width: 400px;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  svg {
    width: 20px !important;
    height: auto;
    margin: 0 20px;
  }
  input {
    color: ${({ theme }) => theme.colors.white};
    width: calc(100% - 65px);
    background-color: inherit;
    border: none;
    font-weight: 600;
    /* outline: none; */
    font-family: inherit;
    caret-color: ${({ theme }) => theme.colors.white};
    &::placeholder {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const OptionWrapper = styled.div`
  position: relative;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
`;
export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  width: 200px;
  height: 50px;
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: left;
  padding-left: 20px;
  font-weight: 600;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 40px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  list-style: none;
  padding: 0;
  width: 200px;
  border-radius: 5px;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  z-index: 20;
`;

export const MenuItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 20px;
  margin: 5px 0;
  font-weight: 600;
  background-color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.darkishBlue : theme.colors.darkBlue)}; ;
`;
