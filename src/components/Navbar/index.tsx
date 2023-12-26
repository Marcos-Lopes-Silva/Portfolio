import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <header>
            <nav className={styles.nav}>  
                <a className={styles.nav__logo} href="/">MS</a>
                <ul className={styles.nav__list}>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Sobre</a></li>
                    <li><a href="/projects">Projetos</a></li>
                </ul>
                <a className={styles.nav__linkedin} href="/linkedin"><img src="" alt="" /></a>
            </nav>
        </header>
    );
};


export default Navbar;