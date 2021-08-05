import styled from "styled-components";

export const SearchField = styled.div`
    display: flex;
    align-items: center;
    border-radius: 33px;
    background-color: ${({ theme }) => theme.colors.navigation.elems};
    border: 1px solid ${({ theme }) => theme.colors.navigation.border};
 
`;

export const SearchInput = styled.input`  
    width: 432px;
    height: 48px;
    border: none;
    box-sizing: border-box;
    border-radius: 33px;
    background-color: ${({ theme }) => theme.colors.navigation.elems}; 
    outline:none;

    &::placeholder {
        font-size: 16px;
    }
`;

    export const SearchIcon = styled.img`
    width: 24px;
    height: 24px;
    margin: 10px 20px;
`;

