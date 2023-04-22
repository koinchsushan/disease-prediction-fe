import { useState } from "react";
import { useNavigate } from "react-router";

const useForm = (validate) => {
    const [values, setValues] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const history = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(values));

        const data = {
            username: values.username,
            password: values.password
        };
        if (
            data.username === "koinchsushan@gmail.com" &&
            data.password === "123456"
        ) {
            console.log("Done");
            history("/home", { state: { name: data.username } });
        } else if (
            data.username === "merajshrestha01@gmail.com" &&
            data.password === "123456"
        ) {
            console.log("Done");
            history("/home", { state: { name: data.username } });
        } else if (
            data.username === "sharmakalyan25@gmail.com" &&
            data.password === "123456"
        ) {
            console.log("Done");
            history("/home", { state: { name: data.username } });
        } else {
            console.log("Wrong username or password!");
            alert("Wrong Username or Password");
        }
    };

    return { handleChange, values, errors, handleSubmit };
};

export default useForm;
