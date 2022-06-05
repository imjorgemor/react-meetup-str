import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeetups } from "../store/slices/thunks";
import styles from "./../components/meetups/MeetupList.module.css";


export function AllMeetups() {

    const dispatch = useDispatch();
    const {meetups, isLoading} = useSelector(state => state.meetups)
    console.log(meetups)

    useEffect(() => {
        dispatch(getMeetups());
    }, [])


    return (
        <section>
            <h1>All Meetups</h1>
            <ul className={styles.list}>

            </ul>
        </section>
    );
}

export default AllMeetups;
