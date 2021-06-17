import {Box, Typography} from "@material-ui/core";
import useAccountPageBannerStyles from "./AccountPageBanner.style";

/*
* Left sidebar of the Account (Login, Signup) pages
* Takes icon and title as props
* */

const AccountPageBanner = ({icon, title}) => {
    const classes = useAccountPageBannerStyles();

    return (
        <Box classes={{ root: classes.accountPageBanner }}>
            <Box classes={{ root: classes.overlay }}>
                <img
                    className={classes.bannerIcon}
                    src={icon}
                    alt={'Banner icon'}
                />

                <Typography classes={{ root: classes.bannerTitle }}>
                    {title}
                </Typography>
            </Box>
        </Box>
    );
}

export default AccountPageBanner;
