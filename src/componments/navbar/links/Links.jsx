import styles from './links.module.css'
import NavLink from "./navlink/navlink"


const Links = () => {
    const links = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Blog', path: '/blog' }
    ]
    const session = true
    const isAdmin = true

    return (
        <div className={styles['links']} >
            {
                links.map((link, index) => (
                    <NavLink key={index} item={link} />
                ))
            }
            {
                session ? (
                    <>
                        {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
                        <button className={styles.logout}>logout</button>
                    </>
                ) : <NavLink item={{ title: 'Login', path: '/login' }} />
            }
        </div >
    )
}

export default Links