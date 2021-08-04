import styled from "styled-components";

export const SearchField = styled.div`
    display: flex;
    align-items: center;
    border-radius: 33px;
    background-color: ${({ theme }) => theme.colors.navigation.elems};
    border: 1px solid ${({ theme }) => theme.colors.navigation.border};
    flex:0 1 auto; ;
 
`;

export const SearchInput = styled.input`
    min-width: 200px;   
    max-width: 432px;
    height: 48px;
    border: none;
    box-sizing: border-box;
    border-radius: 33px;
    background-color: ${({ theme }) => theme.colors.navigation.elems}; 

&::placeholder {
    font-size: 16px;

}
`;

export const SearchIcon = styled.img`
    width: 24px;
    height: 24px;
    margin: 10px 10px;
`;

