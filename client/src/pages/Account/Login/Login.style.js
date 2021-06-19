import {makeStyles} from "@material-ui/core/styles";

const useLoginStyles = makeStyles(theme => ({
    forgotPasswordText: {
        color: theme.palette.primary.main,
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        cursor: 'pointer',

        '&:hover': {
            textDecoration: 'none',
        }
    }
}));

export default useLoginStyles;
