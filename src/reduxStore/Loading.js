import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = !state.loading;
    },
  },
});

export const getLoading = () => async dispatch => {
  dispatch(setLoading());
};

export default loadingSlice.reducer;

const { setLoading } = loadingSlice.actions;
export { setLoading };
