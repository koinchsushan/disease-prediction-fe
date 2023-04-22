import React from "react";

import "./AccountLogin.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useLocation, useNavigate } from "react-router";

function AccountLogin() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className="accountlogin">
            <p>{location.state.name}</p>
            <div className="accounticon">
                <AccountCircleIcon />
                <ExitToAppIcon onClick={() => navigate("/")} />
            </div>
        </div>
    );
}

export default AccountLogin;
