import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 5px;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  img {
    display: block;
    /* object-fit: cover; */
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  div {
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  p {
    opacity: 0.85;
    letter-spacing: 0.5px;
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 7px 0;
    font-weight: ${({ theme }) => theme.fontWeight.slim};
    span {
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`;
