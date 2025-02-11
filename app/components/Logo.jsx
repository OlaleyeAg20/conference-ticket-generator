import {Logo, Logotext} from "./Icon";
import styles from "../page.module.css";

const Logos = () => {
    return (
        <div className={styles.logo}>
            <Logo />
            <Logotext />
        </div>
    )
}

export default Logos