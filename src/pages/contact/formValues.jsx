import { object, string, number } from 'yup'

const initialValues={
    name: '',
    email: '',
    tel: '',
    message: '',
}

const validationSchema = object({
    name: string().required('Campo obrigatório'),
    email: string().email('Digite um email válido').required('Campo obrigatório'),
    tel: number().required('Campo obrigatório'),
    message: string().required('Campo obrigatório')
}) 

const formValuesWrapper = {
    initialValues,
    validationSchema
}

export default formValuesWrapper