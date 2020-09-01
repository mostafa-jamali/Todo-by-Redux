import { createMuiTheme } from '@material-ui/core/styles';


const myTheme = createMuiTheme({
    overrides: {
        MuiButton: {
            label: {
                color: "#ffff",
                paddingTop: "2px",
                lineHeight: "1.5",
                letterSpacing: "0"
            },
        }
    },
    typography: {
        button: {
            textTransform: 'none',
        }
    },
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: "#ff1744"
        },
    },
});

export default myTheme;