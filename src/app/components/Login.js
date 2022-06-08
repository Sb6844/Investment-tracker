import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link  } from "react-router-dom";



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

    const divStyle =  { 
        width: '70%',
        padding: '10px',
        border: '5px solid gray',
    }
    const errorColor =  {
        color: 'red'
    }

    return (
    <div className="container" style={divStyle}>
        {
            props.showRegisterLink && 
            <div className="h-100 d-flex align-items-center justify-content-center">
                <h2><Link to = {"/register"}>Go to register page</Link></h2>
            </div>
        }
    <h1>Log-in</h1>
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
            if(!values.password)
            {
                errors.password = 'Required';
            } else if(values.password.length < 8) 
            {
                errors.password = 'Invalid password';
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

        {({errors,
            touched,
            isSubmitting,
            isValid,
            dirty}) => (
            <Form>
            <div className="row">
                <div className="col-4">
                    <Field type ="email" placeholder="Username" name = "email"/>
                    <ErrorMessage name = 'email'>{msg => <div style={errorColor}>{msg}</div>}</ErrorMessage>
                </div>
                <div className="col-4">
                    <Field type ="password" placeholder="Password" name ="password" />
                    <ErrorMessage name = "password" component="div">
                        {msg => <div style={errorColor}>{msg}</div>}
                    </ErrorMessage>
                </div>
                <div className="col-4">
                    <button type="submit" disabled={isSubmitting || !isValid || !dirty}>Submit</button>
                </div>
            </div>
            </Form>
        )}
        </Formik>
    </div>
    )
}

export default Login;