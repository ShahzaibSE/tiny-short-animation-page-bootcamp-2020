import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "#003a78"
    },
    app_bar_container: {
      backgroundColor: "white"
    },
    cosmos_technologies_logo: {
      paddingRight: 10
    }
}));

export default useStyles