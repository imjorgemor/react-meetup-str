import {useScroll} from "../../hooks/useScroll"
import styles from "./MainNavigation.module.css";

export default function MainNavigation({ setPage }) {

    const {scrollDirection, scrollPosition} = useScroll();
   
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
                            <a href="#" >All Meetups</a>
                        </li>
                        <li>
                            <a href="#" > Add New Meetup</a>
                        </li>
                        <li>
                            <a href="#">  My Favorites
                            <span className={styles.badge}>{0}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        </header >
    );
}
