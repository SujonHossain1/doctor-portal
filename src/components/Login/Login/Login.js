import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import './Login.css';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import loginImage from '../../../images/login.png';

import {
    initializeAppFirebase,
    signInWithEmailAndPasswordOwn,
    signUpWithEmailAndPassword
} from '../FirebaseMananger/FirebaseManager';
const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(true);

    initializeAppFirebase();
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    // SingUp with First Name, Last Name, Email and Password
    const onSubmit = (data, event) => {
        const { firstName, lastName, email, password, confirmPassword } = data;

        if (newUser && firstName && lastName && email && confirmPassword) {
            const name = `${firstName} ${lastName}`;
            signUpWithEmailAndPassword(name, email, confirmPassword)
                .then(res => {
                    setLoggedInUser(res);
                    event.target.reset();
                })
                .catch(err => {
                    setLoggedInUser(err);
                    setNewUser(true);
                    history.replace('/login');
                })
        }

        if (!newUser && email && password) {
            signInWithEmailAndPasswordOwn(email, password)
                .then(res => {
                    setLoggedInUser(res);
                    history.replace(from);
                })
                .catch(err => {
                    setLoggedInUser(err);
                    history.replace('/login');
                })
        }
    }

    return (
        <section className="login-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className=" col-md-6  " >
                        <form onSubmit={handleSubmit(onSubmit)} className="login-form-style p-4 mt-3" style={{ border: '1px solid #ced4da' }}>
                            < p style={{ fontSize: '21', fontWeight: '600' }}>
                                {newUser ? 'Create An Account' : 'Login Now'}
                            </p>
                            {newUser && <>
                                <div className="form-group">
                                    <input className="form-control"
                                        ref={register({
                                            required: "First Name is required",
                                            minLength: {
                                                value: 2,
                                                message: "Must 2 be Characters"
                                            }
                                        })}
                                        type="text"
                                        name="firstName"
                                        placeholder="First name"
                                    />
                                    {errors.firstName && <span className="error">{errors.firstName.message}</span>}
                                </div>
                                <div className="form-group">
                                    <input className="form-control"
                                        ref={register({ required: "Last Name is required" })}
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                    />
                                    {errors.lastName && <span className="error">{errors.lastName.message}</span>}
                                </div>
                            </>}
                            <div className="form-group">
                                <input className="form-control"
                                    ref={register({
                                        required: "Email is required",
                                        pattern: {
                                            value: /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                />
                                {errors.email && <span className="error">{errors.email.message}</span>}
                            </div>
                            <div className="form-group">
                                <input className="form-control"
                                    ref={register({
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: 'Password Must Be at least 6 Characters'
                                        }
                                    })}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                {errors.password && <span className="error">{errors.password.message}</span>}
                            </div>
                            {
                                newUser && <div className="form-group">
                                    <input className="form-control"
                                        ref={register({
                                            validate: (value) => value === watch('password')
                                        })}
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                    />
                                    {errors.confirmPassword && <span className="error">Passwords don't match.</span>}
                                </div>
                            }


                            <button type="submit" className="btn btn-sm btn-primary py-2 mt-2" style={{fontSize: '14px'}}>
                                {newUser ? 'Create an account' : 'Login In'}
                            </button>

                            <p className="have-account">
                                {newUser ? 'Already have an account? ' : "Don't have an account ?"}
                                <span onClick={() => setNewUser(!newUser)}> {newUser ? 'Login' : 'Create an account'} </span>
                            </p>
                            <p style={{ color: 'red', fontSize: '14px', textAlign: 'center' }}> {loggedInUser.error} </p>
                        </form>

                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={loginImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;