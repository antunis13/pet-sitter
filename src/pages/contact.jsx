import { Typography, Grid } from "@mui/material"

import BackgroundGrid from "@/components/BackgroundGrid"
import Background from '../public/images/Portfolio_Jeni08.jpg'


import { styled } from "@mui/material/styles"


const MiddleGrid = styled(Grid)(({theme}) => ({
  marginTop: 720,
  paddingTop: 20,
  marginBottom: 15,
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main
}))

const Contact = () => {
  return (
    <>
      <BackgroundGrid
        image={Background}
      />
      <MiddleGrid>
        <Typography variant="h4">
          Entre em contato com a gente
        </Typography>

      </MiddleGrid>
    </>
  )
}

export default Contact