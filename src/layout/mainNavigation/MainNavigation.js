import { NavLink } from "react-router-dom";
import { useScroll } from "../../hooks/useScroll"
import styles from "./MainNavigation.module.css";

export default function MainNavigation() {

    const { scrollDirection, scrollPosition } = useScroll();

    return (
        <header
            className={scrollDirection === "down" && scrollDirection !== null && scrollPosition > 250 ? `${styles.header} ${styles.hide}` : styles.header}
            //style={scrollDirection === "down" && scrollDirection !== null && scrollPosition > 250 ? {opacity : "0", transition: "opacity .3s ease"} : {position: "fixed", top: "0", opacity : "1"} }

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
                                My Favorites  <span className={styles.badge}>{0}</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}
