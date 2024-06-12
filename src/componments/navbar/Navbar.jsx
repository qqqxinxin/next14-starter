import Links from "./links/Links";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav>
            <div className={styles['container']}>
                <div className={styles['logo']}>Logo</div>
                <Links />
            </div>
        </nav>
    );
}

export default Navbar;