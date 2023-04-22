import React from "react";

import "./SignIn.css";
import Input from "./Input";
import useForm from "./useForm";
import validate from "./validateInfo";
import kevo from "../images/kevo-logo.png";
import { Link } from "react-router-dom";

function SignIn() {
    const { handleChange, handleSubmit, values, errors } = useForm(validate);

    return (
        <section>
            <div className="signin-container">
                <div className="box">
                    <div className="left-column">
                        <div className="left-wrapper">
                            <img src={kevo} className="img-logo" />
                        </div>
                    </div>

                    <div className="right-column">
                        <div className="right-wrapper">
                            <img className="img-logo" src={kevo} />
                        </div>
                        <div className="form-header">
                            <h2 className="heading">Welcome back!</h2>
                            <p className="sub-heading">Please enter your details</p>
                        </div>
                        <div className="form-box">
                            <form
                                onSubmit={handleSubmit}
                                className="input-field"
                            >
                                <div>
                                    <Input
                                        autoFocus
                                        className="signin-input"
                                        placeholder="Enter Email / Username"
                                        id="username"
                                        name="username"
                                        type="text"
                                        value={values.username}
                                        onChange={handleChange}
                                    />
                                    {errors.username && (
                                        <p className="signin-p">
                                            {errors.username}
                                        </p>
                                    )}
                                    <Input
                                        className="signin-input"
                                        placeholder="Password"
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && (
                                        <p className="signin-p">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="signin-button"
                                    >
                                        Log In
                                    </button>
                                </div>
                            </form>
                        </div>

                        <p className="new-account">
                            Don't have an account? <Link className="link-text" to="/signup">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
