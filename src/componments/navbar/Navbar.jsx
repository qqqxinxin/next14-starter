import Link from "next/link";
import Links from "./links/Links";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav>
            <div className={styles['container']}>
                <Link className={styles['logo']} href='/'>Logo</Link>
                <Links />
            </div>
        </nav>
    );
}

export default Navbar;