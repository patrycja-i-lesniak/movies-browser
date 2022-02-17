import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1368px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin: 24px 16px;
  } ;
`;
