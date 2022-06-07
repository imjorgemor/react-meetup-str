import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import styles from "./MobileMenu.module.css"


const MobileMenu = ({setShowMenu}) => {
    const { favorites } = useSelector(state => state.meetups)
    return (
        <div className={`${styles['mobile-navigation']}`}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/home"
                            className={({ isActive }) => isActive ? `${styles['navlink-active']}` : styles.navlink}
                            onClick={()=>setShowMenu(false)}
                        >
                            <p>  All Meetups</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/new-meet-up"
                            className={({ isActive }) => isActive ? `${styles['navlink-active']}` : styles.navlink}
                            onClick={()=>setShowMenu(false)}
                        >
                            <p> Add New Meetup</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favorites"
                            className={({ isActive }) => isActive ? `${styles['navlink-active']}` : styles.navlink}
                            onClick={()=>setShowMenu(false)}
                        >
                            <p>My Favorites</p>
                            <span className={styles.badge}>{favorites.length}</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button
                className={`${styles['close-button']}`}
                onClick={()=>setShowMenu(false)}
                
                >
                close menu
            </button>
        </div>
    )
}

export default MobileMenu