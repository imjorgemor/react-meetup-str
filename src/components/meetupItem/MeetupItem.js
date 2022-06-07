import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/slices/meetupSlice";
import PropTypes from "prop-types";
import styles from "./MeetupItem.module.css";


export default function MeetupItem({ meetup }) {
    const dispatch = useDispatch();
    const { favorites } = useSelector(state => state.meetups);

    const isFav = favorites.some(fav => fav.id === meetup.id);

    const toggleFavorite = (meetup) => {
        if (!isFav) { dispatch(addFavorite(meetup)) }
        if (isFav) { dispatch(removeFavorite(meetup.id)) }
    }

    return (
        <li className={styles.item} id='meet-up-item'>
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
                    <button 
                        id="add-favorite"
                        onClick={() => toggleFavorite(meetup)}
                        className={isFav ? styles.favorite: styles.normal}
                        >{!isFav ? "Add to favorites" : "Remove from favorites"}</button>
                </div>
            </Card>
        </li>
    );
}

MeetupItem.propTypes = {
    meetup: PropTypes.object.isRequired
}