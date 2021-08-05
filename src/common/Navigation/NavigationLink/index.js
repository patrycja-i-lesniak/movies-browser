import { List, StyledNavLink, Item } from "./styled";

export const NavigationLink = () => {
    return (
        <nav>
            <List>
                <Item>
                    <StyledNavLink to="/movies">Movies</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to="/people">People</StyledNavLink>
                </Item>
            </List>
        </nav>
    );
};



