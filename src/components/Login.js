import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleSubmit=(e)=>{
e.preventDefault();

if(email==="" || password===""){
alert("Please fill all fields");
}
else{
alert("Login Successful");
}
};

return(

<div className="container">

<form className="form" onSubmit={handleSubmit}>

<h2>Login</h2>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">Login</button>

<p>
Don't have an account? <Link to="/register">Register</Link>
</p>

</form>

</div>

);
}

export default Login;