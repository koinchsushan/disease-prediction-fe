import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignUp.css";
import Input from "../AccountLogin/Input";
import validate from "../AccountLogin/validateInfo";
import kevo from "../images/kevo-logo.png";

function SignUp() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        fullname: "",
        username: "",
        password: "",
        cPassword: ""
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const errors = validate(values);
        if (errors.username || errors.password) {
            setErrors(errors);
        } else {
            console.log("Account created successfully.");
            navigate("/");
        }
    };

    return (
        <section>
            <div className="signup-main-container">
                <div className="signupcontainer">
                    <div className="signup-box">
                        <div className="left-column">
                            <div className="left-wrapper">
                                <img className="img-logo" src={kevo} />
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="right-wrapper">
                                <img src={kevo} />
                            </div>
                            <h2 className="heading">Create an account</h2>
                            <div className="form-box">
                                <form
                                    onSubmit={submitHandler}
                                    className="input-field"
                                >
                                    <div className="namesection">
                                        <Input
                                            autoFocus
                                            className="signin-input"
                                            name="fullname"
                                            type="text"
                                            id="fullname"
                                            placeholder="Name"
                                            value={values.fullname}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                    <div className="epsec">
                                        <Input
                                            className="signin-input"
                                            placeholder="Email / Username"
                                            id="username"
                                            name="username"
                                            type="text"
                                            value={values.username}
                                            onChange={changeHandler}
                                        />
                                        {errors.username && (
                                            <p className="signin-p">
                                                {errors.username}
                                            </p>
                                        )}
                                    </div>

                                    <div className="pcsec">
                                        <Input
                                            className="signin-input"
                                            placeholder="Password"
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={values.password}
                                            onChange={changeHandler}
                                        />
                                        {errors.password && (
                                            <p className="signin-p">
                                                {errors.password}
                                            </p>
                                        )}
                                        <Input
                                            className="signin-input"
                                            placeholder="Confirm Password"
                                            id="cPassword"
                                            name="cPassword"
                                            type="password"
                                            value={values.cPassword}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                    <button className="signin-button">
                                        Sign Up
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;
