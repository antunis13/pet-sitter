import Image from "next/image"

import { Grid, Typography } from "@mui/material"

import BackgroundGrid from "@/components/BackgroundGrid"
import MiddleGrid from "@/components/MiddleGrid"

import Background from '../../public/images/Avatar_Jeni1.jpg'
import DogWalkService from '../../public/images/dog.png'

import ServicesWrapper from "../../styles/services.styles"

const DogWalk = () => {
    return(
        <>
           
            <BackgroundGrid
                image={Background}
            />
          
            <MiddleGrid container rowSpacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h3">Dog Walk</Typography>
                </Grid>
                <ServicesWrapper.GridImage 
                    item xs={10} sm={9} md={6} lg={3} xl={3} 
                >
                    <Image 
                        alt='Dog Walk Service'
                        src={DogWalkService}
                        width={400}
                        height={300}
                    />
                </ServicesWrapper.GridImage>
                <ServicesWrapper.BoxGrid 
                    item 
                    xs={12} 
                    sm={9}
                    md={6}
                    lg={6}
                    xl={6}
                    borderRight='2px solid'
                    borderColor='primary.pink'
                >
                <Typography variant="h6" textAlign='left'>
                    ✓ O serviço Dog Walker são passeios que atende tutores que buscam melhorias na saúde física e emocional dos seus pets, com prática de exercícios físicos, controle de peso, socialização e gasto de energia, ajudando também no controle de ansiedade e desvios de comportamentos. 
                    <br/>
                    ✓ Os passeios têm duração de 30 a 40min, a depender do pet. 
                    <br/>
                    ✓ Realizamos o trajeto e duração conforme a sua evolução, assim vamos aumentando os mesmos. 
                    <br/>
                    ✓ É escolhido um local calmo, com os horários no período da manhã ou fim de tarde, para evitar o sol forte. 
                    <br/>
                    ✓ Sempre pensando na segurança e saúde do pet. 
                </Typography>
                <br/>
                <Typography variant="h3" fontWeight='bold'>
                    Preços
                </Typography>
                <br/>
                <Grid display='flex' justifyContent='center'>
                    <Typography variant="h6">
                        Camihada 40 minutos........
                    </Typography>
                    <Typography variant="h6" >
                        100 R$
                    </Typography>
                </Grid>
                <Grid display='flex' justifyContent='center'>
                    <Typography variant="h6">
                        Camihada 30 minutos........
                    </Typography>
                    <Typography variant="h6" >
                        80 R$
                    </Typography>
                </Grid>
                </ServicesWrapper.BoxGrid>
            </MiddleGrid>
        </>
    )
}


export default DogWalk