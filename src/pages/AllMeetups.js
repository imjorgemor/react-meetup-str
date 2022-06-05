import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MeetupList } from "../components/meetupList/MeetupList";
import { getMeetups } from "../store/slices/thunks";


export function AllMeetups() {
    const dispatch = useDispatch();
    const { meetups, isLoading } = useSelector(state => state.meetups);

    useEffect(() => {
        //use RTK QUERY for query improvement performance
        dispatch(getMeetups());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section>
            <h1>All Meetups</h1>
            {
                isLoading
                    ? <h4>loading...</h4>
                    : <MeetupList meetups={meetups} />
            }
        </section>
    );
}

export default AllMeetups;
