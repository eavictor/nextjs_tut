import React from "react";
import Link from "next/link";
import Router from "next/router";
import User from "../../components/User";


const authPage = (props) => (
    <div>
        <h1>The Index page of {props.appName}</h1>
        <p>Go to <Link href="/"><a>Index</a></Link></p>
        <button onClick={() => Router.push("/")}>Go to Index</button>
        <User name="Victor" age="30" />
    </div>
);

authPage.getInitialProps = async (context) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve({appName: "Super App (Auth)"})}, 1000);
    });
};


export default authPage;