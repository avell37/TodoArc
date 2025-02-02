import * as Yup from 'yup';

export const LoginValidationSchema = Yup.object({
    nickname: Yup.string()
        .min(2, 'Минимум 2 символа!')
        .required('Обязательное поле!'),
    password: Yup.string()
        .min(6, 'Не менее 6 символов!')
        .required('Обязательное поле!')
})