import { Grid } from "@mui/material"
import { styled } from "@mui/material/styles"
import style from './Components.module.css'


const StyledGrid = styled(Grid)(({theme}) => ({
    paddingTop: 20,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main
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

