import React from "react";
import {Link } from "react-router-dom";
function HomePage() {
    return (
        <div className="jumbotron">
            <h1>Hello World</h1>
            <p>Hdsdadodsalkdjasldajsdap wieqwoe ewueioqowm. dsdsaoida a</p>
            <Link to="/about" className="btn btn-primary">About</Link>
        </div>
    )
}

export default HomePage;