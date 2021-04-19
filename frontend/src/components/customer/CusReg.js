import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Register = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [address, setAddress] = useState("");
    const [NIC, setNIC] = useState("");
    const [nationality, setNationality] = useState("");
    const [passportNo, setPassportNo] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    async function register(e){
        e.preventDefault();

        try{
            const registerData = {
                fname,
                lname, 
                address,
                NIC, 
                nationality,
                passportNo, 
                email,
                contact, 
                password, 
                passwordVerify, 
            };

            await axios.post("http://localhost:5000/customer/add", registerData);

        }catch(err){
            console.error(err);
        }
    }

    return ( 
        <div>

            <form onSubmit={register}>
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr></hr>
                <label for="fname"><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name" name="fname" id="fname" onChange={(e) => {
                            setFname(e.target.value);
                        }} required />

                <label for="lname"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" name="lname" id="lname" onChange={(e) => {
                            setLname(e.target.value);
                        }} required />

                <label for="address"><b>Address</b></label>
                <input type="text" placeholder="Enter Address" name="address" id="address" onChange={(e) => {
                            setAddress(e.target.value);
                        }} required />

                <label for="NIC"><b>NIC</b></label>
                <input type="text" placeholder="Enter NIC" name="NIC" id="NIC" onChange={(e) => {
                            setNIC(e.target.value);
                        }} required />

                <label for="nationality"><b>Nationality</b></label>
                <input type="text" placeholder="Enter Nationality" name="nationality" id="nationality" onChange={(e) => {
                            setNationality(e.target.value);
                        }} required />
                <label for="passportNo"><b>PassportNo</b></label>
                <input type="text" placeholder="Enter PassportNo" name="passportNo" id="passportNo" onChange={(e) => {
                            setPassportNo(e.target.value);
                        }} required />

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" onChange={(e) => {
                            setEmail(e.target.value);
                        }} required />

                <label for="contact"><b>Contact</b></label>
                <input type="text" placeholder="Enter Contact" name="contact" id="contact" onChange={(e) => {
                            setContact(e.target.value);
                        }} required />

                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" id="password" onChange={(e) => {
                            setPassword(e.target.value);
                        }} required />

                <label for="passwordVerifyt"><b>Verify Password</b></label>
                <input type="password" placeholder="Repeat Password" name="passwordVerify" id="passwordVerify" onChange={(e) => {
                            setPasswordVerify(e.target.value);
                        }} required />
                <hr></hr>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" className="registerbtn">Register</button>
            </div>
            
            <div className="container signin">
                <p>Already have an account? <a href="/cusLogin">Sign in</a>.</p>
            </div>
            </form>

        </div>
     );
}
 
export default Register;