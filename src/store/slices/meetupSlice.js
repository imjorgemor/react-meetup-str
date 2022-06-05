import { createSlice } from '@reduxjs/toolkit';

export const meetupSlice = createSlice({
    name: 'meetup',
    initialState: {
        meetups: [],
        isLoading: false,
        favorites: []
    },
    reducers: {
        startLoadingMeetups: (state) => {
            state.isLoading = true;
        },
        setMeetups: (state, action) => {
            state.isLoading = false;
            state.meetups = action.payload.meetups
        },
        setFavorite: (state, action) => {
            state.favorites = [...state.favorites, action.payload]    
        }
    },
});


// Action creators are generated for each case reducer function
export const { startLoadingMeetups, setMeetups, setFavorite } = meetupSlice.actions;