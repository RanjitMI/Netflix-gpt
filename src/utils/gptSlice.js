import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false,
        movieResults: null,
        movieNames: null,
        gptMovies : null
    },
    reducers: {
        toggleGptSearchView : (state , action)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults : (state , action  )=>{
            state.gptMovies = action.payload
        },
    }
});

export const {toggleGptSearchView , addGptMovieResults} = gptSlice.actions;
export default gptSlice.reducer;
