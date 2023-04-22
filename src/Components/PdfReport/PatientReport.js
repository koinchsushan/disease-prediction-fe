import React from "react";
import "./PdfReport.css";
import { useLocation } from "react-router";

export const PatientReport = React.forwardRef((props, ref) => {
    const location = useLocation();
    return (
        <div ref={ref} className="watermark">
            <h1 className="pr">Patient Report</h1>
            <div className="pdfreport">
                <div>
                    Patients's Email / Username: <b>{location.state.Name}</b>
                </div>

                <div>
                    Age: <b>{location.state.Age}</b>
                </div>

                <div>
                    Gender:{" "}
                    <b style={{ textTransform: "uppercase" }}>
                        {location.state.Gender}
                    </b>
                </div>

                <div>
                    Symptoms:{" "}
                    <b style={{ textTransform: "uppercase" }}>
                        {location.state.Symptoms.map(
                            (sympObj) => " " + sympObj.item
                        )
                            .toString()
                            .replaceAll("_", " ")}
                    </b>
                </div>

                <div>
                    Predicted Disease: <b>{location.state.Result}</b>
                </div>
            </div>
            <div className="contact">
                Contact us:
                <br></br>
                +977 9841098765
                <br></br>
                predictdisease@gmail.com
            </div>
        </div>
    );
});
