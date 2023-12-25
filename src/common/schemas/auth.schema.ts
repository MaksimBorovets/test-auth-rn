import * as yup from 'yup';

export const authSchema = yup
  .object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Email is required'),
  })
  .required();
