import styles from './AccountPageBanner.module.css';
import chatBubble from '../../assets/svg/chat-bubble-filled.png';

const AccountPageBanner = ({icon, title}) => (
    <div className={styles.accountPageBanner}>
        <div className={styles.overlay}>
            <img
                className={styles.bannerIcon}
                src={chatBubble}
                alt={'Banner icon'}
            />

            <p className={styles.bannerTitle}>
                Converse with anyone with any language
            </p>
        </div>
    </div>
)

export default AccountPageBanner;
