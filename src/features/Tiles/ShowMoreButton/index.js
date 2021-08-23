import { ShowMore } from "./styled";
import { useState } from "react";
import { Arrow } from "../Arrow";

const ShowMoreButton = ({ biography }) => {
    const [showMore, setShowMore] = useState(false);

    return biography.length > 500 ? (
        <>
            {showMore ? biography : `${biography.slice(0, 650)}..`}
            <ShowMore onClick={() => setShowMore(!showMore)}>
                <span>
                    {showMore ? "Show less" : "Show more"}
                </span>
                <Arrow showMore={showMore} />
            </ShowMore>
        </>
    ):(
        <>
            {biography}
        </>
    );
};

export default ShowMoreButton;
