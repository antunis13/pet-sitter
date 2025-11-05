import { Grid } from "@mui/material"
import { styled } from "@mui/material/styles"
import style from './Components.module.css'


const StyledGrid = styled(Grid)(({theme}) => ({
    padding: 20,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,

    [theme.breakpoints.up('xl')]: {
        paddingTop: 70,
    },
    [`@media (min-width ${theme.breakpoints.values.lg}px) and (max-width ${theme.breakpoints.values.xl}px)`]: {
        paddingTop: 70,
    }

}))


const MiddleGrid = ({children}) =>{
    return(
        <StyledGrid
            container
            rowSpacing={6}
            className={style.middleGrid}
        >
            {children}
        </StyledGrid>
    )
}

export default MiddleGrid

