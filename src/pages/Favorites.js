import { useDispatch, useSelector } from "react-redux";
import MeetupItem from "../components/meetups/MeetupItem";
import styles from "./MeetupList.module.css";


export function Favorites() {
    const dispatch = useDispatch();
    const { favorites } = useSelector(state => state.meetups)



    return (
        <section>
            <h1>All Meetups</h1>
            <ul className={styles.list}>
                {
                    favorites.map(meetup => <MeetupItem key={meetup.id} meetup={meetup} />)
                }
            </ul>
        </section>
    );
}

export default Favorites;
