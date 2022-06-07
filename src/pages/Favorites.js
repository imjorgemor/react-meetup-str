import { useSelector } from "react-redux";
import {MeetupList} from "../components/meetupList/MeetupList"


export function Favorites() {
    const { favorites } = useSelector(state => state.meetups)

    return (
        <section>
            <h1>Favorite Meetups</h1>
            <MeetupList meetups={favorites} />
        </section>
    );
}

export default Favorites;
