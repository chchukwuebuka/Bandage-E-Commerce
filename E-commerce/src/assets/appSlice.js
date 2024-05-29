import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  commers: [],
};

export const appSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const counter = {
        id: nanoid(),
        text: action.payload,
      };
      state.commers.push(counter);
    },
    decrement: (state, action) => {
      state.commers = state.commers.filter(
        (counter) => counter.id !== action.payload
      );
    },
  },
});

export const { increment, decrement } = appSlice.actions;

export default appSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchCounter = createAsyncThunk("fetchCounter", async () => {
//   const data = await fetch("https://dummyjson.com/products");
//   return data.json();
// });

// const appSlice = createSlice({
//   name: "counter",
//   initialState: {
//     isLoading: false,
//     data: "",
//     error: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchCounter.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchCounter.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.date = action.payload;
//     });
//     builder.addCase(fetchCounter.rejected, (state, action) => {
//       state.error = true;
//     });
//   },
// });

// export default appSlice;
