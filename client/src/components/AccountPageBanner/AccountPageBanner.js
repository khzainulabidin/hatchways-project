import styles from './AccountPageBanner.module.css';

/*
* Left sidebar of the Account (Login, Signup) pages
* Takes icon and title as props
* */

const AccountPageBanner = ({icon, title}) => (
    <div className={styles.accountPageBanner}>
        <div className={styles.overlay}>
            <img
                className={styles.bannerIcon}
                src={icon}
                alt={'Banner icon'}
            />

            <p className={styles.bannerTitle}>
                {title}
            </p>
        </div>
    </div>
)

export default AccountPageBanner;
