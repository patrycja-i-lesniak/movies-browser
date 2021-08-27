import dangerIcon from "./dangerIcon.svg";
import { DangerImage, StyledNavLink, Subtitle, Title, Wrapper } from "./styled";

const Error = ({ reloadButton }) => {
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <Wrapper>
            <DangerImage src={dangerIcon} alt="error image" />
            <Title>Ooops! Something went wrong... </Title>
            <Subtitle>Please check your network connection and try again</Subtitle>
            {reloadButton
                ? <StyledNavLink as="button" onClick={reloadPage}>Reload page</StyledNavLink>
                : <StyledNavLink to="/">Back to homepage</StyledNavLink>}
        </Wrapper>
    );
};

export default Error;