import Image from "next/image";
import {
  Typography,
  Grid,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

import axios from "axios";
import { Formik } from "formik";
import formValuesWrapper from "../../utils/formValues";

import BackgroundGrid from "@/components/BackgroundGrid";
import MiddleGrid from "@/components/MiddleGrid";

import useToasty from "../../contexts/Toasty";

import { BackgroundContact, Email } from "../../../public/images";

import ContactWrapper from "../../styles/contact.styles";

import { useTheme } from "@mui/material/styles";

const Contact = () => {
  const theme = useTheme();
  const { setToasty } = useToasty();

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post("/api/email", values);
      setToasty({
        open: true,
        text: "Email enviado com sucesso",
        severity: "success",
      });
      resetForm();
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      setToasty({
        open: true,
        text: "Ocorreu um erro, tente novamente",
        severity: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <BackgroundGrid image={BackgroundContact} width={12} />
      <MiddleGrid container columnGap={20}>
        <Grid item xs={12} marginBottom={5} padding={3}>
          <Typography variant="h3" color="primary.pink">
            Entre em contato com a gente
          </Typography>
        </Grid>
        <ContactWrapper.GridForm item xs={10} sm={9} md={6} lg={4} xl={4}>
          <Formik
            initialValues={formValuesWrapper.initialValues}
            validationSchema={formValuesWrapper.validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <ContactWrapper.FormBox>
                    <ContactWrapper.FormDiv>
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
                    </ContactWrapper.FormDiv>
                    <ContactWrapper.FormDiv>
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
                    </ContactWrapper.FormDiv>
                    <ContactWrapper.FormDiv>
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
                    </ContactWrapper.FormDiv>
                    <ContactWrapper.FormDiv>
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
                    </ContactWrapper.FormDiv>
                    <ContactWrapper.FormDiv>
                      {isSubmitting ? (
                        <CircularProgress color="secondary" />
                      ) : (
                        <Button
                          type="submit"
                          variant="outlined"
                          color="secondary"
                        >
                          Enviar
                        </Button>
                      )}
                    </ContactWrapper.FormDiv>
                  </ContactWrapper.FormBox>
                </form>
              );
            }}
          </Formik>
        </ContactWrapper.GridForm>
        <Grid item xs={10} sm={9} md={6} lg={3} xl={3} sx={{ mt: 2 }}>
          <ContactWrapper.ContactBox>
            <Image alt="Icone de email" src={Email} height={30} width={30} />
            <ContactWrapper.ContactTyp>
              jeni@jenipetsitter.com
            </ContactWrapper.ContactTyp>
          </ContactWrapper.ContactBox>
          <ContactWrapper.ContactBox>
            <a
              href="https://wa.me/5511992673254"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="fa-brands fa-whatsapp fa-2x"
                style={{ color: theme.palette.secondary.main }}
              ></i>
            </a>
            <ContactWrapper.ContactTyp>
              (11) 99267-3254
            </ContactWrapper.ContactTyp>
          </ContactWrapper.ContactBox>
          <ContactWrapper.ContactBox>
            <a href="https://www.instagram.com/jenipetsitter/">
              <i
                class="fa-brands fa-instagram fa-2x"
                style={{ color: theme.palette.secondary.main }}
              ></i>
            </a>
            <ContactWrapper.ContactTyp>jenipetsitter</ContactWrapper.ContactTyp>
          </ContactWrapper.ContactBox>
          <ContactWrapper.ContactBox>
            <i
              class="fa-solid fa-location-dot fa-2x"
              style={{ color: theme.palette.secondary.main }}
            ></i>
            <ContactWrapper.ContactTyp>Jundiaí</ContactWrapper.ContactTyp>
          </ContactWrapper.ContactBox>
        </Grid>
      </MiddleGrid>
    </>
  );
};

export default Contact;
