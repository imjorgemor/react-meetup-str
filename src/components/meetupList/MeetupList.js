import MeetupItem from "../meetupItem/MeetupItem"
import styles from "./MeetupList.module.css";

export const MeetupList = ({ meetups }) => {
    return (
        <ul className={styles.list}>
            {
                meetups.map(meetup => <MeetupItem key={meetup.id} meetup={meetup} />)
            }
        </ul>
    )
}
