import { ShowMore } from "./styled";
import { useState } from "react";
import { Arrow } from "../Arrow";

export const ShowMoreBiography = ({ biography }) => {
    const [showMore, setShowMore] = useState(false);

    return biography.length > 500 ?(
            <>
                {showMore ? biography : `${biography.slice(0, 500)}..`}
                <ShowMore onClick={() => setShowMore(!showMore)}>
                    <span>
                        {showMore ? "Show less" : "Show more"}
                    </span>
                    <Arrow showMore={showMore} />
                </ShowMore>
            </>
        ) : (
            <>
                {biography}
            </> 
        );
};


export const ShowMoreButton = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <ShowMore onClick={() => setShowMore(!showMore)}>
            <span>
                {showMore ? "Show less" : "Show more"}
            </span>
            <Arrow showMore={showMore} />
        </ShowMore>
    );
};
