import dangerIcon from "./dangerIcon.svg";
import { DangerImage, StyledNavLink, Subtitle, Title, Wrapper } from "./styled";

const Error = ({status}) => {
    return (
        <Wrapper>
            <DangerImage src={dangerIcon} alt="" />
            <Title>Ooops! Something went wrong... </Title>
            <Subtitle>Please check your network connection and try again</Subtitle>
            {status === "noButton" ? "" : <StyledNavLink to="/">Back to homepage</StyledNavLink>}
        </Wrapper>
    );
};

export default Error;