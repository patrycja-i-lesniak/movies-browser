import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  paginationQueryParamName,
  searchQueryParamName,
} from '../common/queryParamNames';
import { useQueryParameter } from '../common/useQueryParameter';

export const useFetchList = (fetchListLoading) => {
  const dispatch = useDispatch();
  const page = useQueryParameter(paginationQueryParamName);
  const searchQuery = useQueryParameter(searchQueryParamName);

  useEffect(() => {
    if (searchQuery && !page) {
      const timeoutID = setTimeout(() => {
        dispatch(fetchListLoading({ page, searchQuery }));
      }, 1_000);

      return () => clearTimeout(timeoutID);
    } else {
      dispatch(fetchListLoading({ page, searchQuery }));
    }
  }, [dispatch, page, searchQuery, fetchListLoading]);
};
