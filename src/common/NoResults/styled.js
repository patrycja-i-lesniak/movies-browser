import styled from "styled-components";
import { Header } from "../Loader/styled";
import { ReactComponent as Image } from "./NoResultsPicture.svg";

export const NoResultsHeader = styled(Header)`
    margin: 56px 56px 40px;

    @media ( max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        margin: 36px 36px 40px;
    };

    @media ( max-width: ${({ theme }) => theme.breakpoints.small}px) {
        margin: 0;
    };
`;

export const NoResultsImage = styled(Image)`
    margin: 0 auto;
    width: 668px;
    height: 508px;

    @media ( max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        width: 48%;
        height: 48%;
    };
`;