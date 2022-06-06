import styles from './Layout.module.css';
import PropTypes from "prop-types";


export default function Layout({ children }) {
    return (
        <div>
            <main className={styles.main}>{children}</main>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}