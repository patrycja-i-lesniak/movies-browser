import { createSlice } from '@reduxjs/toolkit';

const personDetailsSlice = createSlice({
  name: 'personDetails',
  initialState: {
    status: 'initial',
    personData: null,
    personCredits: null,
  },
  reducers: {
    fetchPersonDetails: () => ({
      status: 'loading',
    }),
    fetchPersonDetailsSuccess: (_, { payload: personDetails }) => ({
      status: 'success',
      personData: personDetails.personData,
      personCredits: personDetails.personCredits,
    }),
    fetchPersonDetailsError: () => ({
      status: 'error',
      personData: null,
      personCredits: null,
    }),
  },
});

export const {
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
} = personDetailsSlice.actions;

export const selectPersonDetailsState = (state) => state.personDetails;

export const selectStatus = (state) => selectPersonDetailsState(state).status;
export const selectPersonData = (state) =>
  selectPersonDetailsState(state).personData;
export const selectPersonCredits = (state) =>
  selectPersonDetailsState(state).personCredits;

export default personDetailsSlice.reducer;
