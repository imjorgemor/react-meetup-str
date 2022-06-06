import MeetupItem from "../meetupItem/MeetupItem"
import PropTypes from "prop-types";
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

MeetupList.propTypes = {
    meetups: PropTypes.arrayOf(PropTypes.object)
}
