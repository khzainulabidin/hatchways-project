import styles from './Account.module.css';
import AccountPageBanner from "../../components/AccountPageBanner/AccountPageBanner";
import chatBubble from "../../assets/svg/bubble.svg";
import {Button} from "@material-ui/core";

/*
* Account pages template. Reusable for pages like login, signup
* */

const Account = ({alternateQuestion, alternateActionText, alternateAction, ...props}) => {
    return (
        <div className={styles.account}>
            <AccountPageBanner
                icon={chatBubble}
                title={'Converse with anyone with any language'}
            />

            <div className={styles.container}>
                <div className={styles.alternateOptionContainer}>
                    <p className={styles.alternateOptionQuestion}>
                        {alternateQuestion}
                    </p>

                    <Button variant={'contained'} onClick={alternateAction}>
                        {alternateActionText}
                    </Button>
                </div>

                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Account;
