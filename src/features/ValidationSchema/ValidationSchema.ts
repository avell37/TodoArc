import * as Yup from 'yup';

export const LoginValidationSchema = Yup.object({
    username: Yup.string()
        .min(2, 'Минимум 2 символа!')
        .required('Обязательное поле!'),
    password: Yup.string()
        .min(6, 'Не менее 6 символов!')
        .required('Обязательное поле!')
})

export const RegValidationSchema = Yup.object({
    email: Yup.string()
        .email('Неправильный email адрес!')
        .required('Обязательное поле!'),
    username: Yup.string()
        .min(2, 'Минимум 2 символа!')
        .required('Обязательное поле!'),
    password: Yup.string()
        .min(6, 'Не менее 6 символов!')
        .required('Обязательное поле!'),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Пароли не совпадают!')
        .required('Обязательное поле!')
})