import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from 'axios';
import "./Cash.css"
import Nav from "../NavigationBar/Nav";
import Footer from "../Footer/footer";
import payment from "./Image/cashpayment.png";
import Gcash from "./Image/Gcash.png";
import Paymaya from "./Image/Paymaya.png";


function donateNow() {

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        address: "",
        gender: "",
        amount: "",
        transactionID: "",
        request: 0,
        username: "Pending"
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(2, "Your Name is too short").required(),
        lastName: Yup.string().required(),
        email: Yup.string().min(7, "Short Email Address").required(),
        number: Yup.number().required(),
        address: Yup.string().min(10, "Short Address").required(),
        gender: Yup.string().required().notOneOf([""], "Please select a Gender"),
        amount: Yup.number().required(),
        transactionID: Yup.number().required(),
        request: Yup.number().required(),
        username: Yup.string().required(),
    });
    
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/cash", data).then((response) => {
            if (response.data) {
                alert("Successful Donation");
            }
            else {
                alert("Unsuccessful Donation");
            }
        });
    }
return (
    <div>
        <Nav/>
        <><br></br><br></br><br></br><br></br></>
        <p className="cash-quote">"Giving is not just about making a decision, it's about making a difference."</p>
        <div className="payment-container">
            <img src={Gcash} className="payment"/>
            <img src={Paymaya} className="payment"/>
        </div>
        <h3 style={{ textAlign:"center" }}>CASH DONATION PLATFORMS</h3>

        <p style={{ textAlign:"center" }}>If you are not a student at ACLC College of tacloban you can bypass the donator information form</p>

        <div className="donation-form">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="form-container">
            <h1 className="donate-header">IN CASH DONATION</h1>
                <div className="donate-column">
                    <Field 
                        className="input-field"
                        name="firstName"
                        placeholder="First Name"
                    />
                    <ErrorMessage name="firstName" element={<span/>}/>
                    <br/>
                    <Field
                        className="input-field"
                        id="donateNowPost"
                        name="lastName"
                        placeholder="Last Name"
                    />
                    <ErrorMessage name="lastName" element={<span />}/>
                    <br/>
                    <Field
                        className="input-field"
                        id="donateNowPost"
                        name="email"
                        placeholder="Email"
                    />
                    <ErrorMessage name="email" element={<span />}/>
                    <br/>
                    <Field
                        className="input-field"
                        id="donateNowPost"
                        name="number"
                        type="number"
                        placeholder="Phone Number"
                    />
                    <ErrorMessage name="number" element={<span />}/>
                    <br/>
                </div>
                <div className="donate-column">
                    <Field
                        className="input-field"
                        id="donateNowPost"
                        name="address"
                        placeholder="Address"
                    />
                    <ErrorMessage name="address" element={<span />}/>
                    <br/>
                    <Field
                        className="select-field"
                        id="donateNowPost"
                        name="gender"
                        placeholder="Gender"
                        as="select"
                    >
                    <option value="" className="option-gender">Gender</option>
                    <option value="Male" className="option-gender">Male</option>
                    <option value="Female" className="option-gender">Female</option>
                    </Field>
                    <ErrorMessage name="gender" element={<span />}/>
                    <br/>
                    <Field
                        className="input-field"
                        id="donateNowPost"
                        name="amount"
                        type="number"
                        placeholder="Amount"
                    />
                    <ErrorMessage name="amount" element={<span />}/>
                    <br/>
                    <Field
                        className="input-field"
                        id="donateNowPost"
                        name="transactionID"
                        type="number"
                        placeholder="Transaction ID"
                    />
                    <ErrorMessage name="transactionID" element={<span />}/>
                    <br/>
                </div>
                <button type="submit" className='btnDonate'>Donate</button>
            </Form>
        </Formik>
        </div>
        <Footer/>
    </div>
)
}

export default donateNow
