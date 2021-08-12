import { Pagination } from "../../common/Pagination";
import PeopleTiles from "../Tiles/PeopleTiles";

export const PersonList = () => {
    return (
        <>
            <PeopleTiles title="Popular people" />
            <Pagination />
        </>
    );
};