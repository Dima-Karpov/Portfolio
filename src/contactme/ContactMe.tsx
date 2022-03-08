import React, {useState} from 'react';
import {Title} from '../common/components/title/Title';
import s from './ContactMe.module.scss';
import {FormikErrors, useFormik} from 'formik';
import axios from 'axios';

type TFormikErrors = {
    email?: string
    name?: string
    message?: string
};
type TFormikValues = {
    email: string
    name: string
    message: string
};

export const ContactMe = React.memo(() => {

    const [btnDisable, setBtnDisable] = useState(false);

    // Formik validate

    const validate = (values: TFormikValues) => {
        const errors: FormikErrors<TFormikErrors> = {}
        if (!values.email) {
            errors.email = 'This field is required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }

        if (!values.name) {
            errors.name = 'This field is required'
        }

        if (!values.message) {
            errors.message = 'This field is required'
        }
        return errors
    }
    // Formik

    const formik = useFormik<TFormikValues>({
        initialValues: {
            email: '',
            name: '',
            message: ''
        },
        validate,
        onSubmit: values => {
            setBtnDisable(true)
            const {name, email, message} = values

            axios.post('https://smtp-email-folio.herokuapp.com/send-message', {name, email, message})
                .then(() => {
                    setBtnDisable(false)
                    formik.resetForm()
                })
                .catch((err) => console.log(err))
        }
    })
    return (
        <div className={s.contactsBlock} id='contactMe'>
            <div className={s.contactsContainer}>
                <Title text={'Contact me'}/>
                <form>
                    <div className={s.inputBlock}>
                        <div className={s.inputWrap}>
                            <input type='text' placeholder={'Your name'} {...formik.getFieldProps('name')} />
                            {formik.touched.name && formik.errors.name ?
                                <span className={s.errorField}>{formik.errors.name}</span> : null}
                        </div>
                        <div className={s.inputWrap}>
                            <input type='text' placeholder={'Your email'} {...formik.getFieldProps('email')} />
                            {formik.touched.email && formik.errors.email ?
                                <span className={s.errorField}>{formik.errors.email}</span> : null}
                        </div>
                    </div>
                    <div className={s.inputWrap}>
                        <textarea placeholder={'Your message'} {...formik.getFieldProps('message')} />
                        {formik.touched.message && formik.errors.message ?
                            <span className={s.errorField}>{formik.errors.message}</span> : null}
                    </div>
                        <button className={s.btn} type={'submit'} disabled={btnDisable}>Contact me</button>

                </form>

            </div>
        </div>
    )
});