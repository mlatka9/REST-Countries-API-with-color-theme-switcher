import styled from 'styled-components';

export const StyledSingleInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  letter-spacing: 0.4px;
  span {
    font-weight: 600;
    margin-right: 5px;
  }
`;

const SingleInfo = ({ title, stat, isArray }) => (
  <StyledSingleInfo>
    <span>{title}: </span>
    {isArray ? stat.join(', ') : stat}
  </StyledSingleInfo>
);

export default SingleInfo;
