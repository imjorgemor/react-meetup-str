import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MeetupItem from "../components/meetups/MeetupItem";
import { getMeetups } from "../store/slices/thunks";
import styles from "./MeetupList.module.css";


export function AllMeetups() {

    const dispatch = useDispatch();
    const { meetups, isLoading } = useSelector(state => state.meetups)

    useEffect(() => {
        dispatch(getMeetups());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section>
            <h1>All Meetups</h1>
            <ul className={styles.list}>
                {
                    isLoading
                        ? <h2>loading...</h2>
                        : meetups.map(meetup => <MeetupItem key={meetup.id} meetup={meetup} />)
                }
            </ul>
        </section>
    );
}

export default AllMeetups;
