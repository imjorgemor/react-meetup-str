import { setMeetups, startLoadingMeetups } from "./meetupSlice"


export const getMeetups = () => {
    return async (dispatch) => {
        dispatch(startLoadingMeetups());

        const resp = await fetch("/data.json");
        const data = await resp.json();
        
        dispatch(setMeetups({meetups: data}));
    }
}