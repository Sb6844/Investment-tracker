import { Formik, Form, Field } from "formik";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/auth";




const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();



function validateEmail(value) {
    let error;
    if(!value) {
        error = 'Email Required';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validateUsername(value) {
    let error;
    if(!value)
    {
        error = 'Username Required';
    }
    return error;
}
function validatePassword(value) {
    let error;
    if(!value)
    {
        error = 'Password Required';
    }
    return error;
}

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    }

    const onChangeEmail = (e) => {
    }

    const onChangePassword = (e) =>  {
        const password = e.target.password;
        setPassword(password);
    }



    const containerStyle = {
        width: '100%',
        padding: '10px',
        border: '5px solid gray'
    }

    const errorMsg = {
        color: 'red'
    }

    return (
        <div>
            <div className="container" style={containerStyle}>
            <h1>Register!</h1>
                <Formik
                initialValues={{username: '', email: '', password: '' }}
                onSubmit={values => {
                    console.log(values);
                        // setSuccessful(false);
                        // dispatch(register(username, email, password)).then(() =>
                        // {
                        //     setSuccessful(true);
                        // }).catch(() => {
                        //     setSuccessful(false);
                        // });
                }}>
                    {({ errors,
                        touched,
                        isSubmitting,
                        isValid,
                        dirty }) => (
                        <Form>
                            <div className="row">
                                    <div className="col-sm">
                                    <Field name = "email" placeholder="Email" validate={validateEmail} onKeyUp={onChangeEmail}></Field>
                                    {errors.email && touched.email && <div style={errorMsg}>{errors.email}</div>}
                                    </div>
                                
                                    <div className="col-sm">
                                    <Field name ="username" placeholder="Username" validate={validateUsername} onKeyUp={onChangeUsername}></Field>
                                    {errors.username && touched.username && <div style={errorMsg}>{errors.username}</div>}
                                    </div>
                            
                                    <div className="col-sm">
                                    <Field name="password" placeholder="Password" validate={validatePassword} onKeyUp={onChangePassword}></Field>
                                    {errors.password && touched.password && <div style={errorMsg}>{errors.password}</div>}
                                    </div>
                                
                                    <div className="col-sm">
                                    <button type="submit" disabled={isSubmitting || !isValid || !dirty}>Submit</button>
                                    </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Register;


