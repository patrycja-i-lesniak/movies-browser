import dangerIcon from "./dangerIcon.svg";
import { DangerImage, StyledNavLink, Subtitle, Title, Wrapper } from "./styled";

const Error = () => (
    <Wrapper>
        <DangerImage src={dangerIcon} alt="" />
        <Title>Ooops! Something went wrong... </Title>
        <Subtitle>Please check your network connection and try again</Subtitle>
        <StyledNavLink to="/">Back to homepage</StyledNavLink>
    </Wrapper>
);

export default Error;