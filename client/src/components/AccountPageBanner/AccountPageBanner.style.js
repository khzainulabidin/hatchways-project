import {makeStyles} from "@material-ui/core/styles";
import banner_bg from "../../assets/img/accountPageBanner-bg.png";

const useAccountPageBannerStyles = makeStyles(theme => ({
    accountPageBanner: {
        minHeight: '100vh',
        width: '100%',
        background: `url(${banner_bg}) center center no-repeat`,
        backgroundSize: 'cover',

        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },

    overlay: {
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85))',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 18%',
    },

    bannerIcon: {
        width: '67px',
        height: '66px',
        objectFit: 'cover',
    },

    bannerTitle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '1.63rem',
        lineHeight: '40px',
        textAlign: 'center',
        marginTop: '10%',
    }
}));

export default useAccountPageBannerStyles;
