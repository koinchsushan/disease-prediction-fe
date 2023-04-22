import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Button from "@material-ui/core/Button";

import { PatientReport } from "./PatientReport";

function ReportPdf() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });

    return (
        <div>
            <div className="save-btn">
                <Button size="small" onClick={handlePrint}>
                    Save pdf
                </Button>
            </div>
            <PatientReport ref={componentRef} />
        </div>
    );
}

export default ReportPdf;
