import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(237, 122, 140)',
            light: '#ffffff'
        },
        secondary: {
            main: 'rgb(23, 64, 113)',
        },
        third: {
            main: '#f8e9e9f'
        },
    },
    spacing: 4,
})

export default theme