import PropTypes from "prop-types";
import styles from "./Card.module.css";

export default function Card({ children }) {
    return <div className={styles.card} data-testid="meetup-card">{children}</div>;
}

Card.propTypes = {
    children: PropTypes.node.isRequired
}

