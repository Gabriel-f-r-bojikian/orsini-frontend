import styles from "./header.module.scss";
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header(props) {
    return(
        <div className={styles.header}>
            <div className={styles.content}>
                <GiHamburgerMenu />
                <h1 className={styles.title}>Fast Data Collection</h1>
                <div />
            </div>
        </div>
    )
}