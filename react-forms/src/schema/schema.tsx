import * as yup from 'yup';
import countryList from '../slices/countries-data';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/\b[A-Z][a-z]*\b/, 'First letter must be uppercased')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  gender: yup
    .mixed()
    .oneOf(['Male', 'Female'] as const)
    .defined()
    .required(),
  country: yup
    .string()
    .oneOf(countryList, 'Name of the country must match with suggestions')
    .defined()
    .required('Country is required'),
  age: yup
    .number()
    .min(18, 'You must be at least 18 years old')
    .required('Age is required'),
  password: yup
    .string()
    .required()
    .min(6)
    .matches(/.*\d.*/, 'Should contain at least 1 number')
    .matches(/.*[A-Z].*/, 'Should contain at least 1 uppercase letter')
    .matches(/.*[a-z].*/, 'Should contain at least 1 lowercase letter')
    .matches(
      /.*[!@#$%^&*(),.?":{}|<>].*/,
      'Should contain at least 1 special charecters (!,@,#,$,% ..etc)',
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must match'),
  picture: yup
    .mixed()
    .required('Image upload is required')
    .test('fileSize', 'The image size must not exceed 2 mb', (value) => {
      return value && value.size <= 2048;
    })
    .test(
      'fileFormat',
      'The file must be in the following format: .png .jpg',
      (value) => {
        return value && ['image/jpg', 'image/png'].includes(value.type);
      },
    ),
  tc: yup
    .boolean()
    .oneOf([true], 'You must agree to proceed')
    .required('This field is required'),
});

export default schema;
