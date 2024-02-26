import Image from "next/image"

import { Grid, Typography } from "@mui/material"

import { styled } from "@mui/material/styles"

import BackgroundGrid from "@/components/BackgroundGrid"
import MiddleGrid from "@/components/MiddleGrid"

import Background from '../../public/images/Avatar_Jeni1.jpg'
import DayCareService from '../../public/images/dog-food.png'


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

const DayCare = () =>{
    return(
        <>
            <Grid container>
                <BackgroundGrid
                    image={Background}
                />
            </Grid> 
            <MiddleGrid 
                container 
                rowSpacing={4} 
                display='flex' 
                justifyContent='space-between'
                backgroundColor='primary.main'
            >
                <Grid item xs={12} >
                    <Typography variant="h3" color='primary.pink' fontWeight='bold'>
                        Day Care
                    </Typography>
                </Grid>
                <GridImage 
                    item xs={10} sm={9} md={6} lg={3} xl={3} 
                >
                <Image 
                    alt='Day Care Service'
                    src={DayCareService}
                    width={400}
                    height={300}
                />
                </GridImage>
                <BoxGrid 
                    item 
                    xs={12} 
                    sm={9}
                    md={6}
                    lg={6}
                    xl={6}
                    borderRight='2px solid'
                    marginLeft={15}
                    borderColor='primary.pink'
                >
                <Typography variant="h5" textAlign='left' color='secondary.main' >
                    Os cuidados do Day care acontecem na residência do nosso time, onde são realizados os cuidados de alimentação, reposição de água, higiene, recreação e passeio no dog place durante o dia.
                    <br />
                    Com atividades de enriquecimento ambiental, brincadeiras com estímulos cognitivos, momento SPA e com padrão de hospedagem exclusiva para o seu pet. 
                    <br />
                    O serviços Day care atende tutores que buscam companhia para o seu pet, com moniramento 24h/dia, mantendo sua rotina e hábitos, assim evitando estresse por separação.                
                </Typography>
                <br/>
                <Typography variant="h3" color='primary.pink' fontWeight='bold'>
                    Preços
                </Typography>
                <br/>
                <Grid display='flex' justifyContent='center'>
                    <Typography variant="h6">
                        1x semana........
                    </Typography>
                    <Typography variant="h6" >
                        100 R$
                    </Typography>
                </Grid>
                <Grid display='flex' justifyContent='center'>
                    <Typography variant="h6">
                        2x semana........
                    </Typography>
                    <Typography variant="h6" >
                        180 R$
                    </Typography>
                </Grid>
                </BoxGrid>
            </MiddleGrid>
        </>
    )
}

export default DayCare