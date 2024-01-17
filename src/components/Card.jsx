import Image from 'next/image'

import { 
    Typography,
    Card as CardMUI, 
    CardContent,
    CardActions
} from '@mui/material'

import { useTheme } from '@mui/material'


const Card = ({ image, title, subtitle, actions }) => {
    const theme = useTheme()
    return(
        <CardMUI>
           <Image 
                alt='Imagem'
                src={image}
                width={382}
                height={200}
           />
            <CardContent>
            <Typography variant='h5' component='h2' color={theme.palette.secondary.main}>
                {title}
            </Typography>
            <Typography>
                {subtitle}
            </Typography>
            </CardContent>
            {
                actions
                ? (
                    <CardActions>
                       {actions}
                    </CardActions>
                ) : null 
            }
        </CardMUI>
    )
}

export default Card