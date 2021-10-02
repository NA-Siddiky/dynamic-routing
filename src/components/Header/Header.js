import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const navStyle = {
        fontWeight: "bold",
        color: "red",
    };

    return (
        <div style={{ textAlign: "center" }}>
            <NavLink to="/home" activeStyle={navStyle}>
                Home
            </NavLink>
            <NavLink
                style={{ marginLeft: '10px' }}
                to="/friends"
                activeStyle={navStyle}
            >
                Friends
            </NavLink>
        </div>
    );
};

export default Header;
