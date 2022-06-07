import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth"
import { Formik, Form, Field, ErrorMessage } from 'formik';



const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { isLogginedIn } = useSelector(state => state.auth);
    const { message } = useSelector( state => state.message);
    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    return (
    <div>
        <Formik initialValues = {{email: '', password: ''}}
        validate = {values => {
            const errors = {};
            if(!values.email)
            {
                errors.email = 'Required';
            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) 
            {
                errors.email = 'Invalid email address';
            }
            return errors;
        }}

        onSubmit={(values, {setSubmitting}) => {
            setLoading(true);
            dispatch(login(username, password)).then(() => {
                props.history.push("/profile");
                window.location.reload();
            }).catch(() => {
                setLoading(false);
            });
        }}>

        {({isSubmitting}) => (
            <Form>
                <Field type ="email" name = "email"/>
                <ErrorMessage name = 'email' component="div"/>
                <Field type ="password" name ="password" />
                <ErrorMessage name = "password" component="div" />
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </Form>
        )}
        </Formik>
    </div>
    )
}

export default Login;