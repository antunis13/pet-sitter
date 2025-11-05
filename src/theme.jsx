import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: {
            main: '#fcfcfc',
            pink: 'rgb(237, 122, 140)'
        },
        secondary: {
            main: 'rgb(23, 64, 113)',
        },
        background: {
            main: '#efd9db',
            dark: '#e5c7c5',
        },
    },
    spacing: 4,
})

export default theme