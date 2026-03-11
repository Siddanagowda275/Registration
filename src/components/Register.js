import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

function Register() {

const [form,setForm] = useState({
name:"",
email:"",
mobile:"",
password:"",
confirmPassword:""
});

const [errors,setErrors] = useState({});

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const validate = ()=>{
let err={};

if(!form.name) err.name="Full Name Required";

if(!/\S+@\S+\.\S+/.test(form.email))
err.email="Invalid Email";

if(!/^[0-9]{10}$/.test(form.mobile))
err.mobile="Mobile must be 10 digits";

if(form.password.length <6)
err.password="Password must be 6 characters";

if(form.password!==form.confirmPassword)
err.confirmPassword="Passwords do not match";

setErrors(err);

return Object.keys(err).length===0;
};

const handleSubmit=(e)=>{
e.preventDefault();

if(validate()){
alert("Registration Successful");
}
};

return(

<div className="container">

<form className="form" onSubmit={handleSubmit}>

<h2>Register</h2>

<input
type="text"
name="name"
placeholder="Full Name"
onChange={handleChange}
/>
<p>{errors.name}</p>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
/>
<p>{errors.email}</p>

<input
type="text"
name="mobile"
placeholder="Mobile Number"
onChange={handleChange}
/>
<p>{errors.mobile}</p>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
/>
<p>{errors.password}</p>

<input
type="password"
name="confirmPassword"
placeholder="Confirm Password"
onChange={handleChange}
/>
<p>{errors.confirmPassword}</p>

<button type="submit">Register</button>

<p>
Already have account? <Link to="/">Login</Link>
</p>

</form>

</div>

);
}

export default Register;