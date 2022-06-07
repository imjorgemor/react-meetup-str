import { useState } from "react";
import { useScroll } from "../../hooks/useScroll";
import MobileMenu from "../mobileMenu/MobileMenu";
import styles from "./MobileNavigation.module.css"

const MobileNavigation = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { scrollDirection } = useScroll();
    return (
        <>
            <div
                className={`${styles['mobile-navbar']}`}
                onClick={()=>setShowMenu(!showMenu)}
                
                >
                <div className={styles.hamburger}>
                    <div className={styles.burger} />
                    <div className={styles.burger} />
                    <div className={styles.burger} />
                </div>
            </div>
            <div>
                <div className={scrollDirection === "down" && scrollDirection !== null ? `${styles.logo} ${styles.hide}` : styles.logo}>React Meetup</div>
            </div>
            {
                showMenu && <MobileMenu setShowMenu={setShowMenu}/>
            }
        </>

    )
}

export default MobileNavigation