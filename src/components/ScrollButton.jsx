
import { Fab, useScrollTrigger, Zoom } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useTheme } from '@mui/material/styles'

const ScrollButton = () => {
  
    const theme = useTheme()

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 700, 
    })
  
    const handleClick = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    })
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" style={{ position: 'fixed', bottom: 16, right: 16 }}>
        <Fab style={{backgroundColor: theme.palette.primary.pink}} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon color='primary' />
        </Fab>
      </div>
    </Zoom>
  )
}

export default ScrollButton;
