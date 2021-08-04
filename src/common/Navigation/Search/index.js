import {
    SearchField,
    SearchInput,
    SearchIcon,
} from "./styled";
import searchIcon from "./searchIcon.svg";

export const Search = () => {
    return (
       <>
            <SearchField>
                <SearchIcon src={searchIcon} />
                <SearchInput placeholder="Search for movies.." ></SearchInput>
            </SearchField>
        </>
    )
}
