import styles from "./MeetupItem.module.css";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/slices/meetupSlice";


export default function MeetupItem({ meetup }) {

    const dispatch = useDispatch();
    const { favorites } = useSelector(state => state.meetups);

    const isFav = favorites.some(fav => fav.id === meetup.id);

    const toggleFavorite = (meetup) => {
        if (!isFav) { dispatch(addFavorite(meetup)) }
        if (isFav) { dispatch(removeFavorite(meetup.id)) }
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
                    <button onClick={() => toggleFavorite(meetup)}>{!isFav ? "Add to favorites" : "Remove to favorites"}</button>
                </div>
            </Card>
        </li>
    );
}
