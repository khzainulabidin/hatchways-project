import styles from './Account.module.css';
import AccountPageBanner from "../../components/AccountPageBanner/AccountPageBanner";

const Account = () => {
    return (
        <div className={styles.account}>
            <AccountPageBanner/>
        </div>
    );
}

export default Account;
