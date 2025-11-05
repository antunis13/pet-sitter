import { Grid } from "@mui/material"

import { styled } from "@mui/material/styles"


const GridImage = styled(Grid)`
  margin-left: 40px;
  display: flex;
  align-items: center;

  @media(max-width: 780px){
    margin-left: 20px;
  } 
`

const BoxGrid = styled(Grid)(({theme}) => ({
  padding: theme.spacing(5),
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
}))

const ServicesWrapper = { 
  GridImage,
  BoxGrid,
}

export default ServicesWrapper