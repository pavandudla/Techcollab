import React from "react";
import { useRouteError } from "react-router-dom";


const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Wrong Route</h1>
            <h3>{err.data}</h3>
            <h3>{err.status}</h3>
            <p>Go Back🔙</p>
        </div>
    )
}

export default Error;