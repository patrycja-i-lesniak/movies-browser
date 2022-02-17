import styled from 'styled-components';

export const ShowMore = styled.button`
  display: block;
  border: none;
  background: none;
  padding: 2px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  margin: 0 auto 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 10px;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const ButtonContentWrapper = styled.span`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 6px;
  align-items: center;
`;
