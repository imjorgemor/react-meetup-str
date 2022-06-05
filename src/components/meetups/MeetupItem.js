import styles from "./MeetupItem.module.css";
import Card from "../card/Card";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../store/slices/meetupSlice";

export default function MeetupItem({meetup}) {

    const dispatch = useDispatch();

    const addFavorite = (meetup) => {
        dispatch(setFavorite(meetup));
    }

    return (
        <li className={styles.item} data-test='meet-up-item'>
            <Card>
                <div className={styles.image}>
                    <img src={meetup.image} alt={meetup.title} />
                </div>
                <div className={styles.content}>
                    <h3>{meetup.title}</h3>
                    <address>{meetup.address}</address>
                    <p>{meetup.description}</p>
                </div>
                <div className={styles.actions}>
                    <button onClick={()=>addFavorite(meetup)}>Add to favorites</button>
                </div>
            </Card>
        </li>
    );
}
