import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useScroll } from "../../hooks/useScroll";
import MobileNavigation from "../mobileNavigation/MobileNavigation";

import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
    const { scrollDirection, scrollPosition } = useScroll();
    const { favorites } = useSelector(state => state.meetups)

    return (
        <>

            <header
                className={scrollDirection === "down" && scrollDirection !== null && scrollPosition > 250 ? `${styles.header} ${styles.hide}` : styles.header}
                data-test="navigation-header">
                <div className={`${styles['header-wrapper']}`}>
                    <div className={styles.logo}>React Meetups</div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/home"
                                    className={({ isActive }) => isActive ? `${styles['navlink-active']}` : styles.navlink}
                                >
                                    All Meetups
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/new-meet-up"
                                    className={({ isActive }) => isActive ? `${styles['navlink-active']}` : styles.navlink}
                                >
                                    Add New Meetup
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/favorites"
                                    className={({ isActive }) => isActive ? `${styles['navlink-active']}` : styles.navlink}
                                >
                                    My Favorites
                                </NavLink>
                            </li>
                        </ul>

                    </nav>
                    <span className={styles.badge}>{favorites.length}</span>
                </div>
            </header >
            <ul>
                <MobileNavigation />
            </ul>
        </>
    );
}
