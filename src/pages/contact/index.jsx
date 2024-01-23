import { 
  Typography, 
  Grid,
  TextField,
   Box,
   Button,
} from "@mui/material"

import { Formik } from "formik"

import { initialValues, validationSchema } from "./formValues"
import BackgroundGrid from "@/components/BackgroundGrid"

import Background from '../../public/images/Portfolio_Jeni08.jpg'


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

const FormBox = styled(Box)({
  textAlign: 'start'
})

const FormDiv = styled('div')(({theme}) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}))

const Contact = () => {
  return (
    <>
      <BackgroundGrid
        image={Background}
      />
      <MiddleGrid container>
        <Grid item xs={12}>
        <Typography variant="h4">
          Entre em contato com a gente
        </Typography>
        </Grid>
        <Grid item xs={4}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) =>{
              console.log('ok, enviou o form', values)
            }}
          >
            {
              ({
                values,
                errors,
                handleChange,
                handleSubmit
              }) => {
                return(
                  <form onSubmit={handleSubmit}>
                    <FormBox >
                      <FormDiv>
                        <Typography>
                          Nome Completo
                        </Typography>
                        <TextField
                          id="outlined-basic"
                          label="Nome Completo"    
                          variant="outlined" 
                          fullWidth 
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          error={errors.name}
                          helperText={errors.name}
                        />
                      </FormDiv>
                      <FormDiv>       
                        <Typography>
                          E-mail
                        </Typography>
                        <TextField
                          id="outlined-basic" 
                          label="E-mail" 
                          variant="outlined" 
                          fullWidth 
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          error={errors.email}
                          helperText={errors.email}
                        />
                      </FormDiv>
                      <FormDiv>
                        <Typography>
                          Telefone
                        </Typography>
                        <TextField
                          id="outlined-basic"
                          label="Telefone" 
                          variant="outlined" 
                          fullWidth 
                          name="tel"
                          value={values.tel}
                          onChange={handleChange}
                          error={errors.tel}
                          helperText={errors.tel}
                        />
                      </FormDiv>
                      <FormDiv>
                        <Typography>
                          Mensagem
                        </Typography>
                        <TextField 
                          id="outlined-basic" 
                          label="Mensagem" 
                          variant="outlined"  
                          multiline
                          rows={4}
                          fullWidth
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          error={errors.message}
                          helperText={errors.message}
                        />
                      </FormDiv>
                      <FormDiv>
                        <Button type="submit" variant="outlined" color="secondary">
                          Enviar
                        </Button>
                      </FormDiv>
                    </FormBox>  
                  </form>

                )
              }
            }
          </Formik>
        </Grid>

      </MiddleGrid>
    </>
  )
}

export default Contact