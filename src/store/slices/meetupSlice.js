import { createSlice } from '@reduxjs/toolkit';

export const meetupSlice = createSlice({
    name: 'meetup',
    initialState: {
        brandName: "meetup for str",
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
        addFavorite: (state, action) => {
            state.favorites = [...state.favorites, action.payload]
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload)

        }
    },
});


// Action creators are generated for each case reducer function
export const { startLoadingMeetups, setMeetups, addFavorite, removeFavorite } = meetupSlice.actions;