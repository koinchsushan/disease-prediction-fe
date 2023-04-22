import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import "./Symptoms.css";
import ShowSymp from "./ShowSymp";

function Symptoms({ bdata }) {
    const [openSuggest, setOpenSuggest] = useState(false);
    const [symptom, setSymptom] = useState({});
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [filteredData, setFilteredData] = useState(bdata);
    const ref = useRef(null);
    const [result, setResult] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const inputs = e.target.value;
        setSymptom({ id: null, name: inputs });
        const newFiltered = bdata.filter((value) => {
            return value.name.toLowerCase().includes(inputs.toLowerCase());
        });
        setFilteredData(newFiltered);
    };

    function handleSelect(val) {
        setSymptom(val);
        setOpenSuggest(false);
    }

    const handleAddSymptom = (e) => {
        e.preventDefault();
        if (symptom.name && symptom.id !== null) {
            setSelectedSymptoms([
                ...selectedSymptoms,
                { item: symptom.name, key: symptom.id }
            ]);
            setSymptom({});
            setFilteredData(bdata);
        }
    };

    const handleSubmit = () => {
        let payload = {};
        selectedSymptoms.forEach((symptomObj, i) => {
            payload = { ...payload, ["symptom" + (i + 1)]: symptomObj.item };
        });
        axios
            .post("http://127.0.0.1:8000/api/v1/predict", payload)
            .then((res) => {
                const resultDisease = res.data.Disease;
                getResult(resultDisease);
            })
            .catch((error) => console.log(error));
    };

    function getResult(result) {
        navigate("/report", {
            state: {
                Age: location.state.Age,
                Gender: location.state.Gender,
                Name: location.state.Name,
                Symptoms: selectedSymptoms,
                Result: result
            }
        });
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                ref.current &&
                !ref.current.contains(event.target) &&
                !event.target.classList.contains("list-name")
            ) {
                setOpenSuggest(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <div className="entersym-container">
            <div className="entersym-box">
                <div className="enter">
                    <div className="enter-heading">
                        <h1 className="enter-h1">What are your Symptoms?</h1>
                    </div>
                    <div className="enter-form">
                        <form
                            className="form-enter"
                            onSubmit={handleAddSymptom}
                        >
                            <input
                                autoComplete="off"
                                ref={ref}
                                className="form-in"
                                type="text"
                                name="symp"
                                placeholder="e.g. headache, fever"
                                onChange={handleInputChange}
                                onFocus={() => setOpenSuggest(true)}
                                value={
                                    symptom?.name?.replaceAll("_", " ") || ""
                                }
                            />
                            <button type="submit" className="add">
                                Add
                            </button>
                        </form>
                    </div>
                    <div className="dropdown-box">
                        {openSuggest && (
                            <div className="options">
                                {filteredData.map((value) => {
                                    return (
                                        <a
                                            className="option"
                                            key={value.id}
                                            onClick={() => handleSelect(value)}
                                            value={filteredData}
                                        >
                                            <p className="list-name">
                                                {value.name.replaceAll(
                                                    "_",
                                                    " "
                                                )}
                                            </p>
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
                <div className="showsymp">
                    <ShowSymp
                        selectedSymptoms={selectedSymptoms}
                        setSelectedSymptoms={setSelectedSymptoms}
                    />
                </div>
                <button className="add-button" onClick={handleSubmit}>
                    Continue
                </button>
            </div>
        </div>
    );
}

export default Symptoms;
