import React from "react";
import "./Header.css";
import AccountLogin from "../AccountLogin/AccountLogin";

function Header() {
    return (
        <div className="bar">
            <div className="logo">
                <p className="logo-text">Kevo</p>
            </div>
            <div className="diseaselabel">Disease Prediction System</div>
            <div className="AccountLogin">
                <AccountLogin />
            </div>
        </div>
    );
}

export default Header;
