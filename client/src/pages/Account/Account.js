import AccountPageBanner from "../../components/AccountPageBanner/AccountPageBanner";
import chatBubble from "../../assets/svg/bubble.svg";
import {Box, Button, Typography} from "@material-ui/core";
import useAccountStyles from "./Account.style";

/*
* Account pages template. Reusable for pages like login, signup
* */

const Account = ({alternateQuestion, alternateActionText, alternateAction, ...props}) => {
    const classes = useAccountStyles();

    return (
        <Box classes={{ root: classes.account }}>
            <AccountPageBanner
                icon={chatBubble}
                title={'Converse with anyone with any language'}
            />

            <Box classes={{ root: classes.container }}>
                <Box classes={{ root: classes.alternateOptionContainer }}>
                    <Typography classes={{ root: classes.alternateOptionQuestion }}>
                        {alternateQuestion}
                    </Typography>

                    <Button
                        variant={'contained'}
                        onClick={alternateAction}
                        classes={{ root: classes.alternateOptionButton }}
                    >
                        {alternateActionText}
                    </Button>
                </Box>

                <Box classes={{ root: classes.content }}>
                    {props.children}
                </Box>
            </Box>
        </Box>
    );
}

export default Account;
