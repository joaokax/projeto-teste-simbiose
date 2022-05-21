import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav>
            <Link to="/">home</Link><br/>
            <Link to="/Cadastro">Cadastro</Link><br/>
        </nav>
    );
}