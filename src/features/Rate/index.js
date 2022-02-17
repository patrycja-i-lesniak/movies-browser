import star from '../Images/star.svg';
import {
  RateWrapper,
  StarIcon,
  VoteAverage,
  RatingScale,
  VoteCount,
} from './styled';

export const Rate = ({
  vote_average,
  vote_count,
  tile = false,
  small = false,
}) => {
  return (
    <RateWrapper>
      <StarIcon tile src={star} alt="star" />
      <VoteAverage tile>{vote_average}</VoteAverage>
      {tile && <RatingScale>/10</RatingScale>}
      <VoteCount tile>{vote_count} votes</VoteCount>
    </RateWrapper>
  );
};
