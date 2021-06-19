import {makeStyles} from "@material-ui/core/styles";

const useAccountStyles = makeStyles(theme => ({
    account: {
        minHeight: '100vh',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '0.415fr 0.695fr',

        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
        },
    },

    container: {
        padding: '3% 5%',

        [theme.breakpoints.down('md')]: {
            padding: '3%',
        },
    },

    alternateOptionContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    alternateOptionQuestion: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: '0.88rem',
        marginRight: '3%',

        [theme.breakpoints.down('md')]: {
            fontSize: '0.78rem',
        },
    },

    alternateOptionButton: {
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0 2px 12px rgba(74, 106, 149, 0.2)',
        color: 'rgba(58, 141, 255, 1)',
        fontSize: '0.88rem',
        width: '170px',
        height: '54px',

        '&:hover': {
            background: 'rgba(255, 255, 255, 1)',
            boxShadow: '0 2px 20px rgba(74, 106, 149, 0.2)',
        },

        [theme.breakpoints.down('md')]: {
            width: 'fit-content',
            height: '40px',
        },
    },

    content: {
        height: '90%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        '& h1': {
            fontSize: '1.63rem',
            margin: '0 0 5% 0',
            textAlign: 'left',

            [theme.breakpoints.down('md')]: {
                fontSize: '1.3rem',
            },
        },

        '& form': {
            width: '70%',
            textAlign: 'center',

            [theme.breakpoints.down('md')]: {
                width: '90%',
            },

            '& div': {
                marginBottom: '2%',
            },

            '& label': {
                margin: '0 0.5%',
                fontSize: '0.88rem',
            },

            '& input': {
                fontSize: '0.88rem',
                padding: '2% 0.5% 1% 0.5%',
            },

            '& button': {
                fontSize: '1rem',
                fontWeight: '400',
                marginTop: '10%',
                width: '160px',
                height: '56px',

                [theme.breakpoints.down('md')]: {
                    width: '120px',
                    height: '40px',
                    fontSize: '0.88rem',
                },
            },
        }
    },
}));

export default useAccountStyles;
